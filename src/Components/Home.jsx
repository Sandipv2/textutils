import { useEffect } from "react"

export default function Home(props) {
    
    useEffect(()=>{
        document.getElementById('homeLink').style.color='white'

        return(()=>{
            document.getElementById('homeLink').style.color = ""
         }
        )
    })

    let containerStyle = {
        width:"60%"
    }
    let textareaStyle = {
        border:"1px solid grey",
        backgroundColor:`${props.mode==="dark"?"#01222A":""}`,
        color:`${props.mode==="dark"?"white":""}`
    }

    ////// Functiond //////////////
    let text = document.getElementById("txtarea")
    function copyFun(){
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied Successfully","success")
    }
    
    function uppercaseFun(){
        props.showAlert("Sorry! non functional","danger")
    }
    
    function lowercaseFun(){
        props.showAlert("Sorry! non functional","danger")
    }

    function clearFun(){
        props.showAlert("Sorry! non functional","danger")
    }
    
    function removeSpaceFun() {
        props.showAlert("Sorry! non functional","danger")
    }

    function removeSpaceFun(){
        props.showAlert("Sorry! non functional","danger")
    }

    return (
        <div className="container" style={containerStyle}>
            <form className="form">
                <textarea rows="7" className="form-control" onChange={props.textareaChange} style={textareaStyle} placeholder="Enter Text Here..."  id='txtarea'>{props.text}</textarea>
            </form>
            
            <div className="mt-2">
                <button className="btn btn-primary" onClick={copyFun}><i className="fa-solid fa-copy"></i></button>
                <button className="btn ms-1 btn-primary fw-bolder" onClick={uppercaseFun}>A</button>
                <button className="btn ms-1 btn-primary fw-bolder" onClick={lowercaseFun}>a</button>
                <button className="btn ms-1 btn-primary " onClick={clearFun}><i className="fa-solid fa-trash"></i></button>
                <button className="btn ms-1 btn-primary fw-bold" onClick={removeSpaceFun}>Remove Extra Space</button>
            </div>

            <h5 className={`text-${props.mode==="dark"?"white":""} mt-2`}>Words: {props.wordsCount}</h5>
        </div>
    )

}