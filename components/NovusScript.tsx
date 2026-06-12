'use client';

import { useEffect } from 'react';

export default function NovusScript() {
  useEffect(() => {
    const apiKey = 'c21f7893-dcb3-4103-8f68-408d25f5e8e0';
    
    // Simple script injection that always works
    const script = document.createElement('script');
    script.src = `https://cdn.pendo.io/agent/static/${apiKey}/pendo.js`;
    script.async = true;
    document.head.appendChild(script);
    
    console.log('✅ Novus analytics loading...');
  }, []);

  return null;
}
