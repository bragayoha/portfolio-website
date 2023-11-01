'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: 'EM ANDAMENTO',
        description: 'Projeto em Andamento',
        image: '/images/projects/1.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'EM ANDAMENTO',
        description: 'Projeto em Andamento',
        image: '/images/projects/2.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'EM ANDAMENTO',
        description: 'Projeto em Andamento',
        image: '/images/projects/3.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 4,
        title: 'EM ANDAMENTO',
        description: 'Projeto em Andamento',
        image: '/images/projects/4.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 5,
        title: 'EM ANDAMENTO',
        description: 'Projeto em Andamento',
        image: '/images/projects/5.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 6,
        title: 'EM ANDAMENTO',
        description: 'Projeto em Andamento',
        image: '/images/projects/6.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 7,
        title: 'EM ANDAMENTO',
        description: 'Projeto em Andamento',
        image: '/images/projects/7.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState('All')

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                Meus Projetos
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name='All'
                    isSelected={tag === 'All'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name='Web'
                    isSelected={tag === 'Web'}
                />
                {/* <ProjectTag
                    onClick={handleTagChange}
                    name='Mobile'
                    isSelected={tag === 'Mobile'}
                /> */}
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => 
                    <ProjectCard 
                        key={project.id} 
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                )}
            </div>
        </>
    )
}

export default ProjectsSection