import { View, StyleSheet, TextInput, Alert, Text  } from 'react-native';
import PrimaryButton  from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Title from '../components/ui/Title';

function StartGameScreen({onPickNumber}) {
    const [ enteredNumber, setEnteredNumber ] =  useState('');

    function numberInputHandler(value) {
        setEnteredNumber(value);
    }


    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const choseNumber =  parseInt(enteredNumber);
        if((isNaN(choseNumber)) || choseNumber <= 0  || choseNumber > 99 ) {
            Alert.alert('Invalid Number ..', 'Number Should be 1 and 99',[{text:'okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        onPickNumber(enteredNumber);
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <View style={styles.inputContainer}>
                <TextInput style={styles.numberInput} 
                maxLength={2} keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                value={enteredNumber} 
                onChangeText={numberInputHandler} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
    alignItems: 'center'
    },
    inputContainer:{
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
    numberInput: {
        height: 50, 
        fontSize: 32, 
        borderBottomColor: '#4e0329',
        borderBottomWidth: 2,
        color: '#ddb53f',
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer : {
        flex: 1
    }
});