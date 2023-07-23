import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li>About</li>
            <li>Signup</li>
          </ul>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
