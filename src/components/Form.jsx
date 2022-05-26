import { useState } from "react";

function Form({ submitSearch }) {
  const [location, setLocation] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          aria-label="location"
          type="text"
          placeholder="Search for location"
          className="input"
          value={location}
          onChange={(e) => setLocation(e.target.value.toLocaleLowerCase())}
          required
        />
        <br />
        <button type="submit" className="button" onClick={onSubmit}>
          SEARCH
        </button>
      </div>
    </form>
  );
}

export default Form;
