"use client"

// import { languageOptions } from '@/constants/languageOptions'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import fetchLanguages from './fetchLanguages'
import { Language } from '@/app/page'
import { languageOptions } from '@/constants/languageOptions'


type LangProps = {
    onSelectedChange: (selectedOption:any) => void;
}
const LanguagesDropdown = ({onSelectedChange}:LangProps) => {
  // const [languages, setLanguages] = useState<Language[]>([]);
  // const [options, setOptions] = useState<{ value: number; label: string }[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchLanguages();
  //     setLanguages(data);
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   setOptions(languages.map(lang => ({ value: lang.id, label: lang.name })));
  // }, [languages]);
    
  return (
    <div>
        <Select 
        className='text-black'
        placeholder={"Filter By Category"}
        options={languageOptions}
        // options={languages.map(lang => ({ value: lang.id, label: lang.name }))}
        // options={options}
        defaultValue={languageOptions[0]}
        onChange={(selectedOption) => onSelectedChange(selectedOption)} />
    </div>
  )
}

export default LanguagesDropdown