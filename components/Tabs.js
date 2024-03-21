import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Homescreen from "../screens/Homescreen";
import NotificationScreen from "../screens/NotificationScreen";
import FindPeopleScreen from "../screens/FindPeopleScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Homescreen}></Tab.Screen>
        <Tab.Screen name="Notifications" component={NotificationScreen}></Tab.Screen>
        <Tab.Screen name="Find" component={FindPeopleScreen}></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default Tabs;