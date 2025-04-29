import HeroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            dicta commodi facilis perferendis ab iusto aliquam reiciendis
            recusandae ducimus, blanditiis ea veritatis delectus deleniti
            laudantium illo nobis ex repellendus rationeksksk
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="woman and browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
