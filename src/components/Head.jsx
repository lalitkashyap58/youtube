import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector} from "react-redux";
import { cacheResults } from "../store/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache=useSelector((store)=>store.search);


  useEffect(() => {
    const timer = setTimeout(() =>{ 
      if(searchCache[searchQuery])
      {
 setSuggestions(searchCache[searchQuery])    ;
 
      }
      else{
getSearchSuggestions();
      }
     }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({[searchQuery]:json[1]}))
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-lg bg-slate-300 sticky top-0 z-50">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="hamburger h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
          alt="hamburger "
        />
        <a href="/">
          <img
            className="logo h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/500px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
          <input
            type="text"
            className="w-1/2 p-2 rounded-l-full border border-gray-400 px-5"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            
            // onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-5 py-2 m-1 rounded-r-full border-gray-400 bg-gray-400">🔍</button>
        </div>
        {showSuggestions && (
          <div className="fixed border-gray-400 px-5 w-1/4 mx-1 rounded-2xl bg-gray-100">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  className="cursor-pointer"
                  key={index}
                  onClick={() => {
                    setSearchQuery(suggestion);
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex gap-10 justify-center">
        <div className="">🌙</div>👤
      </div>
    </div>
  );
};

export default Head;
