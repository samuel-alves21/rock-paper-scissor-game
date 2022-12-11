import { LeftCounter } from "./LeftCounter"
import { RightCounter } from "./RightCounter"

import './style.css'

export const Counter = () => {
  return (
    <section className="counter-container">
      <LeftCounter />
      <RightCounter />
    </section>
  )
}