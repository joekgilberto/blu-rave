import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { LibreBarcode39Text_400Regular } from '@expo-google-fonts/libre-barcode-39-text';

export default function Home() {
    const [fontsLoaded] = useFonts({
        LibreBarcode39Text_400Regular
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.screen}>
            <Image style={styles.disc} src={'https://i.imgur.com/k7wec20.png'} resizeMode={'cover'} />
            <View style={styles.home}>
                <ScrollView>
                    <Text style={styles.header}>BLU-RAVE</Text>
                    <Text style={styles.text}>Hello!</Text>
                    <Text style={styles.text}>Blu-Rave is the ultimate app for every blu-ray collector. It's your personal high def companion, meticulously designed to help you organize and track your blu-ray library with ease. Say goodbye to the hassle of lost discs, duplicate purchases, and the dreaded "What should I watch tonight?" question.</Text>
                    <Text style={styles.text}>Blu-Rave empowers you to take control of your collection like never before. With its user-friendly interface and powerful features, this app is your ticket to blu-ray bliss.</Text>
                </ScrollView>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cae7fc',
    },
    disc: {
        width: Dimensions.get('window').width,
        height: 75,
    },
    home: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: '#47b2ffff',
    },
    header: {
        marginTop: 40,
        color: '#fff',
        fontSize: 70,
        fontFamily: 'LibreBarcode39Text_400Regular',
    },
    text: {
        marginVertical: 20,
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Arial',
    }
});
