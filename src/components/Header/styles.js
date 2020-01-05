import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import {View, Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #ccc;
`;

export const PokemonLogo = styled.Image`
  margin-top: 80px;
  margin-bottom: 20px;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#f6c705',
  fontFamily: 'Press Start 2P',
  overflow: 'visible',
})`
  height: 54px;
  width: 100%;
  border-radius: 0px;
  box-shadow: 30px 30px 30px red;
  padding: 0 15px;
  border: none;
  background-color: #283a6c;
  color: #f6c705;
  font-size: 14px;
`;

export const MyButton = styled(RectButton)`
  height: 30px;
  width: 31%;
  padding: 0px;
  border: 5px solid #222;
  margin-top: 20px;
  background-color: #283a6c;
  background-color: transparent;
`;

export const TextButton = styled.Text`
  color: #f6c705;
  font-family: 'Press Start 2P';
  font-size: 18px;
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
