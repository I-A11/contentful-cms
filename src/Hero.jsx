import HeroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Specialising in front-end development, adept at creating responsive
            web applications. Proficient in modern frameworks and technologies
            to deliver seamless user experiences. Demonstrated ability in
            translating designs into pixel-perfect interfaces with a keen eye
            for detail.
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
