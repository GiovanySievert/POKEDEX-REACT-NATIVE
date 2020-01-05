import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 0.5;
  background: #ccc;
  align-items: center;
  padding: 10px;
`;

export const PokemonName = styled.Text`
  color: #f6c705;
  font-family: 'Press Start 2P';
  font-size: 20px;
  margin-top: 50px;
  text-align: center;
  /* left: 25%; */
`;

export const PokemonDescription = styled.Text`
  color: #283a6c;
  font-family: 'Press Start 2P';
  font-size: 13px;
  text-align: center;
`;

export const PokemonImage = styled.Image`
  height: 200px;
  width: 200px;
  left: 25%;
`;

export const PokemonList = styled.FlatList``;

export const PokemonInfo = styled.Text`
  justify-content: flex-end;
  color: #283a6c;
  font-family: 'Press Start 2P';
  font-size: 13px;
  text-align: right;
  margin-bottom: 20px;
`;
