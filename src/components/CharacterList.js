import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [address, setAddress] = useState("https://rickandmortyapi.com/api/character/")
  const [characterList, setCharacterList] = useState([])

  function search(str) {
    setAddress(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(str)}`)
  }

  useEffect(() => {
    axios.get(address)
      .then(resp => {
        setCharacterList(resp.data.results)
      })
      .catch(err => {
        console.error(err)
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [address]);

  return (
    <>
      <SearchForm search={search} />
      <section className="character-list">
        {characterList.map(char => <CharacterCard key={char.id} {...char} />)}
      </section>
    </>
  );
}
