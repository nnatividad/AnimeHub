import "./Card.css";

function Card({image, title}) {
  return (
    <div className="card">
        <img src = {image} alt = {title} className = "card-image"/>
        <h2>{title}</h2>
    </div>
  )
}
export default Card;