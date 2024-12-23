import BannerPage from "./BannerPage";
import Search from "./Search";

const Banner = () => {
  return (
    <section className="px-4 lg:px-24 bg-violet-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* Left Side */}
        <div className="md:w-1/2 h-full">
          <h1 className="font-bold text-5xl leading-snug">
            Buy and sell your books
          </h1>
          <h2 className="text-3xl text-violet-800 font-semibold mb-4 leading-snug">
            for the best prices
          </h2>
          <p className="md:w-4/4">
            Find and read more books you'll love, and keep track of the book you
            want to read. Be part of the
            <span>
              world's largest community of book lovers on Googlereads.
            </span>
          </p>
          <div>
            <Search />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <BannerPage />
        </div>
      </div>
    </section>
  );
};
export default Banner;
