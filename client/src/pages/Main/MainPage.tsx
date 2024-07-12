import { FC, ReactNode } from "react";
import "./styles.css"



interface Props {}

export const MainPage:FC<Props> = (props) => {
    return (<>
    
    <div className="screenCard">
        <div className="wrapper">
            <div className="brand">
                <img src="logo.svg" alt="" className="logo"/>
                <h1>NeoMatic</h1>
            </div>
            <h2>
                We aren't in 1973 anymore
            </h2>


        </div>
    </div>
    <div className="content">
        <div className="cardltr">
            <div className="wrapper"><h1>What is NeoMatic?</h1>
            <p>NeoMatic is a reinvention of Talkomatic, a 1973 pioneering chat room program created by University of Illinois for PLATO computer systems that revolutionized chatting. Prepare to experience ye olden days, when the boundaries of technology and human interaction started to blur.</p></div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/PLATO-Talkomatic.png" alt="" />
        </div>
    </div>
    </>)
}