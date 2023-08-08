"use client"
import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'

import { models } from '@/constants'
import { SearchModelProps } from '@/types'

const SearchModel = ({model, setModel} : SearchModelProps) => {
    const [query, setQuery] = useState('')

    const filteredModels = 
    query === "" 
    ? models 
    : models.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className="relative w-full">
                <Combobox.Button className='absolute top-[14px]'>
                    <Image 
                        src='/tesla-logo.png'
                        alt='Car logo'
                        width={20}
                        height={20}
                        className='ml-4'
                    />
                </Combobox.Button>
                <Combobox.Input className='search-manufacturer__input'
                    placeholder='Model 3'
                    displayValue={(model: string) => model}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </Combobox>
        <Transition 
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
        >
            <Combobox.Options>
                
            </Combobox.Options>
        </Transition>
    </div>
  )
}

export default SearchModel