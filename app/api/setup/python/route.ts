import { NextResponse } from 'next/server';

export async function GET() {
  const script = `#!/data/data/com.termux/files/usr/bin/bash
# Forge Mobile - Python Installer
echo "🐍 Installing Python on Termux..."
pkg update -y
pkg install -y python
python --version
pip --version
echo "✅ Python installed successfully!"
`;

  return new NextResponse(script, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': 'inline'
    }
  });
}
