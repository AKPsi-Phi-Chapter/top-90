import Head from 'next/head'
import Candidate from '@/components/Candidate'

export default function Home() {
  return (
    <>
      <Head>
        <title>TOP 90</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <div className="flex justify-center items-center w-screen lg:h-screen h-fit bg-gold lg:overflow-y-hidden overflow-y-scroll font-lato">
        <Candidate/>
      </div>
    </>
  )
}
