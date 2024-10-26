import Image from "next/image";
import Login from "../buttons/Login";
import Signup from "../buttons/Signup";
import logo from "../../images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Search = () => {
  return (
    <form className="w-4/5 lg:w-[650px] px-5 py-8 rounded-lg bg-black bg-opacity-60 flex flex-col items-center gap-8">
      <Image src={logo} alt="logo" priority />
      <p className="italic text-white text-center font-bold text-xl">
        Find the best restaurant ,Cafes for you
      </p>
      <div className="w-full lg:w-4/5 px-5 bg-white rounded-full flex items-center overflow-hidden">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for restaurant"
          className="h-12 grow outline-none border-none pl-2"
        />
      </div>
      <p className="flex items-center justify-center gap-1 md:text-lg text-[#ed6c02] italic">
        <a href="">one step to create your own restaurant</a>
        <ArrowForwardIcon color="warning" />
      </p>
      <div className="flex justify-center gap-3">
        <Login />
        <Signup />
      </div>
    </form>
  );
};

export default Search;
