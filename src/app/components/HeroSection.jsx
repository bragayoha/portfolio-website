'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-8 place-self-center text-center sm:text-left lg:justify-self-start sm:justify-center'
                >
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-950'>
                            Olá, eu sou o {''} 
                        </span>
                        <br></br>
                        <TypeAnimation
                        sequence={[
                            'Yoha',
                            1000,
                            'Dev Backend',
                            1000,
                            'Dev Web',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Desenvolvendo soluções desde 2014.
                    </p>
                    <div>
                        <Link href='#contact'>
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-950 hover:bg-slate-200 text-white'>
                                Me Contrate
                            </button>
                        </Link>
                        <a href='https://drive.google.com/uc?export=download&id=1Wsu6pJ2W7Y0mM5nS4cdv2u7gf-dJ29Kg' download>
                            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-b from-secondary-800 via-primary-500 to-secondary-950 hover:bg-slate-800 text-white mt-3'>
                                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                    Baixar CV
                                </span>
                            </button>
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-4 place-self-center mt-4 lg:mt-0'
                >
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src='/images/hero-img.png'
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection