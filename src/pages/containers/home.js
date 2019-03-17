import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Header from '../../sections/containers/header';
import Formulario from '../../sections/containers/formulario'

class Home extends Component {
  ClickSentData = () => {
  }
  render() {
    return (
        <HomeLayout>
          <Header />
          <Formulario />
        </HomeLayout>
    )
  }
}

export default Home
