import React from 'react'

function Container({children, className = 'max-w-xl'}) {
    return <div className={`w-full ${className} mx-auto px-4`}>{children}</div>
        
    
}

export default Container
