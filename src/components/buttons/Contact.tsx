import { WhatsApp } from "@mui/icons-material";
import Link from "next/link";

const Contact = () => {
  return (
    <button className="w-14 h-14 rounded-full text-white text-xl bg-green-600 fixed bottom-5 right-5">
      <Link href="/">
        <WhatsApp fontSize='large' />
      </Link>
    </button>
  );
};

export default Contact;
