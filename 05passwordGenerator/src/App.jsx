import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
    setCopied(false) // reset copied status on new password
  }, [length, number, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  // ✅ Copy handler
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => setCopied(true))
      .catch(() => alert("Copy failed"))
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-center text-black bg-amber-600'>
        <h1 className="text-white text-2xl py-4 font-bold">Password Generator</h1>

        <div className="flex items-center rounded-lg overflow-hidden mb-4 shadow-amber-900">
          <input
            type="text"C
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="bg-black text-white px-4 py-1 hover:bg-gray-700 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex items-center justify-between mb-4 text-white">
          <label>Length: {length}</label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="flex gap-4 justify-center mb-4 text-white">
          <label className="flex items-center gap-1">
            <input type="checkbox" checked={number} onChange={() => setNumberAllowed(prev => !prev)} />
            Numbers
          </label>

          <label className="flex items-center gap-1">
            <input type="checkbox" checked={charAllowed} onChange={() => setCharAllowed(prev => !prev)} />
            Special Chars
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
