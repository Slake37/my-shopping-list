import{FaTrashAlt} from 'react-icons/fa'
function Item({item, handleToggle, handleDelete}) {
  const complete = 'content-mx-auto flex items-center justify-between  p-1 text-xl bg-green-400 my-2'
  const incomplete = 'content-mx-auto flex items-center justify-between  p-1 text-xl bg-slate-400 my-2'

  return (
    <div className={item.complete ? complete : incomplete}>
     <button className='font-medium cursor-pointer mx-10'
      onClick={()=>handleToggle(item.id)}>{item.item}</button><button><FaTrashAlt onClick={()=>handleDelete(item.id)} className='text-red-500 cursor-pointer mx-10'/> 
      </button>
      </div>
  )
}

export default Item