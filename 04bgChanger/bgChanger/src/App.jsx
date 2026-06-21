import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')
  return (
    <div className='w-full h-screen duration-200 flex flex-col items-center justify-center gap-4'
    style={{backgroundColor:color}}>

     <p className='text-2xl font-semibold uppercase tracking-widest opacity-40 text-white select-none'>
       {color}
     </p>

      <div className='flex flex-wrap justify-center gap-3 px-5 py-3 rounded-full'
         style={{background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)'}}>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-110 transition-transform'
            style={{backgroundColor: "red"}}
            onClick={() => setColor("red")}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-110 transition-transform'
            style={{backgroundColor: "Olive"}}
            onClick={() => setColor("Olive")}>Olive</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-110 transition-transform'
            style={{backgroundColor: "green"}}
            onClick={() => setColor("Green")}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-110 transition-transform'
            style={{backgroundColor: "Purple"}}
            onClick={() => setColor("Purple")}>Purple</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-110 transition-transform'
            style={{backgroundColor: "blue"}}
            onClick={() => setColor("Blue")}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-110 transition-transform'
            style={{backgroundColor: "gray"}}
            onClick={() => setColor("Gray")}>Gray</button>

      </div>
    </div>
  )
}

export default App