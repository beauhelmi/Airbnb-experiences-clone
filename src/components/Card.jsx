import star from "../../public/images/Star 1.png"

export default function Card(props){
    return (
        <div className="card">
            <img src={props.item.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p>{props.item.text}</p>
            <p><span className="bold">From ${props.item.price}</span>/ person</p>
        </div>
    )
}