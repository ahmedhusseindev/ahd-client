import Login from "@/components/forms/Login";
import bg from "../../../images/human.jpeg";
import { Typography } from "@mui/material";
import Subscripe from "@/components/forms/Subscripe";

const Page = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
      className="h-screen flex flex-col items-center justify-center gap-5"
    >
      <Typography variant="h4" className="italic text-white text-center">
        Create your own website
      </Typography>
      <Login />
      <Subscripe />
    </section>
  );
};

export default Page;
