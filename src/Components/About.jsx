import { useEffect } from "react"

export default function About(props){
    useEffect(()=>{
        document.getElementById('aboutLink').style.color = "white";

        return(()=>{
                document.getElementById('aboutLink').style.color = ""
            }
        )
    })

    const contact = {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        marginTop:"25px",
        fontWeight:"bolder"
    }
    return (
        <>
            <div className={`container text-${props.mode==='primary'?'':'white'}`}>
                <h2>About The Website</h2>
                <p className="m-3">
                    This is first ever project that I have shared on GitHub! This site helps you in utitlizing the text like capitalise or convert to lower case, etc. 
                    I made this site with help of an tutorial video on internet. :)<br/><br/>
                    The site is built with <b>Bootstrap 5</b> and <b>React Library</b>.

                </p>
                <p>
                    <h2>Features</h2>
                    <ul type='square' className="m-3">
                        <li>Conert to Upper case</li>
                        <li>Conver to Lower case</li>
                        <li>Remove extra spaces</li>
                        <li>Word Counter</li>
                        <li>Copy to Clipboard</li>
                    </ul>

                    <h5 className="text-danger text-center">Some Features doesn't work :(</h5>
                </p>

                <div style={contact}>
                        <span className="mx-1">Made with ❤ by </span>
                        <span><i className="fa-2x fa-brands fa-square-instagram m-1"></i></span>
                        <span><a href="www.instagram.com/sandip_025">/sandip_025</a></span>
                </div>
            </div>
        </>
    )
}