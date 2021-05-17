// KEY 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'


const options = [
    {
        label: 'Hawaiian',
        value: 'haw'
    },
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Irish',
        value: 'ga'
    },
    {
        label: 'Icelandic',
        value: 'is'
    },
    {
        label: 'Norwegian',
        value: 'no'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];

export default function Translate() {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter text</label>
                    <input className="" value={text} onChange={(e) => setText(e.target.value)} type="text"/>
                </div>
            </div>
           
           <Dropdown 
           label="language"
            selected={language} 
            onSelectedChange={setLanguage} 
            options={options} 
           /> 
           <hr/>
           <h3 className="ui header" >Translation:</h3>
           <Convert
                text={text}
                language={language}
            />
        </div>
    )
}
