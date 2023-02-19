import Link from "next/link";
import Image from "next/image";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
          {/* IMAGE */}
      </div>

      <div className="flex items-center space-x-6">
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;
