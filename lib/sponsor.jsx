'use client';

import { useEffect, useState } from 'react';
import { encodeURL, createQR } from '@solana/pay';
import { PublicKey } from '@solana/web3.js';
import BigNumber from 'bignumber.js';

export default function SolanaPayQR({ 
  recipientAddress, 
  amount, 
  label = 'Sponsorship' 
}) {
  const [qrCodeData, setQrCodeData] = useState(null);

  useEffect(() => {
    const generateQr = async () => {
      try {
        const url = encodeURL({
          recipient: new PublicKey(recipientAddress),
          amount: new BigNumber(amount),
          label,
        });

        // 1. Create the QR object
        const qr = createQR(url, 360, 'white', 'black');
        
        // 2. Get the raw image data (PNG) as a Blob
        const qrBlob = await qr.getRawData('png');
        if (!qrBlob) return;

        // 3. Convert Blob to Data URL
        const reader = new FileReader();
        reader.onload = (event) => {
          if (typeof event.target?.result === 'string') {
            setQrCodeData(event.target.result);
          }
        };
        reader.readAsDataURL(qrBlob);
      } catch (e) {
        console.error("QR Generation failed", e);
      }
    };

    generateQr();
  }, [recipientAddress, amount, label]);

  return (
    <div className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-xl border border-gray-100">
      {qrCodeData ? (
        <img 
          src={qrCodeData} 
          alt="Solana Pay QR Code" 
          className="rounded-xl"
          width={200}
          height={200}
        />
      ) : (
        <div className="w-[360px] h-[360px] bg-gray-100 animate-pulse rounded-xl flex items-center justify-center text-gray-400">
          Generating QR...
        </div>
      )}
      <p className="mt-4 text-lg font-bold text-gray-900">{amount} SOL</p>
    </div>
  );
}