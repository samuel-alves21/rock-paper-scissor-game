import { createContext, useReducer } from "react"
import { getResults } from "../../functions/getResult"
import{ getPcChoice } from "../../functions/getPcChoice"

export const Context = createContext()

export const ResultsContext = ({children}) => {
  const reducer = (state, action) => {
    let { win, lose, result, myChoice, pcChoice } = state
    pcChoice = getPcChoice()
    myChoice = action.payload
    const gameResult = getResults(myChoice, pcChoice)

    if (gameResult === 'Venceu!') {
      win++
      result = 'Venceu'
    }
    if (gameResult === 'Perdeu!') {
      lose++
      result = 'Perdeu!'
    }
    if (gameResult === 'Empate!') result = 'Empate!'

    return {...state, win, lose, result, myChoice, pcChoice}
  }

  const [resultState, dispatch] = useReducer(reducer, { 
    win: 0, 
    lose: 0, 
    result: '' ,
    myChoice: '',
    pcChoice: ''
  })

  return (
    <Context.Provider value={{resultState, dispatch, reducer}}>
      {children}
    </Context.Provider>
  )
}
