import {useState} from 'react'
import Item from './Item'

function Items({itemList,handleToggle,handleDelete}) {

  return (
    <div className='container-mx-auto flex flex-col mx-5'>
      {itemList.map((item ,id)=>{
        return<Item key={id} item={item} handleToggle={handleToggle} handleDelete={handleDelete}/>
      })}
    </div>
  )
}

export default Items