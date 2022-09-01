import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home">
    <div className="w-full flex flex-col gap-8 my-auto">
      <div className="w-full h-12 relative">
        <Image
          src="/logo.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1 className="text-primary font-medium text-5xl">React Challenge</h1>
      <p className="text-primary text-2xl">
        Follow the steps of the challenge you received.
      </p>
      <div className="flex flex-col gap-4 text-2xl">
        <Link href="/scenario1">
          <a className="hover:underline">Scenario 1</a>
        </Link>
        <Link href="/scenario2">
          <a className="hover:underline">Scenario 2</a>
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
