import Movie from './Movie'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

async function getData() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Home() {
  const data = await getData()
  console.log(data)
 
  return (
    <>
    <main>
      <h1>Welcome to Next js 13</h1>
      {data.results.map((movie) => (
        <div>
          <h1 key={movie.id}>{movie.title}</h1>
        </div>
      ))}
    </main>
    </>
  )
}