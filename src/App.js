import Header from "./components/Header"
import Items from "./components/Items"
import Item from "./components/Item"
import {useState} from 'react'

import AddItem from "./components/AddItem"

function App() {
  const [ itemList, setItemList ] = useState([])
  const [ userInput, setUserInput ] = useState('')


  const handleToggle = (id) => {
    let mapped = itemList.map(item => {
      return item.id === id ? { ...item, complete: !item.complete } : { ...item};
    });
    setItemList(mapped);
  }

  const handleDelete = id => {
    const removedArr = [...itemList].filter(item => item.id !== id);

    setItemList(removedArr);
  };

  const handleChange = (e)=>{
    setUserInput(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    addItem(userInput)
    setUserInput('')
  }

  const addItem = (userInput)=>{
    
    let copy = [...itemList]
    copy = [...copy,{
      id:itemList.length + 1,
      item:userInput.charAt(0).toUpperCase() + userInput.slice(1),
      complete:false
    }]
    
    setItemList(copy)
  }

  

  return (
    <div className="container-mx-auto flex flex-col">
      <Header/>
      <AddItem 
      handleChange={handleChange}
      handleSubmit={handleSubmit}/>
      <Items 
      itemList={itemList}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
      />
    </div>
  )
}

export default App;
