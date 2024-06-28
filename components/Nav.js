import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="absolute w-[90%] flex items-center justify-between">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <ul className="uppercase flex gap-20 tracking-[5px] font-black text-[14px]">
          <Link href="/" className="view">
            <div className="group">
              <span className="bg-white w-[35px] absolute mx-auto h-[1px] transform translate-x-[-45px] translate-y-[10px] origin-right duration-300 scale-x-0 group-hover:scale-x-100"></span>
              <li>Projects</li>
            </div>
          </Link>
          <Link href="/" className="view">
            <div className="group">
              <span className="bg-white w-[35px] absolute mx-auto h-[1px] transform translate-x-[-45px] translate-y-[10px] origin-right duration-300 scale-x-0 group-hover:scale-x-100"></span>
              <li>Contact</li>
            </div>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
