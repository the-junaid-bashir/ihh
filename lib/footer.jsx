import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent py-12 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logos Column */}
        <div className="flex flex-col space-y-4">
          <div className="w-10 h-10">
            {/* NPM Logo - Simplified SVG or Icon */}
            <a href="https://www.npmjs.com/~immutablehub">
            <svg viewBox="0 0 780 250" className="fill-current">
              <path d="M240,250h100v-200h100v200h200v-250h-400v250z M0,250h100v-250h-100v250z M480,0v200h100v-200h-100z" />
            </svg>
            </a>
          </div>
          <div className="w-10 h-10">
            {/* GitHub Logo */}
            <a href="https://github.com/immutablehub">
            <svg height="32" viewBox="0 0 16 16" width="32" className="fill-current">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            </a>
          </div>
        </div>


        {/* Company Column */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-3 text-gray-600">
            <li><a href="https://github.com/immutablehub/immutablehub/blob/main/README.md" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Terms & Policies Column */}
        <div>
          <h3 className="font-bold text-lg mb-4">Terms & Policies</h3>
          <ul className="space-y-3 text-gray-600">
            <li><a href="/policies" className="hover:underline">Policies</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
          </ul>
        </div>

          
       


         {/* Socials */}
        <div>
          <h3 className="font-bold text-lg mb-4"></h3>
          <ul className="space-y-3 text-gray-600">
            <li><a href="https://x.com/ImmutableHub" className="hover:underline">
            
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
            
            </a></li>
            <li>
            <a href="/" className="hover:underline">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.094.036.307.02.473z"/>
                </svg>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
            
            </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;