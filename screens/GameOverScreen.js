import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/color";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({roundsNumber, userNumber, onstartNewGame}) {
    return(
        <View style={styles.rootContainer}>
            <Title >Game Over</Title>
            <View style={ styles.imageContainer }> 
                <Image style={styles.imageStyle} source={require("../assets/images/success.png")} /> 
            </View>
            <Text style={styles.summaryText}>Your Phone needed <Text>{roundsNumber}</Text> rounds to guess the number <Text>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onstartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}


const styles = StyleSheet.create({
    rootContainer: {
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300, 
        borderRadius: 200,
        borderWidth: 3, 
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    imageStyle: {
        width:  '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        color: colors.primary500,
        fontSize: 24,
        textAlign: 'center'
    }
});