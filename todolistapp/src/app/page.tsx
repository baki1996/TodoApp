import React from 'react'
import TodoList from './components/TodoList'

const Home = () => {
  return (
    <div className="bg-[#D0E8C5] h-screen w-full flex justify-center items-center flex-col">
      <h1 className="font-bold text-5xl text-green-700 mb-7">ToDo App By Bakhtawar</h1>
      <TodoList />
    </div>
  )
}

export default Home