'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Express</li>
                <li>Nest.js</li>
                <li>Adonis.js</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
                <li>Apache Kafka</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: 'Formações',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>IFMS - Ensino Médio Integrado com Técnico em Informática</li>
                <li>UTFPR - Engenharia Eletrônica (em andamento)</li>
            </ul>
        )
    },
    {
        title: 'Certificações',
        id: 'certification',
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS Cloud Practitioner</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/about-img.png' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>
                    <p className='text-base lg:text-lg'>
                        Sou um desenvolvedor web que gosta de criar aplicações interativas e responsivas.
                        Tenho experiência com JavaScript, TypeScript, React, Node.js, Express, Nest.js, Adonis.js, MySQL, PostgreSQL, Docker, Apache Kafka e Git. 
                        Aprendo rápido e estou sempre em busca de expandir meus conhecimentos e habilidades. 
                        Trabalho bem em equipe, e estou animado para trabalhar com outras pessoas para criar aplicações incríveis.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab==='skills'} > 
                            {' '}Skills{' '} 
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab==='education'} > 
                            {' '}Formações{' '} 
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('certification')} active={tab==='certification'} > 
                            {' '}Certificações{' '} 
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection