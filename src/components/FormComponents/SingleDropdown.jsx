import React, { useEffect, useState } from 'react'

const SingleDropdown = ({
    list = [],
    value,
    setValue,
    placeholder = "Enter your details",
    mandatory,
    title = "Name of field"

}) => {
    const [open, setOpen] = useState(false)
    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        console.log(value)
        if(value){
            const filtered = list.filter(item => 
                item.toLowerCase().includes(value.toLowerCase())
            )
            setFilteredList(filtered)
        }
        else{
            setFilteredList(list)
        }

    }, [value,list])


    return (
        <div className="relative flex flex-col flex-grow gap-1">
            <label className="text-base font-medium">
                {title} {mandatory && <>*</>}
            </label>
            <input
                className="border border-gray-300 focus:outline-none focus:border-2 focus:border-black font-normal text-sm px-3 py-2.5 rounded-[7px]"
                value={value}
                onFocus={() => setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 200)}
                placeholder={placeholder}
                // disabled={true}
                onChange={(e) => {
                    setValue(e.target.value)
                    setOpen(true)
                }}
            />

            {open && (
                <div className="max-h-[300px] overflow-y-auto no-scrollbar absolute w-full mt-20 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {filteredList.length === 0 ? (
                        <div className="py-2 px-4 text-center text-gray-500">
                            Nothing to display
                        </div>
                    ) : (
                        filteredList.map((listItem, index) => (
                            <div
                                key={index}
                                className="py-2 px-2 font-normal text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={(e) => {
                                    setValue(listItem)
                                }}
                                x                                >
                                {listItem}
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

export default SingleDropdown
