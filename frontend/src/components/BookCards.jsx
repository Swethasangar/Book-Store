// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Icons
import { FaCartShopping } from "react-icons/fa6";
// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";



const BookCards = ({ headline, Books }) => {
  // console.log("Books:", Books);
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="font-bold text-4xl text-center my-5">{headline}</h2>

      {/* cards */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Books?.data?.length > 0 ? (
            Books.data.map((book) => (
              <SwiperSlide key={book._id}>
                <Link to={`/book/${book._id}`}>
                  <div>
                    <img src={book.imageURL} alt="" />
                  </div>

                  <div className="flex gap-8 my-2">
                    <div>
                      <p className="font-bold">{book.bookTitle}</p>
                      <p>{book.authorName}</p>
                    </div>
                    <div>
                      <p className="text-violet-700">$15.00</p>
                    </div>
                  </div>

                  <button className=" bg-violet-400 hover:bg-violet-300 p-2 rounded flex gap-2 items-center">
                    View Details
                  </button>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Swiper>
      </div>
    </div>
  );
};
export default BookCards;
