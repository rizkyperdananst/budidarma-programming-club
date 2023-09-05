import AboutImage from "../assets/img/about.jpg";

const Services = () => {
  return (
    <div className="p-20 bg-slate-50 max-md:grid-cols-1 max-sm:grid-cols-1 max-sm:p-8" id="services">
      <h1 className="text-center text-3xl font-medium">Layanan Kami</h1>
      <div className="grid grid-cols-4 justify-center content-center gap-4 mt-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="border border-dark p-4 rounded-md hover:scale-105 transition cursor-pointer">
          <img src={AboutImage} alt="Layanan 1" />
          <h3 className="text-lg font-medium mt-3 mb-2">Web Dasar I</h3>
          <p>Kami mengajarkan pemrograman web dengan teknologi terkini.</p>
        </div>
        <div className="border border-dark p-4 rounded-md hover:scale-105 transition cursor-pointer">
          <img src={AboutImage} alt="Layanan 1" />
          <h3 className="text-lg font-medium mt-3 mb-2">Web Dasar II</h3>
          <p>Kami mengajarkan pemrograman web dengan teknologi terkini.</p>
        </div>
        <div className="border border-dark p-4 rounded-md hover:scale-105 transition cursor-pointer">
          <img src={AboutImage} alt="Layanan 1" />
          <h3 className="text-lg font-medium mt-3 mb-2">Web Lanjutan</h3>
          <p>Kami mengajarkan pemrograman web dengan teknologi terkini.</p>
        </div>
        <div className="border border-dark p-4 rounded-md hover:scale-105 transition cursor-pointer">
          <img src={AboutImage} alt="Layanan 1" />
          <h3 className="text-lg font-medium mt-3 mb-2">Aplikasi Mobile</h3>
          <p>Pelajari cara membuat aplikasi mobile yang inovatif.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
