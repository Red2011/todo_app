import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-screen" lang="en">
      <Head/>
      <body className="h-screen bg-gradient-to-bl from-gray-300 via-fuchsia-600 to-orange-600 bg-fixed bg-400% animate-bg-gradient-slow-15">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
