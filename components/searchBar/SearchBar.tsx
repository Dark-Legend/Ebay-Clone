"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import EbayIcon from "@/public/images/ebay.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { fetchProductBySearch } from "@/datafetch/products/query";
import { useDebounce } from "use-debounce";
import SearchItemsCard from "../searchItemsCard/SearchItemsCard";
import { RxCross1 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [value] = useDebounce(searchedWord, 800);
  const { data } = fetchProductBySearch(value);
  const notify = () => toast.error("No Product Found");

  useEffect(() => {
    if (data?.message === "No Product Found") {
      notify();
    }
  }, [data]);

  const showResultArrow = () => {
    if (data?.result?.length && !showSearchResult) {
      return (
        <IoIosArrowDown
          className="mr-2 hover:cursor-pointer"
          fontSize={20}
          onClick={() => setShowSearchResult(!showSearchResult)}
        />
      );
    }
    if (showSearchResult) {
      return (
        <IoIosArrowUp
          className="mr-2 hover:cursor-pointer"
          fontSize={20}
          onClick={() => setShowSearchResult(false)}
        />
      );
    }
  };
  return (
    <div className="flex items-center gap-5 border-b-solid border-b border-b-gray-400">
      <Link href="/">
        <Image src={EbayIcon} alt="icon" width={80} height={80} draggable />
      </Link>
      <div className="text-slate-500 break-words text-[12px] flex items-center gap-1">
        <p>Shop by category</p>
        <IoIosArrowDown color="black" fontSize={20} />
      </div>
      <div className="border-2 border-solid border-gray-600 w-full rounded flex items-center pl-2 relative">
        <CiSearch color="black" fontSize={20} />
        <input
          type="text"
          placeholder="Search for anything"
          className="p-2 w-full text-black outline-0"
          onChange={(e) => setSearchedWord(e?.target?.value)}
          value={searchedWord}
        />
        {Boolean(searchedWord?.length) && (
          <RxCross1
            className="mr-2 hover:cursor-pointer"
            fontSize={20}
            onClick={() => {
              setSearchedWord("");
              setShowSearchResult(false);
            }}
          />
        )}
        {showResultArrow()}
        {showSearchResult && (
          <div className="absolute bottom-0 top-10 mt-2 bg-white w-full h-60 overflow-y-auto p-2 z-50 right-[2px] shadow-lg rounded border border-solid border-gray-300 transition-all duration-500 ease-in-out">
            <div className="flex flex-col gap-3">
              {data?.result?.map((val, i) => (
                <SearchItemsCard key={i} val={val} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default SearchBar;
