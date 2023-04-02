import React, { createContext, useContext } from 'react'

let msg = "Hi from data store!"

const FitnessContext = createContext(msg)

export function FitnessProvider({children}) {
  const [message, setMessage] = useState(msg)

  return (
   <FitnessContext.Provider value={{message}} >
    {children}
   </FitnessContext.Provider>
  )
}

export function useFitness(){
    return useContext(FitnessContext)
}