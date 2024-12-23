import { Link } from "react-router-dom";
import FavList from "../../assets/banner-books/favoritebook.jpg";
const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="w-80 md:w-1/2">
        <img src={FavList} alt=""></img>
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="font-bold my-5 md:w-3/4 leading-snug text-2xl">
          Find Your favourite{" "}
          <span className="text-violet-600">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          You can read this book when you have a free time.You can choose your
          favourrite book and read it.!
        </p>

        {/* Status */}
        <div className="flex flex-col sm:flex-row gap-6 md:w-3/4 my-14 ">
          <div>
            <h1 className="font-bold text-xl">800+</h1>
            <p>Book Listing</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">500+</h1>
            <p>Register User</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">1200+</h1>
            <p>Pdf Download</p>
          </div>
        </div>
        <Link to="/shop" className="mt-8 block">
          <button className="bg-violet-700 text-white font-semibold px-5 py-2 rounded hover:bg-violet-400 transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};
export default FavBook;
