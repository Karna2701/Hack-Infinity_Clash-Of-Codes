import { useState } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"



const Register = (props) => {
    const boxStyle = {
      color : "white",
      fontSize : "40px",
    }

    const [details, setDetails] = useState({name : "", email : "", password : "", retypedpassword : ""})

    const handleChange = (e) =>[
      setDetails({...details, [e.target.name] : e.target.value})
    ]
    
      return (
        <div className='flex absolute left-[580px] top-32 flex-col items-center bg-our-black w-1/4 h-4/5 rounded-3xl'>
        
          <div className="absolute right-2 top-2">
            <button style={boxStyle} onClick={props.close}><IoIosCloseCircleOutline /></button>
          </div>      
          <p className='text-center text-our-white px-6 pb-8 pt-12 basis-24 text-3xl font-ourfont font-semibold h-max'>Register</p>
          <form className='flex flex-col items-center align-middle w-full'>
            <input className='border-2 bg-our-black text-our-white py-2 h-max px-8 m-2 w-10/12 rounded-xl font-bold text-left hover:text-our-black hover:bg-our-white hover:border-slate-600' type="text" value={details.name} name="name" onChange={handleChange} placeholder='Full Name'/>
            <input className='border-2 bg-our-black text-our-white py-2 h-max px-8 m-2 w-10/12 rounded-xl font-bold text-left hover:text-our-black hover:bg-our-white hover:border-slate-600' type="email" value={details.email} name="email" onChange={handleChange} placeholder='E-mail'/>
            <input className='border-2 bg-our-black text-our-white py-2 h-max px-8 m-2 w-10/12 rounded-xl font-bold text-left hover:text-our-black hover:bg-our-white hover:border-slate-600' type="password" value={details.password} name="password" onChange={handleChange} placeholder='Password'/>
            <input className='border-2 bg-our-black text-our-white py-2 h-max px-8 m-2 w-10/12 rounded-xl font-bold text-left hover:text-our-black hover:bg-our-white hover:border-slate-600' type="password" value={details.retypedpassword} name="retypedpassword" onChange={handleChange} placeholder='Re-Enter Password'/>
            <button className='border-2 text-our-white py-2 h-max px-8 rounded-xl m-3 font-semibold text-center hover:text-our-black hover:bg-our-purple hover:cursor-pointer'>Register</button>
          </form>
          <div className='flex w-max my-4'>
            <p className='text-center text-our-white text-base font-ourfont h-max'>Have an Account?</p>
            <button className='text-our-white text-center text-base font-ourfont hover:cursor-pointer hover:underline h-max px-2'>Sign In</button>
          </div>
            <p className='text-our-white text-center text-base font-ourfont hover:cursor-pointer hover:underline h-max px-2'>Forgot Password?</p>
            <div className="flex max-w-fit mt-4">
                <button className='border-2 m-2 text-our-white w-1/2 py-2 my-2 h-max px-8 rounded-xl font-semibold text-center hover:text-our-black hover:bg-our-white hover:cursor-pointer hover:border-slate-600'>Google</button>
                <button className='border-2 m-2 text-our-white py-2 my-2 h-max px-8 rounded-xl font-semibold text-center hover:text-our-black hover:bg-our-white hover:cursor-pointer hover:border-slate-600'>Facebook</button>
            </div>
        </div>
      )
}

export default Register