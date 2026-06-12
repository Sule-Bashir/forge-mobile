'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    pendo: any;
  }
}

export default function NovusScript() {
  useEffect(() => {
    const NOVUS_API_KEY = 'c21f7893-dcb3-4103-8f68-408d25f5e8e0';
    
    // Initialize Novus/Pendo with proper typing
    (function(p: any, e: any, n: string, d: string, o: any) {
      var v: any, w: any, x: any, y: any, z: any;
      o = p[d] = p[d] || {};
      o._q = o._q || [];
      v = e.createElement(n);
      v.async = 1;
      v.src = 'https://cdn.pendo.io/agent/static/' + NOVUS_API_KEY + '/pendo.js';
      const s = e.getElementsByTagName(n)[0];
      s.parentNode.insertBefore(v, s);
    })(window, document, 'script', 'pendo');
    
    console.log('✅ Novus initialized');
  }, []);

  return null;
}
