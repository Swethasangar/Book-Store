import { useEffect, useState } from "react";
import axios from "axios";
import BookCards from "../BookCards";
const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all-books")
      .then((res) => {
        if (res.data && res.data.length > 4) {
          setBooks(res.data.slice(4, 8)); // Only slice if there are enough items
        }
        // console.log(res.data)
        setBooks(res.data);
      })
      .catch((error) => {
        console.log("Error fetching books:", error);
      });
  }, []);
  return (
    <div>
      <BookCards Books={books} headline="Other Books" />
    </div>
  );
};
export default OtherBooks;
