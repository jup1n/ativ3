import styleToBarStyle from "expo-status-bar/src/styleToBarStyle";
import { Text, View } from "react-native";
import { styles } from "./style";

type Props = {
    score       : number
    title       : String
    styleScore  : any
}

export default function Score(props: Props) {
    
    return (
        <View style={styles.conteinerScore}>
            <Text style={props.styleScore}>{props.title}</Text>
            <Text style={props.styleScore}>{props.score}</Text>
        </View>
    )
}

//style={props.style ? styles.textWe : styles.textThey}