import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopStack from './TopStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{
            title: "Restaurantes"
          }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{
            title: "Favoritos"
          }}
        />
        <Tab.Screen
          name="top"
          component={TopStack}
          options={{
            title: "Top"
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{
            title: "Buscar"
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{
            title: "Perfil"
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
