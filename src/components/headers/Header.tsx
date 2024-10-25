interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <h1 className="text-center font-bold text-[#FF9F0D] text-xl lg:text-4xl py-5">
      {title}
    </h1>
  );
};

export default Header;
