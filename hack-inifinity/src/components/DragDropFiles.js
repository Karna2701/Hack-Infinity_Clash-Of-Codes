
import React,{useState,useEffect} from 'react'


const DragDropFiles = () => {
  const [images, setImages] = useState([]);
  console.log("ndnd");
  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return(
    <div class="grid place-items-center">

      <>
        <input type="file" multiple accept="image/*" onChange={onImageChange}/>
      </>

      <div>
          <button type="submit" class='bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 border border-cyan-700 rounded my-8 mx-4'>
            DETECT
          </button>
      </div>
    </div>
  )
}

export default DragDropFiles
