import logo from "../../public/images/airbnb.png"

export default function Navbar() {
    return(
        <nav>
            <img src={logo} className="logo--icon"/>
        </nav>
    )
}