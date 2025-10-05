import React,{useId} from 'react'

function Select({
    label,
    options,
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label
                className=''
                htmlFor={id}
            >
            </label>}
            <select
             ref={ref}
             id={id}
             {...props}
             className={`${className} w-full px-3 py-2 border duration-200 border-gray-300 rounded-lg focus:bg-gray-50`}
             >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            
        </div>
    )
}

export default React.forwardRef(Select);
