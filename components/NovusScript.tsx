'use client';

import { useEffect } from 'react';

export default function NovusScript() {
  useEffect(() => {
    // Your Novus/Pendo API Key
    const NOVUS_API_KEY = 'c21f7893-dcb3-4103-8f68-408d25f5e8e0';
    
    // Initialize Novus/Pendo
    (function(p,e,n,d,o){
      var v,w,x,y,z;
      o=p[d]=p[d]||{};
      o._q=[];
      v=e.createElement(n);
      v.async=1;
      v.src='https://cdn.pendo.io/agent/static/' + NOVUS_API_KEY + '/pendo.js';
      const s=e.getElementsByTagName(n)[0];
      s.parentNode.insertBefore(v,s);
    })(window,document,'script','pendo');
    
    console.log('✅ Novus initialized with API key');
  }, []);

  return null;
}
