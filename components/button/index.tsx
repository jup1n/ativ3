import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"

type Props = {
    onClick : (text: any) => void
    title   : String
    styleButton: any
}

export default function Button(props: Props) {
    return (
        <View style={styles.conteinerButton}>
            <TouchableOpacity style={props.styleButton} onPressIn={props.onClick}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}