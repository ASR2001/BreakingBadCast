import React, { useEffect } from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

function CharacterGrid({ items, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map(item => {
        return <CharacterItem key={item.char_id} item={item} />
      })}
    </section>
  )
}

export default CharacterGrid
