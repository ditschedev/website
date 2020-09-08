import '@/css/tailwind.css'
import Head from 'next/head'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'

export default function App({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ea8c35" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <script src="https://unpkg.com/@logowl/adapter-browser@2.3.0/dist/logowl-adapter-browser.js" crossorigin />

          <script dangerouslySetInnerHTML={{__html: `window.logowl&&window.logowl.init({ticket:'17D8EF869669FDEB5A6D121A9F283C0D0014C2EAA638C1ECD7',sendAnalytics:!0})` }} />
      </Head>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </SectionContainer>
    </div>
  )
}
