import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal ] = useState("Dog");

  console.log("ANIMALS", ANIMALS);
  return (
    <div className="search-params">
      <form>
        <label htlmfor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htlmfor="animal">
          Animal
          <select
          id="animal"
          value={animal}
          onChange={e => setAnimal(e.target.value)}
          onBlur={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
            <option value={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
