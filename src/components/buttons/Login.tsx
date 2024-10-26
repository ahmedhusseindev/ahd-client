import Link from "next/link";

const Login = () => {
  return (
    <button className="w-28 h-12 rounded-lg text-white text-lg bg-[#FF9F0D]">
      <Link href="/platform/login">Login</Link>
    </button>
  );
};

export default Login;
