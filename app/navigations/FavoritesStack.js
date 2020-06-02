import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../screens/Favorites';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Favorites}
        options={{
          title: "Favoritos"
        }}
      />
    </Stack.Navigator>
  )
}

export default FavoritesStack;
