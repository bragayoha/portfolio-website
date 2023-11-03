'use client'
import React, { useState } from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

const EmailSection = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ emailSubmitted, setEmailSubmitted ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            from_name: name,
            message: message,
            email: email
        }
        
        emailjs.send('service_kori0gv', 'template_zx5az0e', data, 'BQwVERmwKlvqORjfp')
        .then((res) => {
            console.log('Success:', res.status, res.text)
            setName('')
            setEmail('')
            setMessage('')
            setEmailSubmitted(true)
        }, (err) => console.log('Error:', err))

    }

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2'>

            </div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>
                    Vamos nos conectar!
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-4-md'>
                    {' '}
                    Atualmente estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta.
                    Se você tiver alguma dúvida ou apenas quiser dizer oi, farei o possível para entrar em contato com você!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='https://www.github.com/bragayoha/'>
                        <Image src={GithubIcon} alt='Github Icon'/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/braga-yoha/'>
                        <Image src={LinkedinIcon} alt='Linkedin Icon'/>
                    </Link>
                </div>
            </div>
            <div className='z-10'>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='name' className='text-white block text-sm mb-2 font-medium'>
                            Seu nome
                        </label>
                        <input
                            name='name'
                            type='text'
                            id='name'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounder-lg block w-full p-2.5'
                            placeholder='Digite seu nome!'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>  
                    <div className='mb-6 '>
                        <label htmlFor='email' className='text-white block text-sm mb-2 font-medium'>
                            Seu e-mail
                        </label>
                        <input
                            name='email'
                            type='email'
                            id='email'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounder-lg block w-full p-2.5'
                            placeholder='email@example.com'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
                            Mensagem
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounder-lg block w-full p-2.5'
                            required
                            placeholder='. . .'  
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}  
                        />
                    </div>
                    <button 
                        type='submit'
                        className='bg-secondary-900 hover:bg-primary-950 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                    >
                        Enviar Mensagem
                    </button>
                    {
                        emailSubmitted && (
                            <p className='text-secondary-500 text-sm mt-2'>
                                E-mail enviado com sucesso!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection