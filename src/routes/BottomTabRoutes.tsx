import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import Home from "@/app/Home";
import Produto from "@/app/Produto";
import { MaterialIcons } from '@expo/vector-icons';

export type availableRoutes = {
    home: undefined,
    produto: undefined | { id: string }
}

export type BottomtabRoutesProps<currentRoute extends keyof availableRoutes>
    = BottomTabScreenProps<availableRoutes, currentRoute>

const Tab = createBottomTabNavigator<availableRoutes>()

export default function BottomTabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false,
            tabBarActiveTintColor: '#eaeaea',
            tabBarInactiveTintColor: '#676767',
            tabBarActiveBackgroundColor: '#191919',
         }}>
            <Tab.Screen name='home' component={Home}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name='home' size={24} color={color} />
                }} />
            <Tab.Screen name='produto' component={Produto}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name='shopping-cart' size={24} color={color} />
                }} />
        </Tab.Navigator>
    )
}