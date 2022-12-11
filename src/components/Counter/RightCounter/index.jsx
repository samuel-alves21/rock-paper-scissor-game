import { useContext } from "react"
import { Context } from "../../../contexts/ResultsContext"

export const RightCounter = () => {
  const {resultState: {win, lose, pcChoice}} = useContext(Context)

  const resultClass = win === lose ? 'draw' : win > lose ? 'losing' : 'wining'
  return (
    <div className={`div-choice ${resultClass}`}>
      <h3>Pc</h3>
      <p>{lose}</p>
      <p className="p-choice">{pcChoice.toUpperCase()}</p>
    </div>
  )
}