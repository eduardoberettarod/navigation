import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'

import Home from "@/app/Home";
import Produto from "@/app/Produto";

export type availableRoutes = {
    home: undefined,
    produto: undefined | { id: string }
}

export type StackRoutesProps<currentRoute extends keyof availableRoutes>
    = NativeStackScreenProps<availableRoutes, currentRoute>

const Stack = createNativeStackNavigator<availableRoutes>()

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='produto' component={Produto} />
        </Stack.Navigator>
    )
}