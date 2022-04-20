import {FaPlusCircle} from 'react-icons/fa'

function AddItem({userInput, handleChange,handleSubmit}) {
  return (
      <div className='flex items-center justify-center '>
           <form className='container-mx-auto flex flex-col  items-center justify-center m-5 md:w-6/12 md:flex-row w-full '
                  onSubmit={handleSubmit}>
          <input className='bg-gray-200 width-auto py-1 px-3 md:w-2/3 w-full my-2 focus:outline-none' 
                 type="text" 
                 name="" 
                 id="" 
                 value={userInput}
                 onChange={handleChange} />
          <button className=' bg-green-700 py-2 px-5 text-white mx-3 md:w-1/3 flex items-center justify-center w-full'
                  onClick={handleSubmit}  ><FaPlusCircle/></button>
      </form>
      </div>
     
  )
}

export default AddItem