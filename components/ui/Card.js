import { View, StyleSheet } from "react-native";

export default function Card({childern}) {
    return (
        <View style={styles.cardContainer}>{childern}</View>
    );
}


const styles = StyleSheet.create({ 
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
});