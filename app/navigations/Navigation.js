import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Restaurants from '../screens/Restaurants';
import Favorites from '../screens/Favorites';
import TopRestaurants from '../screens/TopRestaurants';
import Account from '../screens/Account';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={Restaurants}
          options={{
            title: "Restaurantes"
          }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{
            title: "Favoritos"
          }}
        />
        <Tab.Screen
          name="top"
          component={TopRestaurants}
          options={{
            title: "Top"
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            title: "Buscar"
          }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{
            title: "Perfil"
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
