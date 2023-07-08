
import { Inter } from 'next/font/google'
import { BiUserPlus } from "react-icons/bi";
const inter = Inter({ subsets: ['latin'] })
import Table from '@/components/table';
import Form from '@/components/form';
import { useState } from 'react';

export default function Home() {


  const [visible, setVisible] = useState(false)

  const handler = () => {
    setVisible(!visible)
  }


  return (
   <>
   <main className='py-5'>
   <h1 className='text-3xl md:text-5xl text-center font-bold'>Employee Management</h1>

    <div className='container mx-auto flex justify-between py-5 border-b'>
      <div className='left flex gap-3'>
        <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md 
        hover:bg-indigo-900 hover:border-gray-800 hover:text-gray-200'>
          Add Employee <span className='px-1'><BiUserPlus size={23} /> </span>
        </button>
      </div>
    </div>
    
      {/* collapsable form */}
      { visible ? <Form></Form> : <></>}

    
    {/*  table*/}
    {/* mx-auto horizontally centers the content */}
    <div className='container mx-auto'>
    <Table/>
    </div>

   </main>
   </>
  )
}
