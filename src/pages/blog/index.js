import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/og-card.jpg'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

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
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Blog
                </h1>
                <p className="text-lg leading-7 text-gray-500">
                    I love writing and therefore I started creating blog posts. On this page you can find all my latest posts, have fun reading!
                </p>
            </div>
            <ul className="divide-y divide-gray-200">
                {posts.map(({ link, module: { default: Component, meta } }) => {
                    return (
                        <li key={link} className="py-12">
                            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                                <dl>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base leading-6 font-medium text-gray-500">
                                        <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
                                    </dd>
                                </dl>
                                <div className="space-y-5 xl:col-span-3">
                                    <div className="space-y-6">
                                        <h2 className="text-2xl leading-8 font-bold tracking-tight">
                                            <Link href={link}>
                                                <a className="text-gray-900">{meta.title}</a>
                                            </Link>
                                        </h2>
                                        <div className="prose max-w-none text-gray-500">
                                            <Component />
                                        </div>
                                    </div>
                                    <div className="text-base leading-6 font-medium">
                                        <Link href={link}>
                                            <a
                                                className="text-primary-500 hover:text-primary-600"
                                                aria-label={`Read "${meta.title}"`}
                                            >
                                                Read more &rarr;
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
