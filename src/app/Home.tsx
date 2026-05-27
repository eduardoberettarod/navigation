import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import ButtonIcon from '@/components/ButtonIcon'
import Header from '@/components/Header'
import Title from '@/components/Title'

// import { StackRoutesProps } from '@/routes/StackRoutes';
// import { BottomtabRoutesProps } from '@/routes/BottomTabRoutes'
import { DrawerRoutesProps } from '@/routes/DrawerRoutes'

export default function Home({ navigation }: DrawerRoutesProps<'home'>) {
    const insets = useSafeAreaInsets()

    return (
        <View style={{ flex: 1, padding: 32, paddingTop: insets.top }}>
            <Header>
                <ButtonIcon nameIcon="menu"
                    onPress={() => { navigation.openDrawer() }} />
                <Title>Home</Title>
                <ButtonIcon nameIcon="add-circle"
                    onPress={() => navigation.navigate("produto", { id: '67' })} />
            </Header>
        </View>
    )
}