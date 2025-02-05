import { Text, StyleSheet  } from "react-native";
import colors from "../../constants/color";

export default function Title({children}) {
    return(
        <Text style={styles.title} >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.accent500,
        textAlign: 'center',
        borderWidth: 2, 
        borderColor: colors.accent500,
        padding: 20
    }
});

