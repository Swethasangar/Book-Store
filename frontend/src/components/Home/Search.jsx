import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchHandler = () => {
    navigate('/all-books?keyword='+keyword)
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Search a book here"
        name="search"
        id="search"
        onChange={(e) => setKeyword(e.target.value)}
        onBlur={searchHandler}
        className="mt-4 py-2 px-2 rounded-s-sm focus:outline-none"
      ></input>
      <button
        className="font-medium bg-violet-800 py-2 px-6 text-white rounded-s-sm hover:bg-violet-500 transition-all ease-in duration-200"
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  );
};
export default Search;
