'use client'

import { useState, useEffect } from 'react'

export default function StoredInputs() {
  const [inputs, setInputs] = useState<string[]>([])

  useEffect(() => {
    const storedInputs = JSON.parse(localStorage.getItem('userInputs') || '[]')
    setInputs(storedInputs)
  }, [])

  const handleRefresh = () => {
    const storedInputs = JSON.parse(localStorage.getItem('userInputs') || '[]')
    setInputs(storedInputs)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-black">Stored Inputs</h2>
        <button 
          onClick={handleRefresh}
          className="px-3 py-1 bg-gray-200 text-black rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Refresh
        </button>
      </div>
      <ul className="space-y-2">
        {inputs.map((input, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded text-black">
            {input}
          </li>
        ))}
      </ul>
    </div>
  )
}

