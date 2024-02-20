import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AiFillVideoCamera } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {

  const navigate=useNavigate();

  const handleSubmit =(e)=>{ 
    e.preventDefault();
    const text =e.target[0].value;
    navigate(`/results?search_query=${text}`)
  }

  return (
   <header className='flex justify-between items-center p-4'>

<Link  
to={"/"}
className='flex items-center gap-[10px]'
>

<img  className='w-[50px]' src="/yt.png" alt="" />

<h1 className='text-2xl hidden md:block'>Youtube</h1>
</Link>

<form
onSubmit={handleSubmit}
className='flex items-center border border-gray-400 rounded-[20px]'
>


<input
className='bg-black outline-none rounded-[20px] px-3 py-1'
 type="text" />
<button className='grid place-items-center border-l px-2 h-full text-xl'> 

<CiSearch/>

</button>
</form>

<div className='flex gap-3 text-xl cursor-pointer'>

<FaBell />
<AiFillVideoCamera />


</div>










   </header>






  )
}

export default Header