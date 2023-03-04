import { useState } from "react"
import {IoIosCloseCircleOutline} from "react-icons/io"

const Login = (props) => {

  const boxStyle = {
    color : "white",
    fontSize : "40px",
  }

  const [details, setDetails] = useState({email : "", password : ""})

  const handleChange = (e) =>[
    setDetails({...details, [e.target.name] : e.target.value})
  ]

  return (
    <div className='flex absolute left-[580px] top-32 flex-col items-center bg-our-black w-1/4 h-4/5 rounded-3xl bg-black'>
      <div className="absolute right-2 top-2">
        <button style={boxStyle} onClick={props.close}><IoIosCloseCircleOutline /></button>
      </div>      
      <p className='text-center text-white px-6 pb-8 pt-12 basis-24 text-3xl font-ourfont font-semibold h-max'>Sign In.</p>
      <button className='border-2 text-white w-10/12 py-2 my-2 h-max px-8 rounded-xl font-semibold text-center hover:text-our-black hover:bg-white hover:cursor-pointer hover:border-slate-600'>Continue with Google</button>
      <button className='border-2 text-white w-10/12 py-2 my-2 h-max px-8 rounded-xl font-semibold text-center hover:text-our-black hover:bg-white hover:cursor-pointer hover:border-slate-600'>Continue with Facebook</button>
      <p className='text-center text-white my-2 text-xl font-ourfont font-light h-max w-10/12'>or</p>
      <form className='flex flex-col items-center align-middle w-full'>
        <input className='border-2 bg-our-black text-white py-2 h-max px-8 m-2 w-10/12 rounded-xl font-bold text-left hover:text-our-black hover:bg-white hover:border-slate-600' type="email" value = {details.email} name="email" placeholder='E-mail' onChange={handleChange}/>
        <input className='border-2 bg-our-black text-white py-2 h-max px-8 m-2 w-10/12 rounded-xl font-bold text-left hover:text-our-black hover:bg-white hover:border-slate-600' type="password" value = {details.password} name="password" placeholder='Password' onChange={handleChange}/>
        <button className='border-2 text-white py-2 h-max px-8 rounded-xl m-3 font-semibold text-center hover:text-our-black hover:bg-our-purple hover:cursor-pointer'>Sign In</button>
      </form>
      <div className='flex w-max my-4'>
        <p className='text-center text-white text-base font-ourfont h-max'>Don't have an Account?</p>
        <button className='text-white text-center text-base font-ourfont hover:cursor-pointer hover:underline h-max px-2'>Register</button>
      </div>
        <p className='text-white text-center text-base font-ourfont hover:cursor-pointer hover:underline h-max px-2'>Forgot Password?</p>
    </div>
  )
}

export default Login
