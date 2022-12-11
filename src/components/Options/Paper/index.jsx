import paperImage from "../../../img/paper.png"

export const Paper = ({ handleClick }) => {
  return (
    <div className="div-options" onClick={((e)=> handleClick(e))}>
      <img src={paperImage} alt="paper" id="paper" />
    </div>
  )
}