import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Cowichan Valley Wood Design</title>
        <meta name="description" content="Cowichan Valley Wood Design Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       

      <h1>Home Test</h1>
      <Box>
        <Image src='/Cvwd jpeg/IMG_0077.jpeg' width={500} height={500} alt={'Cowichan Valley Wood Design Logo'} ></Image>
      </Box>
      
      </main>

    </>
  )
}
