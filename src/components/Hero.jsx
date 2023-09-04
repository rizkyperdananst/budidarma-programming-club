import { Fragment } from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center mt-10 "
      id="home"
    >
      <h1 className="text-5xl mt-10 text-slate-600">
        Selamat Datang di <br />
        Budidarma Programming Cub
      </h1>
      <p className="text-slate-500 mt-5 text-lg">
        Kami adalah pusat pembelajaran pemrograman terbaik untuk Anda.
      </p>
      <button className="p-3 bg-blue-500 rounded-md text-white mt-3">
        Pelajari Lebih Lanjut
      </button>
    </div>
  );
};

export default Hero;
