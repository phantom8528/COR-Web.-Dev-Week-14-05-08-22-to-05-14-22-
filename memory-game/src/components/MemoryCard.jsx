import React from "react";
import './MemoryCard.css'
class MemoryCard extends React.Component{
    render(){
        return(
            // <h1>CARD</h1>
            <div className="MemoryCard">


                <div className="MemoryCardInner flipped">
                    <div className="MemoryCardBack">
                        <img className="MemoryCardImage" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"></img>
                    </div>
                </div>

                <div className="MemoryCardInner">
                    <div className="MemoryCardFront">
                            ∆
                        </div>
                </div>
            </div>


        )
    }
}

export default MemoryCard;