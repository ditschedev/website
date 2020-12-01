import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/ditschedev.jpg'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MM} {Do}')

export default function Home() {
  return (
    <div className="space-y-40">
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
        <title>Toby Christopher - Developer @ditschedev</title>
        <meta name="description" content="Personal website of Toby Christoper (@ditschedev)." />
      </Head>
      <div className="pt-20">
        <div className="mb-6">
          <h3 className="text-gray-700 text-2xl">
            Hello! My name is <span className="text-gray-900 font-medium">Toby</span>. <br/>
            I am a <span className="text-gray-900 font-medium">developer</span> based in Hamburg.
          </h3>
        </div>
        <div className="text-base leading-6 font-medium">
          <Link href="/about">
            <a
                className="text-primary-500 hover:text-primary-600"
                aria-label="About me"
            >
              Learn more &rarr;
            </a>
          </Link>
        </div>
      </div>
      <hr/>
      <div className="mb-12">
        <div className="mb-6">
          <h3 className="text-gray-700 text-2xl">
            Communication is key
          </h3>
          <p className="text-base text-gray-500">
            I am always looking for new project, challanges or collaborations. Wether you have a new business idea or need help in an open source project. Just hit me up!
          </p>
        </div>
        <div className="text-base leading-6 font-medium">
          <a
              href="mailto:hello@ditsche.dev"
              className="text-primary-500 hover:text-primary-600"
              aria-label="Mail me at hello@ditsche.dev">
            hello@ditsche.dev &rarr;
          </a>
        </div>
      </div>
      <hr/>
      <div className="xl:flex xl:space-x-16">
        <div className="mb-16 xl:mb-0 xl:w-1/2">
          <div className="mb-6">
            <h3 className="text-gray-700 text-2xl">
              I write articles about tech
            </h3>
            <p className="text-base text-gray-500">
              Whenever I discover something that is worth writing about I try to write a blog post. So if you are interested in tutorials or my opinion
              regarding new technologies give it a go.
            </p>
          </div>
          <div className="text-base leading-6 font-medium">
            <Link href="/blog">
              <a
                  className="text-primary-500 hover:text-primary-600"
                  aria-label="Go to my blog">
                Go to blog &rarr;
              </a>
            </Link>
          </div>
        </div>
        <div className="xl:w-1/2 space-y-6">
          {posts.slice(0, 3).map(({ link, module: { default: Component, meta } }) => {
            return (
                <div key={link} className="flex space-x-6">
                  <dl className="inline-block">
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm leading-6 font-medium text-gray-500">
                      <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
                    </dd>
                  </dl>
                  <div className="flex-1 text-base leading-6 font-medium">
                    <Link href={link}>
                      <a
                          className="flex text-gray-800 hover:text-gray-900"
                          aria-label={`Read "${meta.title}"`}>
                        <span className="flex-1">{meta.title}</span> <span className="text-primary-500 pl-4">&rarr;</span>
                      </a>
                    </Link>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
