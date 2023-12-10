import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Frontend from './src/screens/Frontend';
// import TabNavigation from './src/screens/Frontend/TabNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <Frontend />
      {/* <View>
        <Text>
          Hello
        </Text>
      </View> */}
    </NavigationContainer>
  )
}

export default App