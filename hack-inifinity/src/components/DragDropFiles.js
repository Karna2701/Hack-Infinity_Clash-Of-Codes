
import React,{useState,useEffect} from 'react'


const DragDropFiles = () => {
  const [images, setImages] = useState([]);
  console.log("ndnd");
  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return(
    <div class="grid place-items-center p-10">

      <>
        <input type="file" multiple accept="image/*" onChange={onImageChange}/>
    
      </>
    </div>
  )
}

export default DragDropFiles
