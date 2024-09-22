import {View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../constants/color';

export default function PrimaryButton({children, onPress}) {
    return (
             <View style={styles.ButtonOuterContiner}>
                <Pressable style={({pressed}) => pressed ? [styles.ButtonInnercontainer, pressed ] : styles.ButtonInnercontainer} 
                    onPress={onPress} 
                    android_ripple={{color: colors.primary600 }} >
                    <Text style={styles.buttonText} >{children}</Text>
                </Pressable>
            </View>
    )

}


const styles = StyleSheet.create({
    ButtonOuterContiner: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    ButtonInnercontainer :{
        backgroundColor: colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});