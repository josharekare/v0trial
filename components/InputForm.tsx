'use client'

import { useState } from 'react'

export default function InputForm() {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const storedInputs = JSON.parse(localStorage.getItem('userInputs') || '[]')
    localStorage.setItem('userInputs', JSON.stringify([...storedInputs, input]))
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="user-input" className="block text-sm font-medium text-gray-700">Enter your input</label>
        <input
          id="user-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
    </form>
  )
}

