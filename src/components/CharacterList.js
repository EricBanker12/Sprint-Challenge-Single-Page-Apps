import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(resp => {
        setCharacterList(resp.data.results)
      })
      .catch(err => {
        console.error(err)
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characterList.map(char => <CharacterCard key={char.id} {...char} />)}
    </section>
  );
}
