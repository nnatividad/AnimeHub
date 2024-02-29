import "./Grid.css";

function Grid ({children}) {
  
    return (
    <div className = "background">
      <div className="container">
        {children}
      </div>
    </div>
    )
  }

  export default Grid;