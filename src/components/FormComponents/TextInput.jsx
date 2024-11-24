
import React from 'react'

const TextInput = ({ 
    title = "Name of Field",
    value = "",
    setValue = () => {},
    placeholder = "Enter your details",
    disabled = false,
    mandatory = false,
  }) => {
    return (
        <div className='flex flex-col flex-grow gap-1'>
            <label className="text-base font-medium">
                {title} {mandatory && <>*</>}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="border border-gray-300 focus:outline-none focus:border-2 focus:border-black font-normal text-sm px-3 py-2.5 rounded-[7px]"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                disabled={disabled}
            />
        </div>
    )
}

export default TextInput
