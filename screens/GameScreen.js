import { Text, View, StyleSheet, Alert, FlatList } from 'react-native';
import  Title  from '../components/ui/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/instructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomNumber(min,max,exclude){
    const rdnum = Math.floor(Math.random() * (max-min)) + min;
    if(rdnum === exclude) {
        return generateRandomNumber(min,max,exclude);
    } else {
        return rdnum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({onPickedNumber, onGameOver}) {
    const initialGuess = generateRandomNumber(1,100,onPickedNumber);
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
    const [ guessRounds, setGuessRounds ] = useState([initialGuess]);

    useEffect(() => {
        console.log(currentGuess,onPickedNumber,'-- Game Number --');
        if(currentGuess == onPickedNumber) {
            console.log(currentGuess,onPickedNumber,'-- Game Over --');
            onGameOver(guessRounds.length);
        }
    },[currentGuess, onPickedNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    },[]);

    function nextGuessHandler(direction) { 
        if((direction === 'lower' && currentGuess < onPickedNumber) || (direction === 'higher' && currentGuess > onPickedNumber)) {
            Alert.alert("Don't lie!", 'You know that this is wrong...',[{text: 'sorry!', style:'cancel'}]);
            return;
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess - 1;
        }  else {
            minBoundary =  minBoundary + 1;
        }
        const newRNDNumber = generateRandomNumber(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRNDNumber);
        setGuessRounds((preGuessState) => [newRNDNumber,...preGuessState]);
    }

    return(
        <View style={styles.container}>
             <Title>Opponent's Guess</Title>
             <NumberContainer>{currentGuess}</NumberContainer>
             <View style={styles.cardContainer}>
                <InstructionText style={styles.instructionText}> Higher or Lower ?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View  style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}><Ionicons name="remove" color="white" /></PrimaryButton>
                    </View>
                    <View  style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}><Ionicons name="add" color="white" /></PrimaryButton>
                    </View>
                </View>
             </View>
             <View style={styles.listContiner}>
                {/* {guessRounds.map((guessRound) => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList data={guessRounds}
                renderItem={(itemData) =><GuessLogItem roundNumber={guessRounds.length - itemData.index} guess={itemData.item}/> }
                keyExtractor={(item) => item}/> 
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16, 
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: '#2D0218',
        borderRadius: 6,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6, 
        shadowOpacity: 0.25
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer : {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    listContiner: {
        padding: 16
    }
})