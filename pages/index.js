import React from "react";
import Socials from "../components/Socials";
import AudioPlayer from "../components/AudioPlayer";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="h-full w-full flex justify-center items-center">
        <div>
          <h3 className="text-[14px] font-black tracking-[4px] uppercase text-[#ffffffb7] transform translate-x-[60px] md:translate-x-[125px] translate-y-[50px] md:translate-y-[85px]">
            Join the
          </h3>
          <h1 className="text-[100px] md:text-[200px] text-white font-black">
            Jungle
          </h1>
          <div className="transform translate-x-[180px] md:translate-x-[360px] translate-y-[-15px] md:translate-y-[-40px]">
            <h3 className="text-[14px] font-black tracking-[4px] uppercase text-[#ffffffb7]">
              Cleanup
            </h3>
            <h3 className="text-[14px] font-black tracking-[4px] uppercase text-[#ffffffb7]">
              Movement
            </h3>
          </div>
        </div>
      </section>
      <Link href="/" className="next cursor-none">
        <div className="group flex justify-center items-end absolute left-0 right-0 bottom-8 mx-auto w-24 h-24 text-white z-20">
          <div className="absolute top-0 left-0 right-0 mx-auto w-2.5 h-2.5 rounded-full bg-white translate-y-0 scale-100 duration-300 group-hover:translate-y-[65px] group-hover:scale-0"></div>
          <div className="absolute top-4 left-0 right-0 bottom-9 mx-auto w-px bg-white scale-y-100 group-hover:scale-y-0 origin-bottom	 duration-300"></div>
          <div className="absolute left-0 right-0 bottom-0 mx-auto w-[30px] h-[30px] border-2 border-current rounded-full group-hover:scale-150 duration-300"></div>
          <div className="absolute left-0 right-0 bottom-[11px] mx-auto w-2 h-2 rounded-full bg-current opacity-0 group-hover:opacity-100 duration-300 "></div>
        </div>
      </Link>
      <AudioPlayer src="/music.mp3" />
      <Socials />
    </>
  );
};

export default Home;
