import Facebook from "../../assets/banner-books/facebook.png";
import Git from "../../assets/banner-books/github.png";
import Insta from "../../assets/banner-books/insta.png";
import Twitter from "../../assets/banner-books/twitter.png";
const Footer = () => {
  return (
    <footer className="bg-violet-400 py-6 ">
      <div className="flex gap-4 md:flex justify-around items-center">
        <div>
          <h1 className="font-bold md:text-lg">Company</h1>
          <ul>
            <li className="py-2">About</li>
            <li className="py-2">Carrer</li>
            <li className="py-2">Blog</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold md:text-lg">Help Center</h1>
          <ul>
            <li className="py-2">Twitter</li>
            <li className="py-2">FaceBook</li>
            <li className="py-2">Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold md:text-lg">Legal</h1>
          <ul>
            <li className="py-2">Privacy Policy</li>
            <li className="py-2">Licensing</li>
            <li className="py-2">Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold md:text-lg">Download</h1>
          <ul>
            <li className="py-2">Ios</li>
            <li className="py-2">Android</li>
            <li className="py-2">Windows</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-around mt-3">
          <p className="text-base font-medium">© 2024 Online Books</p>
          <div className="md:w-6 h-6 flex gap-5">
            <img src={Facebook} alt="Facebook" className="hover:bg-violet-100 cursor-pointer transition-all duration-700"></img>
            <img src={Git} alt="Git" className="hover:bg-violet-100 cursor-pointer transition-all duration-700"></img>
            <img src={Insta} alt="Insta" className="hover:bg-violet-100 cursor-pointer transition-all duration-700"></img>
            <img src={Twitter} alt="Twitter" className="hover:bg-violet-100 cursor-pointer transition-all duration-700"></img>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
