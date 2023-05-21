import './style.css'

function Loader() {
    const containerStyle = {
        width:"100vw",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
    const spinnerStyle = {
        width:"100px",
        height:"100px",
        borderBottom:"2px solid black",
        borderRight:"2px solid black",
        animation:"spin .7s infinite linear",
        borderRadius:"100%"
    }

  return (
    <>
        <div style={containerStyle}>
            <div style={spinnerStyle}></div>
        </div>
    </>
  )
}

export default Loader