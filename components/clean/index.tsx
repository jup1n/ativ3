import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"

type Props = {
    onClickClean : (text: any) => void
    titleClean   : String
}

export default function ButtonClean(props: Props) {
    return (
        <View style={styles.conteinerButtonClean}>
            <TouchableOpacity   style={styles.button}
                                onPressIn={props.onClickClean}>
                <Text style={styles.text}>{props.titleClean}</Text>
            </TouchableOpacity>
        </View>
    )
}