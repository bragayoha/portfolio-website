import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected 
        ? 'text-white border-green-800'
        : 'text-[#ADB7BE] border-amber-800  hover:border-green-800'
    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag