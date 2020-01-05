import React from 'react';

import {
  Container,
  PokemonName,
  PokemonDescription,
  PokemonImage,
  PokemonList,
} from './styles';

import pokemon from '../../api/pokemon.js';

export default function Content() {
  return (
    <Container>
      <PokemonList
        data={pokemon}
        renderItem={({item}) => (
          <>
            <PokemonName>{item.name}</PokemonName>
            <PokemonImage source={{uri: item.image}} />
            <PokemonDescription>{item.description}</PokemonDescription>
          </>
        )}
      />
    </Container>
  );
}
