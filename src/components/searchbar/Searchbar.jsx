import { useState } from "react";
import "./Searchbar.scss";
import { CiSearch } from "react-icons/ci";

const types = ["buy", "rent"];

function Searchbar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  function switchType(val) {
    setQuery((prev) => ({ ...prev, type: val }));
  }

  return (
    <div className="searchbar">
      <section className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </section>
      <form>
        <input type="text" name="location" placeholder="City location" />
        <input
          type="number"
          name="min-price"
          min={0}
          max={1000000}
          placeholder="min price"
        />
        <input
          type="number"
          name="max-price"
          min={0}
          max={1000000}
          placeholder="max price"
        />
        <button>
          <CiSearch />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
