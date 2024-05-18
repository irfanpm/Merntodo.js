import axios from 'axios'
import React from 'react'

const Register = () => {
    const handleRegister=(event)=>{
        event.preventDefault()

        const name= event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value


        axios.post('http://localhost:8080/api/register',{
            name:name,
            email:email,
            password:password
        })




    }

  return (
    <div>
     <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Register</h2>

    <form className="mx-auto max-w-lg rounded-lg border" onSubmit={handleRegister}>
      <div className="flex flex-col gap-4 p-4 md:p-8">
      <div>
          <label for="name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Name</label>
          <input name="name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
        <div>
          <label for="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
          <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        
        <div>
          <label for="c" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
          <input name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>

        <div className="relative flex items-center justify-center">
          <span className="absolute inset-x-0 h-px bg-gray-300"></span>
          <span className="relative bg-white px-4 text-sm text-gray-400">Register</span>
        </div>

       
      </div>

      <div className="flex items-center justify-center bg-gray-100 p-4">
        <p className="text-center text-sm text-gray-500">Don't have an account? <a href="#" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</a></p>
      </div>
    </form>
  </div>
</div>
      
    </div>
    </div>
  )
}

export default Register
