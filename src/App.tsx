import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from "expo";
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GRAPHQL_URL } from "@env";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReservationScreen from './screens/ReservationScreen';

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Reservation" component={ReservationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);