
import React,{useState,useEffect} from 'react'


const DragDropFiles = () => {
  const [images, setImages] = useState([]);
  console.log("ndnd");
  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return(
  <>
    <input type="file" multiple accept="image/*" onChange={onImageChange}/>
 
    </>
  )
}

export default DragDropFiles
