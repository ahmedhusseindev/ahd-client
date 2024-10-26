import Link from "next/link";

const Signup = () => {
  return (
    <button className="w-28 h-12 rounded-lg text-white text-lg border border-[#FF9F0D]">
      <Link href="/platform/signup">Signup</Link>
    </button>
  );
};

export default Signup;
