export default function HeroSection() {
  return <section id="heroSection" className="hero--section"> 
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title"> hi, I'm marcela </p>
        <h1 className="hero--section--title">
          <span className="hero--section--title--color"> Data Science </span>{" "}
          <br />
          & Design
        </h1>
        <p className="hero--section--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugit.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <button className="btn btn-primary"> contact info </button>
    </div>
    <div className="hero--section--img">
      <img src="./img/hero_img.png" alt="HeroSection" />
    </div>
  </section>
  
}