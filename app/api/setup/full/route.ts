import { NextResponse } from 'next/server';

export async function GET() {
  const script = `#!/data/data/com.termux/files/usr/bin/bash
# Forge Mobile - Full Development Kit
echo "🔧 Installing Full Dev Kit on Termux..."
pkg update -y
pkg install -y nodejs-lts python git vim
node --version
python --version
git --version
echo "✅ Full Dev Kit installed successfully!"
`;

  return new NextResponse(script, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': 'inline'
    }
  });
}
