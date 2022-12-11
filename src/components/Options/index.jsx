import { useContext } from "react"
import { Context } from "../../contexts/ResultsContext/"

import { Paper } from "./Paper"
import { Rock } from "./Rock"
import { Scissor } from "./Scissor"

import './styles.css'

export const Options = () => {
  const resultsContext = useContext(Context)

  const handleClick = (e) => {
    resultsContext.dispatch({type: 'set results', payload: e.target.id})
  }
  return (
    <section className="section-options">
      <Rock handleClick={handleClick} />
      <Paper handleClick={handleClick} />
      <Scissor handleClick={handleClick} />
    </section>
  )
}