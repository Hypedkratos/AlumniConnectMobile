import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Loginscreen from "./screens/Loginscreen";
import Signupscreen from "./screens/Signupscreen";
import Homescreen from "./screens/Homescreen";
import Settingscreen from "./screens/Settingscreen";
import NotificationScreen from "./screens/NotificationScreen";
import FindPeopleScreen from "./screens/FindPeopleScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Octicons from "react-native-vector-icons/Octicons"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function MyTab() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.bottomBarStyle,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'white'
        }}
      >
        <Tab.Screen name="Home" component={Homescreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={28} color={color} />
            )
          }}
        />
        <Tab.Screen name="Notifications" component={NotificationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="bell" size={28} color={color} />
            )
          }}
        />
        <Tab.Screen name="Find People" component={FindPeopleScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="people" size={28} color={color} />
            )
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={28} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Signupscreen" component={Signupscreen}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Loginscreen" component={Loginscreen}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Homescreen" component={MyTab}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Settingscreen" component={Settingscreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  bottomBarStyle: {
    position: 'absolute',
    height: 70,
    width: '100%',
    backgroundColor: '#0F2167'
  }
})