import { logoimg } from "../utils/utils.js";
//import { categories } from "../constants/index.js";
import { extralinks } from "../constants/index.js";
import { footerLinks } from "../constants/index.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-full  bg-white border border-[##ededed]">
      <div className="flex justify-between py-16 px-24">
        <div className="-mt-6">
          <img src={logoimg} alt="Logo" width={150} height={150} />
        </div>
        <nav className="footer-links">
          <p className="text-[17px] font-medium">Quick Links</p>
          <Link to="/" className="footer-links-a">
            Home
          </Link>
          <Link to="/products" className="footer-links-a">
            Products
          </Link>
        </nav>
        <div className="footer-links">
          <p className="text-[17px] font-medium">Extra Links</p>
          {extralinks.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="footer-links-a text-gray-700 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="footer-links">
          <p className="text-[17px] font-medium">More</p>
          {footerLinks.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="footer-links-a text-gray-700 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="footer-links">
          <p className="text-[17px] font-medium">Quick Enquiry</p>
          <form action="" className="flex flex-col space-y-2">
            <input
              type="email"
              name="email"
              id="emailid"
              placeholder="Enter your email"
              className="footer-input placeholder:text-[15px] placeholder:text-[#989B9A] placeholder:font-light focus:outline-none focus:ring-0"
            />
            <input
              type="text"
              placeholder="Your Message"
              className="footer-input pt-4 placeholder:text-[#989B9A] placeholder:text-[15px]  placeholder:font-light  pb-[168px] pl-[15px] rounded bg-stuffwhite focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="w-[152px] bg-[#7cc3fe] text-white p-2 rounded text-sm tracking-wide"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      <section className="">
        <p className="text-center text-sm text-white bg-black py-4">
          &copy; {new Date().getFullYear()} Bardan Grg. All rights reserved.
        </p>
      </section>
    </footer>
  );
};
export default Footer;
