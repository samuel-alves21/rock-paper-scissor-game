import { useContext } from "react"
import { Context } from "../../../contexts/ResultsContext"

export const LeftCounter = () => {
  const {resultState: {win, lose, myChoice}} = useContext(Context)
  const resultClass = win === lose ? 'draw' : win > lose ? 'wining' : 'losing'

  return (
    <div className={`div-choice ${resultClass}`}>
      <h3>Você</h3>
      <p>{win}</p>
      <p className="p-choice">{myChoice.toUpperCase()}</p>
    </div>
  )
}