import scissorImage from "../../../img/scissor.png"

export const Scissor = ({ handleClick }) => {
  return (
    <div className="div-options" onClick={((e)=> handleClick(e))}>
      <img src={scissorImage} alt="scissor" id="scissor"/>
    </div>
  )
}