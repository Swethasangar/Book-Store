import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from "react-toastify";
const SingleBook = ({ cartItems, setCartItems }) => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { authInfo } = useContext(AuthContext);
  const { user } = authInfo;
  // Addtocart
  const addTocart = () => {
    if (!user) {
      toast.error("You need to Sign Up to add items to the cart.");
      navigate("/register"); // Redirect to register page
      return;
    }
    const itemExist = cartItems.some(
      (item) => item.book.data._id === book.data._id
    );

    if (!itemExist) {
      const newItem = { book };
      setCartItems((state) => [...state, newItem]);
      toast.success("Item added to cart successfully.");
    }
  };

  useEffect(() => {
    axios
      .get(`https://book-store-lgdr.onrender.com/${id}`)
      .then((res) => {
        // console.log("API Response:", res.data);
        setBook(res.data);
      })
      .catch((error) => {
        console.log("Error fetching books:", error);
      });
  }, [id]);
  return (
    <div>
      {book?.data?.bookTitle ? (
        <section className="md:flex justify-center items-center">
          <div className="md:flex items-center gap-11">
            <img
              src={book.data.imageURL}
              alt=""
              className="w-52 md:w-80 mx-10 my-20"
            />
            <div className="flex-col justify-center items-center space-y-6">
              <h1 className="ml-4 font-medium md:text-lg">
                {book.data.bookTitle}
              </h1>
              <h2 className="ml-4 md:text-lg">{book.data.authorName}</h2>
              <p className="ml-4 text-base">{book.data.bookDescription}</p>
              <h1 className="ml-4 text-violet-800 text-base">$15.00</h1>
              <button
                className="ml-4 bg-violet-400 hover:bg-violet-300 p-2 rounded flex gap-2 items-center"
                onClick={addTocart}
              >
                <FaCartShopping className="w-4 h-4" />
                AddTocart
              </button>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};
export default SingleBook;
