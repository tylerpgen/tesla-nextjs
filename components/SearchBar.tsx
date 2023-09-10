"use client";
import { useState } from "react";
import { SearchModel } from "./";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses} `}>
      <Image src="/magnifying-glass.svg" alt="magnifying glass" width={40} height={40} className="object-contain" />
    </button>
  );
};

const SearchBar = () => {
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchModel model={model} setModel={setModel} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Model 3"
          className="searchbar__input"
        />
      </div>
    </form>
  );
};

export default SearchBar;
