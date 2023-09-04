const Contact = () => {
  return (
    <div className="p-20" id="contact">
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-sm:grid-cols-1">
        <div>
          <h2 className="text-3xl font-bold mb-3">Kontak Kami</h2>
          <p className="text-md mb-2">
            Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu
            untuk menghubungi kami.
          </p>
          <p>
            <span className="text-sm font-semibold">Alamat:</span> Jln
            Sisingamangaraja
          </p>
          <p>
            <span className="text-sm font-semibold">Email:</span>{" "}
            <a
              href="mailto:budidarmaprogrammingclub@gmail.com"
              className="hover:underline"
            >
              budidarmaprogrammingclub@gmail.com
            </a>
          </p>
          <p>
            <span className="text-sm font-semibold">Telepon:</span>{" "}
            <a href="tel:+6281262842469" className="hover:underline">
              +6281262842469
            </a>
          </p>
        </div>
        <div>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="block mb-2">
                Nama :
              </label>
              <input type="text" className="p-2 border border-slate-500 w-full rounded-md focus:outline-none focus:invalid:border-red-500 focus:valid:border-green-500" id="name" placeholder="Your Name" minLength={3} maxLength={30} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block mb-2">
                Email :
              </label>
              <input type="email" className="p-2 border border-slate-500 w-full rounded-md focus:outline-none focus:invalid:border-red-500 focus:valid:border-green-500" id="email" placeholder="Your Email" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="block mb-2">
                Pesan :
              </label>
              <textarea
                className="p-2 border border-slate-500 w-full rounded-md focus:outline-none"
                id="message"
                rows="3" placeholder="Your Message" required
              ></textarea>
            </div>
            <button type="submit" className="p-3 bg-blue-500 rounded-md text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
