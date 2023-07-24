import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()

  return (
    <main>
      <h1 className='text-lg my-2'>Hello Next Js 13</h1>
      {res.map((movie) => (
        <div>
          <h1>{movie.title}</h1>
        </div>
      ))}
    </main>
  )
}

export default Home