import bg from "../../images/hero.jpeg";
import Search from "../forms/Search";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen flex justify-center items-center"
    >
      <Search />
    </section>
  );
};

export default Hero;
