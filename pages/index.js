import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`).json()
  let data = await res.json()
  console.log(data)
  return (
    <main>
      <h1 className='text-lg my-2'>Hello Next Js 13</h1>
    </main>
  )
}