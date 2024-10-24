import { Typography } from "@mui/material";

const Subscripe = () => {
  return (
    <section className="w-4/5 lg:w-[600px] flex flex-col gap-3">
      <Typography variant="h4" className="text-center text-white">Still You Need Our Support ?</Typography>
      <div className="h-14 flex rounded overflow-hidden">
        <input
          type="text"
          placeholder="Enter your email"
          className="grow h-14 bg-[#FF9F0D] outline-none border-none pl-2"
        />
        <button className="h-14 bg-white px-2 text-[#FF9F0D]">
          Subscripe Now !
        </button>
      </div>
    </section>
  );
};

export default Subscripe;
