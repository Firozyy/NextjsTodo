"use client"
import Todo from '@/components/Todo'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  // const [formData, setFormdata] = useState({
  //   title: "", discription: ""
  // });
  const [name, setName] = useState('');
  const [discription, setdiscription] = useState('');
  const [todo, setTodo] = useState([]);
  const getAlltodo = async () => {
    const response = await axios.get("http://localhost:3000/api");
    setTodo(response.data)
  };
  const deleteTodo = async (mongoId: string) => {
    const response = await axios.delete("http://localhost:3000/api", {
      params: {
        mongoId: mongoId
      }
    });


    toast.success(response.data.message);
    await getAlltodo();
  };
  const updateTodo = async (mongoId: string) => {
  
    
    const response = await axios.put("http://localhost:3000/api",{},{
      params: {
        mongoId: mongoId
      }
    });
    toast.success(response.data.message);
    await getAlltodo();
  };

  useEffect(() => {
    getAlltodo()
  }, [])


  const handlesubmit = async (e: any) => {
    e.preventDefault();  // Prevent page refresh

    try {
      const response = await axios.post("http://localhost:3000/api", { title: name, discription });


      toast.success(response.data.message);
      getAlltodo();
    } catch (error) {

    }

  }

  return (
    <div className=' h-screen '>
      <div id='form' className='p-10 mt-10 ' >
        <ToastContainer />
        <form onSubmit={handlesubmit} className='flex flex-col gap-1 '>
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value) }}

            className='rounded-md border-2 border-gray-300 '
            placeholder='Enter Title'
            name="name"
          />


          <textarea
            value={discription}
            onChange={(e) => { setdiscription(e.target.value) }}
            className='rounded-md border-2 border-orange--300'
            name="discription"
            placeholder='Discription'></textarea>
          <button
            type='submit'
            className='text-white rounded-lg bg-orange-500 border-2 border-gray-300 w-fit px-3 py-1'>Add to do</button>
        </form>


        <div className="relative overflow-x-auto mt-5 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Desc
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {todo && todo.map((item, index) => (

                <Todo data={item} index={index} deleteTodo={deleteTodo} updateTodo={updateTodo} />

              ))}




            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default page