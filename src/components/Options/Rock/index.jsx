import rockImage from "../../../img/rock.png"

export const Rock = ({ handleClick }) => {
  return (
    <div className="div-options" onClick={((e)=> handleClick(e))}>
      <img src={rockImage} alt="rock" id="rock" />
    </div>
  )
}