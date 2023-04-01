import Head from 'next/head'
import { Inter } from 'next/font/google'
import HeroFold from 'src/folds/home/HeroFold'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Reset Society</title>
        <meta name="description" content="We believe that by fostering creativity, empathy, and collaboration, we can bring about meaningful change that benefits both humanity and the planet. Our goal is to provide a space where individuals from diverse backgrounds can come together to share ideas, collaborate on innovative solutions, and create a more sustainable and equitable world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroFold />
      </main>
    </>
  )
}
