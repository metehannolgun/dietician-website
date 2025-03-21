import React from 'react';
import {FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa';
import Footer from '../Components/Footer';
import {ToastContainer, toast, Bounce} from 'react-toastify';

{/*React toastify  */}
const notify = () => toast('Mesajınız başarıyla gönderildi! Sağlıklı günler dileriz.',
  {position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
});

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 pt-35">
      {/* Form Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">İletişim</h1>
        <form className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Adınız ve Soyadınız
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Adınız ve Soyadınız"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              E-posta Adresiniz
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-posta Adresiniz"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Telefon Numaranız
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Telefon Numaranız"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Mesajınızı buraya yazın..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>
          <button
            onClick={notify}
            type="submit"
            className="w-full bg-red-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300"
          >
            Gönder
          </button>
          <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce} />
        </form>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contact;