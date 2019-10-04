import React, { useEffect, useState } from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"

import SearchForm from "./SearchForm"
import CharacterCard from "./CharacterCard"

export default function CharacterList(props) {
  const charId = props.match.params.id
  const [address, setAddress] = useState(`https://rickandmortyapi.com/api/character/${charId?charId:''}`)
  const [characterList, setCharacterList] = useState([])

  function search(str) {
    setAddress(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(str)}`)
  }

  useEffect(() => {
    axios.get(address)
      .then(resp => {
        setCharacterList(resp.data.results || [resp.data])
      })
      .catch(err => {
        console.error(err)
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [address])

  return (
    <>
      <SearchForm search={search} />
      <section className="character-list container row mx-auto">
        {characterList.map(char => <CharacterCard key={char.id} {...char} /*onClick={()=>{props.history.push(`/characters/${char.id}`)}}*/ />)}
      </section>
    </>
  )
}
