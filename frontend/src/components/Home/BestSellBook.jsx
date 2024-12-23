import axios from "axios";
import { useState, useEffect } from "react";
import BookCards from "../BookCards";
import { useSearchParams } from "react-router-dom";

const BestSellBook = () => {
  const [books, setBooks] = useState([]);
  //   console.log(books)
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/all-books?"+searchParams)
      .then((res) => {
        // console.log(res.data)
        setBooks(res.data);
      })
      .catch((error) => {
        console.log("Error fetching books:", error);
      });
  }, [searchParams]);
  return (
    <div>
      <BookCards Books={books} headline="Best Seller Books" />
    </div>
  );
};
export default BestSellBook;
