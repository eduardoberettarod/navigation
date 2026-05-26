import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps, TouchableOpacity } from 'react-native'

type Props = TouchableOpacityProps & {
    nameIcon: keyof typeof MaterialIcons.glyphMap
}

export default function ButtonIcon({ nameIcon, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <MaterialIcons name={nameIcon} size={32} />
        </TouchableOpacity>
    )
}