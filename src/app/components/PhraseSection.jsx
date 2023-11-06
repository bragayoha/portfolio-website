'use client'
import React from 'react'

const PhraseSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex items-center justify-center'>
        <p className='text-[#ADB7BE] font-semibold text-base sm:text-lg mb-6 lg:text-xl flex justify-center items-center'>
          A arte de programar consiste em organizar e dominar a complexidade.
          {' '} 
          - Edsger W. Dijkstra
        </p>
      </div>
    </div>
  )
}

export default PhraseSection