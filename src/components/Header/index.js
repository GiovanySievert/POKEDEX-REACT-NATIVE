import React, {useEffect, useState} from 'react';

import api from '../../api/api';

import {
  Container,
  PokemonLogo,
  Input,
  SearchContainer,
  MyButton,
  TextButton,
  PokemonDescription,
  PokemonName,
  PokemonImage,
} from './styles';

import {BoxShadow} from 'react-native-shadow';
import PokeLogo from '../../assets/images/8-bit.png';

const shadowOpt = {
  width: 360,
  height: 50,
  color: '#111',
  border: 0,
  radius: 1,
  opacity: 0,
  x: 7,
  y: 11,
  style: {marginVertical: 5},
};

const Header = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonName, setPokemonName] = useState([]);

  async function checkPokemonExists() {
    const PokeName = await api
      .get(`/pokemon/${searchTerm}`)
      .then(result => setPokemonName([result.data]))
      .then(console.log(pokemonName));

    return PokeName;
  }

  return (
    <>
      <Container>
        <PokemonLogo source={PokeLogo} />
        <SearchContainer>
          <BoxShadow setting={shadowOpt}>
            <Input
              autoCapitalize="none"
              placeholder="Ex: DITTO"
              value={searchTerm}
              onChangeText={text => setSearchTerm(text)}
            />
          </BoxShadow>
          <MyButton onPress={checkPokemonExists}>
            <TextButton>SEARCH</TextButton>
          </MyButton>
        </SearchContainer>
        {pokemonName.map(p => (
          <>
            <PokemonName>{p.species.name}</PokemonName>

            <PokemonImage source={{uri: p.sprites.front_default}} />
            <PokemonDescription>
              Type: {p.types[0].type.name}
            </PokemonDescription>
            <PokemonDescription>
              Main Ability: {p.abilities[0].ability.name}
            </PokemonDescription>
          </>
        ))}
      </Container>
    </>
  );
};

export default Header;

function pares(x, y) {
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
pares(1, 20);
