import React from 'react'

const Hero = ({heroRefs}) => {
  return (
    <section 
      ref={heroRefs}
      className='hero
        relative bg-no-repeat bg-cover bg-center bg-fixed 
        h-screen flex items-center
        sm:px-[40px]
        md:px-20
        xl:px-[10%]' 
        style={{backgroundImage: `url(/img/hero-blank.jpg)`}}
    >
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white w-full text-black text-center'>
        <h1 className='text-4xl font-bold italic'>Collaborative Growth Through Impactful Digital Strategies</h1>
        <div className='mt-4 text-lg'>Let's Discuss</div>
      </div>
    </section>
  )
}

export default Hero