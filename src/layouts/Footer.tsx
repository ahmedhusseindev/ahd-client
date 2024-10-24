import Image from "next/image";
import logo from "../images/logo.svg";
import {
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="text-white bg-black p-5">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col gap-3">
          <Image src={logo} alt="logo" />
          <p>Savor the artistry where every dish is a culinary masterpiece</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#FF9F0D] text-lg">Useful links</span>
          <a href="">About us</a>
          <a href="">Events</a>
          <a href="">Blogs</a>
          <a href="">FAQ</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#FF9F0D] text-lg">Main menu</span>
          <a href="">Home</a>
          <a href="">Offers</a>
          <a href="">Menus</a>
          <a href="">Reservation</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#FF9F0D] text-lg">Contcat us</span>
          <a href="">ahd@gmail.com</a>
          <a href="">+20111107285</a>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
        </div>
      </section>
      <p className="mt-5 flex justify-center items-center gap-3">
        <a href="" className="text-2xl">
          <Facebook color="warning" fontSize="large" />
        </a>
        <a href="">
          <Instagram color="warning" fontSize="large" />
        </a>
        <a href="">
          <YouTube color="warning" fontSize="large" />
        </a>
        <a href="">
          <Twitter color="warning" fontSize="large" />
        </a>
        <a href="">
          <WhatsApp color="warning" fontSize="large" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
