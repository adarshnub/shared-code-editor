import { languageOptions } from '@/constants/languageOptions'
import React from 'react'
import Select from 'react-select'


type LangProps = {
    onSelectedChange: (selectedOption:any) => void;
}
const LanguagesDropdown = ({onSelectedChange}:LangProps) => {
  return (
    <div>
        <Select 
        placeholder={"Filter By Category"}
        options={languageOptions}
        defaultValue={languageOptions[0]}
        onChange={(selectedOption) => onSelectedChange(selectedOption)} />
    </div>
  )
}

export default LanguagesDropdown