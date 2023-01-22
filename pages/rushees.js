import Head from 'next/head'
import BtnPair from '@/components/BtnPair'

export default function Home() {
  return (
    <>
      <Head>
        <title>TOP 90</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <div className="flex justify-center items-center w-screen h-screen font-lato">
        <BtnPair/>
      </div>
    </>
  )
}