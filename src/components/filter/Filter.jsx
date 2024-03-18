import { CiSearch } from "react-icons/ci";
import "./Filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results form <b>London</b>
      </h1>
      <section className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="city location"
          />
        </div>
      </section>

      <section className="bottom">
        <div className="item">
          <label htmlFor="type">type</label>
          <select type="text" id="type" name="type">
            <option value="any">any</option>
            <option value="buy">Buy</option>
            <option value="buy">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">property</label>
          <select type="text" id="property" name="property">
            <option value="any">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max price</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>{" "}
        <button>
          <CiSearch />
        </button>
      </section>
    </div>
  );
}

export default Filter;
