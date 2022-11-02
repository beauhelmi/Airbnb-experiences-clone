import katie from "../images/katiezaferes.png"
import star from "../images/Star 1.png"
export default function Card(){
    return (
        <div className="card">
            <img src={katie} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span>From $136</span> / person</p>
        </div>
    )
}