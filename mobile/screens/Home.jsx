import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { LibreBarcode39Text_400Regular } from '@expo-google-fonts/libre-barcode-39-text';

export default function Home() {
    const [fontsLoaded] = useFonts({
        LibreBarcode39Text_400Regular
    });

    return (
        <View style={styles.screen}>
            <Text style={styles.header}>BLU-RAVE</Text>
            <Text style={styles.text}>Hello!</Text>
            <Text style={styles.text}>Blu-Rave is the ultimate app for every blu-ray collector. It's your personal high def companion, meticulously designed to help you organize and track your blu-ray library with ease. Say goodbye to the hassle of lost discs, duplicate purchases, and the dreaded "What should I watch tonight?" question.</Text>
            <Text style={styles.text}>Blu-Rave empowers you to take control of your collection like never before. With its user-friendly interface and powerful features, this app is your ticket to blu-ray bliss.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#47b2ffff',
    },
    header: {
        width: '100%',
        color: '#fff',
        fontSize: 60,
        fontFamily: 'LibreBarcode39Text_400Regular',
    },
    text: {
        width: '100%',
        marginTop: 16,
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Arial, Helvetica, sans-serif',
    }
});
