import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const goBackHandler = ()=>{
        // navigate("/user")
        navigate(-1)
    }
  return (
    <div className='w-1/2 m-auto mt-10'>
        <h1 className='text-5xl mb-2 text-red-200'>User Detail</h1>
        <h1 className='text-3xl '>Hi 👋 {name}</h1>
        <button onClick={goBackHandler} className='px-3 py-1 bg-zinc-300 rounded-md text-white mt-2'>Go Back</button>
    </div>
  )
}

export default UserDetail
