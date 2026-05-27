import { View } from 'react-native'

import ButtonIcon from '@/components/ButtonIcon'
import Header from '@/components/Header'
import Title from '@/components/Title'

import { StackRoutesProps } from '@/routes/StackRoutes';

export default function Produto({ navigation, route }: StackRoutesProps<'produto'>) {


    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <ButtonIcon nameIcon="arrow-circle-left" onPress={() => navigation.goBack()} />
                <Title>Produto {route.params?.id}</Title>
            </Header>
        </View>
    )
}