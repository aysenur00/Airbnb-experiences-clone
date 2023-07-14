import React from "react"
import star from "../images/star2.png"
import card_photo from "../images/katie-zaferes.png"

export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} className="card--photo"></img>
            <div className="card--stats">
                <img src={star} className="star"></img>
                <span>{props.item.stats.rating}</span>
                <span>({props.item.stats.reviewCount})</span>
                <span>{props.item.location}</span>

            </div>
            <p>{props.item.title}</p>
            <p>From {props.item.price} $/person</p>
        </div>
    )
}