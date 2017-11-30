import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  align-items: center;
  background-color: #fff;
  flex: 1;
  justify-content: center;
`
const Text = styled.Text`
  line-height: 24;
`

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Container>
    )
  }
}
