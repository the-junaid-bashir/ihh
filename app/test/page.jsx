import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ProIDCard = ({ user }) => {
  // Default data if props are missing
  const data = user || {
    name: "Jonathan Maxwell",
    role: "Senior Solutions Architect",
    idNumber: "EMP-2024-089",
    email: "j.maxwell@techcorp.com",
    phone: "+1 (555) 000-1234",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-6">
      <div className="relative w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Top Accent Header */}
        <div className="h-24 bg-gradient-to-br from-indigo-600 to-violet-700 flex justify-end p-4">
          <div className="text-white opacity-20 font-black text-4xl italic select-none">
            PPD
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="relative -mt-12 flex justify-center">
          <div className="p-1 bg-white rounded-full shadow-lg">
            <img 
              src={data.avatar} 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border-2 border-slate-50"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center mt-4 px-6">
          <h2 className="text-xl font-bold text-slate-800">{data.name}</h2>
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-1">
            {data.role}
          </p>
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-[10px] rounded-full font-mono">
            ID: {data.idNumber}
          </span>
        </div>

        {/* Contact Details */}
        <div className="mt-6 px-8 space-y-3 pb-8">
          <div className="flex items-center gap-3 text-slate-600">
            <Mail size={16} className="text-indigo-500" />
            <span className="text-xs truncate">{data.email}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <Phone size={16} className="text-indigo-500" />
            <span className="text-xs">{data.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <MapPin size={16} className="text-indigo-500" />
            <span className="text-xs">{data.location}</span>
          </div>
        </div>

        {/* Footer with QR Code Placeholder */}
        <div className="bg-slate-50 border-t border-slate-100 p-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400">Valid Until</span>
            <span className="text-xs font-semibold text-slate-700">Dec 2026</span>
          </div>
          
          {/* Mock QR Code */}
          <div className="w-12 h-12 bg-white p-1 border border-slate-200 rounded-md">
            <div className="w-full h-full bg-slate-800 grid grid-cols-3 gap-0.5 p-0.5">
               {[...Array(9)].map((_, i) => (
                 <div key={i} className={`bg-${i % 2 === 0 ? 'white' : 'slate-800'}`}></div>
               ))}
            </div>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-br-full pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ProIDCard;