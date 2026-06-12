export default function VaultPage() {
  const scripts = [
    {
      name: 'Node.js LTS',
      cmd: 'curl -fsSL https://forge-mobile.vercel.app/api/setup/node | bash',
      difficulty: 'Beginner'
    },
    {
      name: 'Python + pip',
      cmd: 'curl -fsSL https://forge-mobile.vercel.app/api/setup/python | bash',
      difficulty: 'Beginner'
    },
    {
      name: 'Full Dev Kit',
      cmd: 'curl -fsSL https://forge-mobile.vercel.app/api/setup/full | bash',
      difficulty: 'Intermediate'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-gray-500 hover:text-green-400">← Back</Link>
        <h1 className="text-3xl font-bold mt-4 mb-8">🔧 Script Vault</h1>
        <div className="space-y-4">
          {scripts.map((script) => (
            <div key={script.name} className="border border-green-400/30 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{script.name}</h2>
                <span className="text-xs text-green-500">{script.difficulty}</span>
              </div>
              <code className="block bg-gray-900 p-3 rounded text-sm overflow-x-auto">
                {script.cmd}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
