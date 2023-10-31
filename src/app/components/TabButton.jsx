import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white border-b border-green-800' : 'text-[#ADB7BE] border-b border-amber-800'
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton