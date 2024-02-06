import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AllBluRays from '../screens/AllBluRays';
import NewBluRay from '../screens/NewBluRay';
import GroupFeed from '../screens/GroupFeed';

const Tab = createBottomTabNavigator();

export default function Main() {
    const nav = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName='All Blu-Rays'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#47b2ffff'
            }}
        >
            <Tab.Screen
                name='All Blu-Rays'
                component={AllBluRays}
                options={{
                    tabBarLabel: 'All Blu-Rays',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='disc-player' color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='New Blu-Ray'
                component={NewBluRay}
                options={{
                    tabBarLabel: 'New Blu-Ray',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='movie-open-plus' color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Group Feed'
                component={GroupFeed}
                options={{
                    tabBarLabel: 'Group Feed',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='account-group' color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}