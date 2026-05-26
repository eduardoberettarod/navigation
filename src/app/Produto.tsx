import { View } from 'react-native'

import ButtonIcon from '@/components/ButtonIcon'
import Header from '@/components/Header'
import Title from '@/components/Title'

import { useNavigation } from "@react-navigation/native";

export default function Produto() {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <ButtonIcon nameIcon="arrow-circle-left" onPress={() => navigation.goBack()} />
                <Title>Produto</Title>
            </Header>
        </View>
    )
}