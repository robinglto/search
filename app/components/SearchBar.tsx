"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { useState, ChangeEvent } from "react";
import { words } from "@/lib/data";

export default function SearchBar() {
  const [search, setSearch] = useState<string[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSearch([]);
      return false;
    }
    setSearch(words.filter((w) => w.includes(e.target.value)).slice(0, 8));
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="search"
            className="text-black"
            onChange={(e) => handleSearch(e)}
          />
          <button type="submit">
            <MagnifyingGlassIcon />
          </button>
        </div>
        {search.length > 0 && (
          <div>
            {search.map((w) => (
              <div key={w}>
                <p>{w}</p>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}
