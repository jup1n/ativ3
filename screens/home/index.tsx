import { Text, View } from "react-native";
import Score from "../../components/score";
import { useState } from "react";
import Button from "../../components/button";
import { styles } from "./style";
import ButtonClean from "../../components/clean";

export default function Home() {
    const [scoreWe, setScoreWe] = useState(0)
    const [scoreThey, setScoreThey] = useState(0)

    function handlePointsAddWe() {
            setScoreWe(scoreWe + 1)
    }

    function handlePointsAddThey() {
        setScoreThey(scoreThey + 1)
    }

    function handlePointsLessWe() {
        setScoreWe(scoreWe - 1)
    }

    function handlePointsLessThey() {
        setScoreThey(scoreThey - 1)
    }

    function handlePointsClean() {
        setScoreWe(scoreWe - scoreWe)
        setScoreThey(scoreThey - scoreThey)
    }

    return (
        <View style={styles.main}>
            <View style={styles.conteinerTitle}><Text style={styles.title}>MARCADOR DE TRUCO</Text></View>
            <View style={styles.conteinerScore}>
                <Score styleScore={styles.textWe} title={'NÓS'} score={scoreWe}/>
                <Score styleScore={styles.textThey} title={'ELES'} score={scoreThey}/>
            </View>
            <View style={styles.conteinerButtons}>
                <View style={styles.button}>
                    <Button styleButton={styles.buttonAdd} title={'+1'} onClick={handlePointsAddWe}/>
                    <Button styleButton={styles.buttonLess} title={'-1'} onClick={handlePointsLessWe}/>
                </View>
                <View style={styles.button}>
                    <Button styleButton={styles.buttonAdd} title={'+1'} onClick={handlePointsAddThey}/>
                    <Button styleButton={styles.buttonLess} title={'-1'} onClick={handlePointsLessThey}/>
                </View>
            </View>
            <ButtonClean titleClean={'Zerar'} onClickClean={handlePointsClean}/>
        </View>
    )
}