'use client'
import FlipCard from './comp/FlipCard'
import { ReactLenis } from 'lenis/react'
import {useState,useEffect} from 'react'

export default function Home() {
  useEffect(() => {
    const ua = window.navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (isIOS) {
      const vmatch = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
      if (vmatch) {
        const major = parseInt(vmatch[1], 10);
        const minor = parseInt(vmatch[2], 10);
        if (major < 15 || (major === 15 && minor < 4)) {
          window.location.href = "https://legacy.jessimc.dev";
        }
      }
    }
  }, []);
  const btnstyl = 'z-1 flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-emerald-900/60 border-solid border-emerald-900/80 hover:bg-emerald-600/80 transition-all duration-200 ease-out text-lg'
  return (
    <section className="relative h-[100vh] max-w-[100vw]">
      <ReactLenis root options={{ lerp: 0.05, duration: 2 }}>
        <section className='w-full h-full flex flex-col sm:flex-row sm:gap-50 justify-center items-center sm:-mt-0 -mt-10'>
          <div className='absolute sm:static sm:flex flex-col justify-center items-center sm:items-start gap-7.5 z-1 '>
            <div className='flex flex-col gap-5 justify-center items-center sm:items-start'>
              <p className='text-5xl sm:text-8xl font-bold'>JESSI</p>
              <p className='text-xl sm:text-4xl text-gray-200'>Run Minecraft servers natively on iOS.</p>
            </div>
            <div className='scale-75 sm:scale-100 mt-5 sm:mt-0 flex'>
              <a className={`border-l-2 border-t-2 border-b-2 rounded-l-2xl ${btnstyl}`} href='https://havoc.app/package/jessi' target='_blank'>Havoc</a>
              <a className={`border-2 ${btnstyl}`} href='https://github.com/Baconium/JESSI/releases/latest/download/JESSI.ipa' target='_blank'>Download</a>
              <a className={`border-r-2 border-t-2 border-b-2 rounded-r-2xl ${btnstyl}`} href='https://altdirect.app/?url=https://github.com/Baconium/JESSI/releases/download/source/source.json' target='_blank'>AltSource</a>
            </div>
            <p className='text-center mt-5 sm:mt-0 [&>a]:mx-3 text-gray-300'><a href='https://github.com/Baconium/JESSI' target='_blank'>GitHub</a> • <a href='https://discord.gg/yY3rRqmvHr' target='_blank'>Discord</a></p>
          </div>
          <FlipCard className='absolute inset-0 my-auto opacity-30 scale-80 blur-[4px] sm:blur-[0px] sm:scale-100 sm:opacity-100 sm:static w-100 h-100' front={<img src='/opengraph-image.png' className='max-w-100 rounded-[16%]'/>} back={<img src='/JESSI.png' className='w-full'/>} axis="y" glareOpacity={0} tilt={false} flipOnClick draggable={false} hoverScale={0.995} stiffness={170} damping={20} background="#00000000" shadowOpacity={0}/>
          <div className='absolute inset-x-0 mx-auto  bottom-15 w-20 h-20 flex flex-col justify-center items-center'>
            <svg className='w-7.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ffffff"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
            <p className='text-lg'>more</p>
          </div>
        </section>

        <section className='w-full h-full flex flex-col gap-50 justify-center items-center' id='about'>
          <img src='/Server_Status.png' className='rotate-35 w-[50vw] sm:w-1/5 opacity-35 blur-[1.2px] z-0 absolute'/>
          <div className='flex flex-col gap-5 justify-center items-center z-1'>
            <p className='text-5xl sm:text-6xl font-bold'>What is JESSI?</p>
            <p className='text-xl sm:text-2xl max-w-[80vw] sm:max-w-140 text-center text-gray-200'>JESSI, "Java Edition Servers Suck on iOS", is a jailed app that runs Minecraft: Java Edition servers natively on iOS, targeting iOS 14+. While JESSI can run on non-jailbroken devices, it requires JIT to be enabled in order to actually function.</p>
          </div>
        </section>

        <section className='w-full h-full flex flex-col sm:flex-row gap-50 justify-center items-center' id='playit'>
          <div className='flex flex-col gap-5 justify-center items-center z-1'>
            <p className='text-5xl sm:text-6xl font-bold'>Playit and UPnP</p>
            <p className='text-xl sm:text-2xl max-w-[80vw] sm:max-w-140 text-center text-gray-200'>You can port-forward your Minecraft server with Playit or UPnP easily.</p>
          </div>
          <img src='/Playit.png' className='sm:w-1/6 sm:static absolute w-[50vw] opacity-35 sm:opacity-100 blur-[1.2px] sm:blur-[0px] -rotate-25 sm:rotate-0'/>
        </section>

        <section className='w-full h-full flex gap-50 justify-center items-center' id='credits'>
          <div className='flex flex-col gap-10 h-full justify-center items-center z-1'>
            <p className='text-5xl sm:text-6xl font-bold'>Credits</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-1 gap-5 scale-92 sm:scale-100">
              <div className='w-48 py-6 rounded-3xl bg-emerald-900/60 flex flex-col gap-2 justify-center items-center border-emerald-900/80 border-2'>
                <img src='https://avatars.githubusercontent.com/u/226291448' className='rounded-full w-30'/>
                <p>BaconMania</p>
                <p>Lead developer</p>
                <p className='[&>a]:mx-2'><a href='https://baconium.dev' target='_blank'>Website</a> • <a href='https://github.com/Baconium' target='_blank'>GitHub</a></p>
              </div>
              <div className='w-48 py-6 rounded-3xl bg-emerald-900/60 flex flex-col gap-2 justify-center items-center border-emerald-900/80 border-2'>
                <img src='https://avatars.githubusercontent.com/u/103732419' className='rounded-full w-30'/>
                <p>Roooot</p>
                <p>Co-developer</p>
                <p className='[&>a]:mx-2'><a href='https://roooot.dev' target='_blank'>Website</a> • <a href='https://github.com/rooootdev' target='_blank'>GitHub</a></p>
              </div>
              <div className='w-48 py-6 rounded-3xl bg-emerald-900/60 flex flex-col gap-2 justify-center items-center border-emerald-900/80 border-2'>
                <img src='https://avatars.githubusercontent.com/u/151537466' className='rounded-full w-30'/>
                <p>Squair</p>
                <p>Website developer</p>
                <p className='[&>a]:mx-2'><a href='https://squair.xyz' target='_blank'>Website</a> • <a href='https://github.com/squairdev' target='_blank'>GitHub</a></p>
              </div>
              <div className='w-48 py-6 rounded-3xl bg-emerald-900/60 flex flex-col gap-2 justify-center items-center border-emerald-900/80 border-2'>
                <img src='https://avatars.githubusercontent.com/u/180266120' className='rounded-full w-30'/>
                <p>Fil</p>
                <p>Stupid idiot</p>
                <p>Fuck you fil</p>
              </div>
            </div>
          </div>
        </section>
      </ReactLenis>
    </section>
  );
}