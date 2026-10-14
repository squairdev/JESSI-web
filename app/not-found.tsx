'use client'
import { ReactLenis} from 'lenis/react'

export default function Home() {
  return (
    <section className="font relative h-[100vh] sm:overflow-hidden">
      <ReactLenis root>
        <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-5'>
          <p className='font-bold text-5xl sm:text-6xl'>404</p>
          <p className='text-xl sm:text-2xl'>Not sure what you were looking for...</p>
          <a className='z-1 flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-emerald-900/60 border-solid border-emerald-900/80 hover:bg-emerald-600/80 transition-all duration-200 ease-out text-lg rounded-2xl border-2' href='/'>Go home</a>
        </div>
      </ReactLenis></section>


  );
  
}