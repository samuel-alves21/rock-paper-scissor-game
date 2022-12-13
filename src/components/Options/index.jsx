import { useContext } from "react"
import { Context } from "../../contexts/ResultsContext/"
import { setResults } from "../../contexts/ResultsContext/actions"

import { Paper } from "./Paper"
import { Rock } from "./Rock"
import { Scissor } from "./Scissor"

import './styles.css'

export const Options = () => {
  const resultsContext = useContext(Context)

  const handleClick = (e) => {
    setResults(resultsContext.dispatch, e.target.id)
  }
  return (
    <section className="section-options">
      <Rock handleClick={handleClick} />
      <Paper handleClick={handleClick} />
      <Scissor handleClick={handleClick} />
    </section>
  )
}