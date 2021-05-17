import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'
import Translate from './components/Translate'
import Header from './components/Header'
import Route from './components/Route'

const items = [
  {
    title: 'what is react?',
    content: 'React is a front end framework'
  },
  {
    title: 'why use react?',
    content: 'react is a favorite js library'
  },
  {
    title: 'how do you use react?',
    content: 'you use react by creating react components'
  }
]

const options = [
  {
    label: 'the color Red',
    value: 'red'
  },
  {
    label: 'the color Green',
    value: 'green'
  },
  {
    label: 'a shade of Blue',
    value: 'blue'
  },
  
]

export default function App() {
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Header />
     <Route path="/">
       <Accordion items={items} />
     </Route>
     <Route path="/list" >
      <Search />
     </Route>
     <Route path="/dropdown" >
       <Dropdown 
          label="color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
       />
     </Route>
     <Route path="/translate" >
       <Translate  />
     </Route>
   
    </div>
  )
}
