import heroicon from "../../public/images/heroicon.png"

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroicon} className="hero--icon"/>
      <h1 className="hero--title">Online experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
