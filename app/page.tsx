import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <span className="inline-block bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm">
            🚀 Built on Android with Termux
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Forge Mobile
        </h1>
        
        <p className="text-xl text-gray-400 mb-8">
          Developer tools built <span className="text-green-400 underline">from</span> a phone<br />
          for developers on phones.
        </p>
        
        <Link 
          href="/vault"
          className="inline-block px-8 py-4 bg-green-600 text-black rounded font-bold text-lg hover:bg-green-500 transition"
        >
          Browse Script Vault →
        </Link>
      </div>
    </div>
  )
}
