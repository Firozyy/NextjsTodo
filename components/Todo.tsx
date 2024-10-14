
import React from 'react'
interface TodoItem {
  _id: string;
  title: string;
  discription: string;
  isComplted: boolean;
}

// Define the props for the Todo component
interface TodoProps {
  data: TodoItem;
  index: number;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string) => void;
}
const Todo: React.FC<TodoProps> = ({ data, index, deleteTodo,updateTodo }) => {




  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {index + 1}
      </th>
      <td className={`px-6 py-4 ${data.isComplted ?"line-through":""}`}>
        {data.title}
      </td>
      <td className={`px-6 py-4 ${data.isComplted ?"line-through":""}`}>
        {data.discription}
      </td>
      <td className="px-6 py-4">
        {!data.isComplted ? "pending" : "complted"}
      </td>
      <td className="px-6 py-4 flex gap-1">

        <button onClick={e => deleteTodo(data._id) } className='p-2 px-4 bg-red-500 text-white'>Delete</button>
        <button onClick={e => updateTodo(data._id)} className='p-2 px-4 bg-green-500 text-white'>Done</button>
      </td>
    </tr>
  )
}

export default Todo