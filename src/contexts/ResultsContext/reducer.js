import { getResults } from "../../functions/getResult"
import{ getPcChoice } from "../../functions/getPcChoice"

export const reducer = (state, action) => {
  let { win, lose, result, myChoice, pcChoice } = state
  const { type, payload } = action
  
  if (type === 'SET_RESULTS') {
    
    pcChoice = getPcChoice()
    const gameResult = getResults(payload, pcChoice)
  
    if (gameResult === 'Venceu!') {
      win++
      result = 'Venceu'
    }
    if (gameResult === 'Perdeu!') {
      lose++
      result = 'Perdeu!'
    }
    if (gameResult === 'Empate!') result = 'Empate!'
  }

  return {...state, win, lose, result, myChoice, pcChoice}
}