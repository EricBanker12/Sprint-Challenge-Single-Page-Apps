import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchInput, setSearchInput] = useState('')

  function handleInput(e) {
    setSearchInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.search(searchInput)
  }

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <label>
          Search:&nbsp;
          <input type="text" value={searchInput} onChange={handleInput} />
        </label>
      </form>
    </section>
  );
}
