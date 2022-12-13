import { createContext, useReducer } from "react"
import { data } from './data'
import { reducer } from "./reducer"

export const Context = createContext()
export const ResultsContext = ({children}) => {

  const [resultState, dispatch] = useReducer(reducer, data)

  return (
    <Context.Provider value={{resultState, dispatch}}>
      {children}
    </Context.Provider>
  )
}
