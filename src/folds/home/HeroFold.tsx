import React from 'react'

type Props = {}

const HeroFold = (props: Props) => {
  return (
    <div 
        className='h-screen w-screen relative'
        style={{
            backgroundImage: `url('/assets/images/pexels-valdemaras-d-1670845.jpg')`,
            backgroundSize: 'cover',
        }}
    >
        <div 
            className='flex-center flex-col gap-4 w-full h-full   text-white absolute'
            style={{
                backgroundColor: 'rgba(0,0,0,0.3)'
            }}
        >
            <div className=''>

            
                
                {/* <div className='flex-center gap-5 text-6xl'>
                    <div>creative</div>
                    <div className='mt-3 text-4xl'>•</div>
                    <div>reset</div>
                    <div className='mt-3 text-4xl'>•</div>
                    <div>society</div>
                </div> */}
                
                <div className='w-full flex-center gap-y-10 flex-col text-center '>
                    <h2 className="hero glitch layers text-dm-serif" data-text="creative reset society">
                        <span>creative reset society</span>
                    </h2>
                    <div className='w-[50%] text-xl'>
                        Our planet is in grave danger.
                        We believe that by fostering creativity, empathy, and collaboration, we can bring about meaningful change 
                        that benefits both humanity and the planet. Our goal is to provide a space where individuals from diverse backgrounds 
                        can come together to share ideas, collaborate on innovative solutions, and create a more sustainable and equitable world.
                        Launching soon.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroFold