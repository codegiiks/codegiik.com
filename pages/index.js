import Head from 'next/head'
import Image from 'next/image'

import Logo from 'components/Logo'

export default function Home() {
  return (
    <>
      <Head>
        <title>codegiik | Coming soon...</title>
      </Head>
      <div className="flex items-center min-h-screen w-full justify-center bg-warmGray-100 dark:bg-secondary-500">
        <div className="wrapper text-center w-3/4 max-w-[10rem] flex flex-col items-center justify-center" >
          <Logo height={100} theme="dark" />
          <h1 className="font-light tracking-tight text-4xl mt-5 dark:text-warmGray-100">codegiik</h1>
        </div>
      </div>
    </>
  )
}
