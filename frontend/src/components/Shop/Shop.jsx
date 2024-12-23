import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/all-books")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((error) => {
        console.log("Error fetching books:", error);
      });
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books?.data?.length > 0 ? (
          books.data.map((book) => (
            <Card className="p-2">
              <img src={book.imageURL} alt="" className="h-full"></img>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white py-2">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 py-1">
                {book.authorName}
              </p>

              <button className="bg-violet-700 font-semibold text-white py-1 my-1 rounded">
                Buy Now
              </button>
            </Card>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Shop;
