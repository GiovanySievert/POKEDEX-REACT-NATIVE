import React from 'react';
import {StatusBar} from 'react-native';

import Header from './components/Header/index.js';

// import { Container } from './styles';

export default function Index() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header />
    </>
  );
}
