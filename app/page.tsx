'use client'
import GradualBlur from './comp/GradualBlur';
import BlurText from "./comp/BlurText";
import FadeContent from "./comp/FadeContent";
import AnimatedContent from "./comp/AnimatedContent";
import Particles from './comp/Particles';
import { ReactLenis } from 'lenis/react'
import {useState} from 'react'

export default function Home() {
  const [e, ee] = useState(false);
  return (
    <section className="relative h-[100vh]"><ReactLenis root options={{ lerp: 0.05, duration: 2 }}>
      <div style={{ width: '100%', height: '100%', position: 'fixed', overflow: 'auto', zIndex: '-1'}}>
        <Particles
          particleColors={["#26a269"]}
          particleCount={1000}
          particleSpread={30}
          speed={0.05}
          particleBaseSize={200}
          alphaParticles
          pixelRatio={1}
      />
      </div>
      <section className='-z-1 h-[100%] max-[960px]:h-[100%] flex gap-50 items-center justify-center'>
        <FadeContent blur delay={0} duration={0.76} className='py-10 px-15 max-[960px]:flex-col max-[960px]:gap-0 flex gap-50 self-center items-center justify-center rounded-[60px]'>
          <div className='max-w-2xl'>
            <div className='text-7xl font-bold mb-4 leading-20 mx-auto'>
              <BlurText text="JESSI" direction="bottom" delay={100} className="" />
            </div>
            <div className='mx-auto pt-7 text-[1.3rem] sm:text-[1.5rem] max-w-[80vw] lg:max-w-[20vw] text-[#ababab] pb-10'>
            <AnimatedContent direction="horizontal" distance={50} delay={0.8} scale={0.7}>
              <svg className='absolute' style={{transform: "translate(-100%, -100%)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
            </AnimatedContent>
            <FadeContent blur delay={1} duration={0.76}>{"Your favourite Minecraft server, now made for iOS."}</FadeContent>
            <div style={{flexGrow:"1"}}/>
            <AnimatedContent reverse direction="horizontal" distance={50} delay={0.8} scale={0.7}>
              <svg style={{transform: "translate(50%, -0%)", marginLeft: 'auto'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M460-160v-300H160v-40h300v-300h40v300h300v40H500v300h-40Z"/></svg>
            </AnimatedContent>
            <div className='flex pt-5'>
              <FadeContent blur delay={0.5} duration={0.7} className='z-1 flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-emerald-900/20 border-solid border-4 border-emerald-900/50 rounded-l-2xl hover:border-emerald-700/25 hover:bg-emerald-600/15 transition-all duration-300 ease-in-out text-lg cursor-pointer'>
              GitHub<a href='https://github.com/Baconium/JESSI' target='_blank' className='absolute w-[10rem] h-[3.5rem]'></a>
            </FadeContent> 
            <FadeContent blur delay={0.5} duration={0.9} className='flex items-center justify-center mx-auto w-[10rem] h-[3.5rem] bg-emerald-900/20 border-solid border-4 border-emerald-900/50 rounded-r-2xl hover:border-emerald-700/25 hover:bg-emerald-600/15 transition-all duration-300 ease-in-out text-lg cursor-pointer'>
              Discord<a href='https://discord.gg/yY3rRqmvHr' target='_blank' className='absolute w-[10rem] h-[3.5rem]'></a>
            </FadeContent>
            </div>
            </div>
          </div>
          <div>
            <FadeContent blur delay={0.4} duration={0.7}><img src={'Server_Status.png'} className='mx-auto w-[20rem] rounded-[16%] rotate-20 transition-all duration-300 ease-in-out max-[960px]:w-[13rem]'/></FadeContent>
          </div>
        </FadeContent>
      </section>

      <section className='z-0 w-[100vw] h-[60%] flex items-center justify-center max-[1400px]:pt-100 max-[1400px]:pb-150 pb-50 gap-15 text-[#ababab]'>
        <FadeContent blur delay={0} duration={0.5} className='flex gap-20 items-center justify-center max-[1400px]:flex-col'>
          <FadeContent blur delay={0} duration={0.6}>
          <img src={'opengraph-image.png'} className='w-[20rem] rounded-[16%] max-[1400px]:w-[10rem]'/>
          </FadeContent>
          <div className='flex flex-col gap-10 w-[20%] max-[1400px]:w-[60%]'>
            <FadeContent blur delay={0} duration={0.7} className='text-center text-3xl font-bold'>What is JESSI?</FadeContent>
            <FadeContent blur delay={0} duration={0.9} className='text-lg text-left max-[1400px]:text-center'>JESSI is a jailed app that runs Minecraft: Java Edition servers natively on iOS, targeting iOS 14+. While JESSI can run on non jailbroken devices, it requires JIT to be enabled in order to actually function.</FadeContent>
            <FadeContent blur delay={0} duration={0.9} className='flex items-center justify-center mx-auto px-3 h-[3.5rem] bg-emerald-900/20 border-solid border-4 border-emerald-900/50 rounded-2xl hover:border-emerald-700/25 hover:bg-emerald-600/15 transition-all duration-300 ease-in-out text-lg cursor-pointer'>
              Download latest version<a href='https://github.com/Baconium/JESSI/releases/latest/download/JESSI.ipa' className='absolute w-[10rem] h-[3.5rem]'></a>
            </FadeContent>
          </div>
        </FadeContent>
      </section>

      <section className='z-0 w-[100vw] h-[60%] flex items-center justify-center max-[1400px]:pt-100 max-[1400px]:pb-150 pb-50 gap-10 text-[#ababab]'>
        <FadeContent blur delay={0} duration={0.5} className='flex gap-50 max-[1400px]:gap-20 items-center justify-center max-[1400px]:flex-col'>
          <div className='flex flex-col gap-10 w-[20%] max-[1400px]:w-[60%]'>
            <FadeContent blur delay={0} duration={0.7} className='text-center text-3xl font-bold'>Playit and UPnP integration</FadeContent>
            <FadeContent blur delay={0} duration={0.9} className='text-lg text-left max-[1400px]:text-center'>You can port forward your Minecraft server using Playit.gg or UPnP.</FadeContent>
          </div>
          <FadeContent blur delay={0} duration={0.6}>
          <img src={'Playit.png'} className='w-[17rem] max-[1400px]:w-[10rem]'/>
          </FadeContent>
        </FadeContent>
      </section>

      <p className='text-center text-3xl pb-5 pt-30'>Credits</p>
      <section className='w-[100vw] flex items-center justify-center gap-10 max-[1100px]:flex-wrap pb-30'>
        <FadeContent blur delay={0} duration={0.7} className='bg-emerald-900/20 border-solid border-4 border-emerald-900/50 rounded-2xl flex flex-col items-center justify-center py-3 px-10'>
          <img onClick={() => ee(prev => !prev)} src={'JESSI.png'} className='cursor-pointer absolute right-55 max-[1400px]:right-25 bottom-0 max-[1400px]:bottom-58 max-[1400px]:w-[6rem] z-[2000] opacity-25 hover:opacity-75 transition-all duration-300 ease-in-out' alt='JESSI Mascot'/>
          <p className={`${e?'visible':'invisible'} absolute right-56 max-[1400px]:right-10 top-56 max-[1400px]:-top-6 text-center w-full`}>Jadix's Girlfriend</p>
          <img src={'https://github.com/Baconium.png'} className='w-[8rem] rounded-full p-3'/>
          <p className='text-lg'>BaconMania</p>
          <p>Lead Developer</p>
          <div className='flex gap-5 z-[100]'>
          <a className='text-sky-300' href='https://github.com/Baconium' target='_blank'>GitHub</a>
          </div>
        </FadeContent>
        <FadeContent blur delay={0} duration={0.9} className='bg-emerald-900/20 border-solid border-4 border-emerald-900/50 rounded-2xl flex flex-col items-center justify-center py-3 px-10'>
          <img src={'https://github.com/rooootdev.png'} className='w-[8rem] rounded-full p-3'/>
          <p className='text-lg'>roooot</p>
          <p>Co-Developer</p>
          <div className='flex gap-5 z-[100]'>
          <a className='text-sky-300' href='https://roooot.dev' target='_blank'>Website</a><a className='text-sky-300' href='https://github.com/rooootdev' target='_blank'>GitHub</a>
          </div>
        </FadeContent>
        <FadeContent blur delay={0} duration={1.1} className='bg-emerald-900/20 border-solid border-4 border-emerald-900/50 rounded-2xl flex flex-col items-center justify-center py-3 px-10'>
          <img src={'https://github.com/squairdev.png'} className='w-[8rem] rounded-full p-3'/>
          <p className='text-lg'>Squair</p>
          <p>Website Developer</p>
          <div className='flex gap-5 z-[100]'>
          <a className='text-sky-300' href='https://squair.xyz' target='_blank'>Website</a><a className='text-sky-300' href='https://github.com/squairdev' target='_blank'>GitHub</a>
          </div>
        </FadeContent>
        <FadeContent blur delay={0} duration={1.1} className='bg-emerald-900/20 border-solid border-4 border-emerald-900/50 rounded-2xl flex flex-col items-center justify-center py-3 px-10'>
          <img src={'https://github.com/peroka-net.png'} className='w-[8rem] rounded-full p-3'/>
          <p className='text-lg'>procurs.us</p>
          <p>JESSI Mascot</p>
          <div className='flex gap-5 z-[100]'>
          <a className='text-sky-300' href='https://github.com/peroka-net' target='_blank'>GitHub</a>
          </div>
        </FadeContent>
      </section>
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={0.7}
      />
      <GradualBlur
        target="page"
        position="top"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={0.7}
      />
    </ReactLenis></section>
  );
}