import { View, Text, StyleSheet } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.layout}>
            <Text style={styles.text}>Loading...</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    layout:{
        flex: 1,
    },
    text: {
        marginVertical: 10,
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Arial',
    }
});
