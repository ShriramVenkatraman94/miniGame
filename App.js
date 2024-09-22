import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import  StartGameScreen  from './screens/StartGameScreen';
import  { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import colors from './constants/color';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber ] = useState();
  const [ gameIsOver, setGameOver ] = useState(false);
  const [ guessRoundState, setGuessRoundState ] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans' : require("./assets/fonts/open-sans/OpenSans-Regular.ttf"),
    'open-sans-bold' : require("./assets/fonts/open-sans/OpenSans-Bold.ttf")
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numbrOfRounds) {
    console.log('Game Over ...');
    setGameOver(true);
    setGuessRoundState(numbrOfRounds);
  }

  function startNewhandler() {
    console.log('-- Start New Handler --');
    setUserNumber(null);
    setGuessRoundState(0);
  }

  let Screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if(userNumber) {
    Screen = <GameScreen onPickedNumber={userNumber} onGameOver= {gameOverHandler} />
  }

  if(gameIsOver) {
    Screen = <GameOverScreen userNumber={userNumber} onstartNewGame={startNewhandler} roundsNumber={guessRoundState} />
  }

  return (
    <LinearGradient colors={['#72063c','#ddb53f']} style={styles.rootScreen} >
      <ImageBackground source={require('./assets/images/dice.png')} resizeMode='cover' 
      style={styles.rootScreen}
      imageStyle={styles.backGroundImage}>
        <SafeAreaView>
        { Screen }
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen :  {
    backgroundColor: colors.primary800,
    flex: 1
  },
  backGroundImage: {
    opacity: 0.5
  }
});
