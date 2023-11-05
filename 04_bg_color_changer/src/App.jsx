import { useState } from "react"


function App() {
const [color, setColor] = useState("green")

  return (
    <>
    <div className="w-full h-screen " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0
      px-2> ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={ () =>setColor("red")}>
            red
          </button>
          
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={ () =>setColor("pink")}>
            pink
          </button>
          
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={ () =>setColor("purple")}>
            purple
          </button>
          
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={ () =>setColor("yellow")}>
            yellow
          </button>
          
        </div>

      </div>
    
    </div>
      
    </>
  )
}

export default App
