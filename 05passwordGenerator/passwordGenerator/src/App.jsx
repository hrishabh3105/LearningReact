import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [allowNumbers, setAllowNumbers] = useState(false)
  const [allowCharacter, setAllowCharacter] = useState(false)
  const [password, setPassword] = useState('')

  const pwdRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const passwordGenerator = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (allowNumbers) str += '1234567890'
    if (allowCharacter) str += '!@#$%^&*(){}'
    let pass = ''
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)
  }, [length, allowCharacter, allowNumbers])

  useEffect(() => {
    passwordGenerator()
  }, [length, allowCharacter, allowNumbers, passwordGenerator])

  const copyToClipboard = useCallback(async () => {
    if (pwdRef.current) {
      try {
        await navigator.clipboard.writeText(password)
        setCopied(true)
        setTimeout(() => { setCopied(false) }, 2000)
      } catch (error) {
        console.log('failed to Copy', error)
      }
    }
  }, [password])

  return (
    <div className='min-h-screen bg-gray-950 flex items-center justify-center'>

      <div className='bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4'>

        {/* Title */}
        <h1 className='text-white text-2xl font-semibold text-center mb-6 tracking-wide'>
          Password Generator
        </h1>

        {/* Password Input + Copy Button */}
        <div className='flex items-center gap-2 mb-6'>
          <input
            type="text"
            value={password}
            placeholder='password'
            ref={pwdRef}
            readOnly
            className='flex-1 bg-gray-800 text-green-400 font-mono text-sm px-4 py-3 rounded-lg outline-none border border-gray-700 tracking-widest'
          />
          <button
            onClick={copyToClipboard}
            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 
              ${copied 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Slider */}
        <div className='mb-5'>
          <div className='flex justify-between text-gray-400 text-sm mb-2'>
            <span>Length</span>
            <span className='text-white font-medium'>{length}</span>
          </div>
          <input
            type="range"
            min={8}
            max={99}
            value={length}
            onChange={(e) => { setLength(Number(e.target.value)) }}
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>

        {/* Checkboxes */}
        <div className='flex gap-6'>
          <label className='flex items-center gap-2 text-gray-300 text-sm cursor-pointer select-none'>
            <input
              type="checkbox"
              checked={allowNumbers}
              onChange={() => setAllowNumbers(prev => !prev)}
              className='w-4 h-4 accent-blue-500 cursor-pointer'
            />
            Numbers
          </label>
          <label className='flex items-center gap-2 text-gray-300 text-sm cursor-pointer select-none'>
            <input
              type="checkbox"
              checked={allowCharacter}
              onChange={() => setAllowCharacter(prev => !prev)}
              className='w-4 h-4 accent-blue-500 cursor-pointer'
            />
            Characters
          </label>
        </div>

      </div>
    </div>
  )
}

export default App