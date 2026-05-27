import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer'

import Home from "@/app/Home";
import Produto from "@/app/Produto";
import { MaterialIcons } from '@expo/vector-icons';

export type availableRoutes = {
    home: undefined,
    produto: undefined | { id: string }
}

export type DrawerRoutesProps<currentRoute extends keyof availableRoutes>
    = DrawerScreenProps<availableRoutes, currentRoute>

const Drawer = createDrawerNavigator<availableRoutes>()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false,
            drawerActiveTintColor: '#eaeaea',
            drawerInactiveTintColor: '#676767',
            drawerActiveBackgroundColor: '#191919',
         }}>
            <Drawer.Screen name='home' component={Home}
                options={{
                    drawerIcon: ({ color }) => <MaterialIcons name='home' size={24} color={color} />
                }} />
            <Drawer.Screen name='produto' component={Produto}
                options={{
                    drawerIcon: ({ color }) => <MaterialIcons name='shopping-cart' size={24} color={color} />
                }} />
        </Drawer.Navigator>
    )
}