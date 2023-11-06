import React from 'react'
import { Pixelify_Sans } from 'next/font/google'

const logoFontFamily = Pixelify_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin']
})

const Footer = () => {
  return (
    <footer className='footer border-t z-10 border-[#33353F] text-[#D4C1A9]'>
        <div className='container p-10 flex justify-between'>
            <span className={logoFontFamily.className}>
              YOHA
            </span>
            <p className='text-slate-800'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer