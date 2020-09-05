import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/ditschedev.jpg'

export default function Home() {
    return (
        <div className="divide-y divide-gray-200">
            <Head>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="ditschedev" />
                <meta name="twitter:creator" content="ditschedev" />
                <meta name="twitter:title" content="Toby Christopher" />
                <meta name="twitter:description" content="Personal website of Toby Christoper (@ditschedev)." />
                <meta name="twitter:image" content={`https://ditsche.dev${twitterCard}`} />
                <meta property="og:url" content="https://ditsche.dev" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Toby Christopher" />
                <meta property="og:description" content="Personal website of Toby Christoper (@ditschedev)." />
                <meta property="og:image" content={`https://ditsche.dev${twitterCard}`} />
                <title>Toby Christopher</title>
                <meta name="description" content="Personal website of Toby Christoper (@ditschedev)." />
            </Head>
            <div>
                <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                    <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Under construction ...
                    </h1>
                    <p className="text-lg leading-7 text-gray-500">
                        I am currently working on this page, please come back later!
                    </p>
                </div>
                <div className="text-base leading-6 font-medium">
                    <Link href="/">
                        <a
                            className="text-primary-500 hover:text-primary-600"
                            aria-label="Back to start page"
                        >
                            &larr; Back to home
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
