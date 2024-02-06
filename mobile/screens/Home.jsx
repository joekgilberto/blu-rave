import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth0 } from 'react-native-auth0';

import Disc from '../components/Disc';

export default function Home() {
    const nav = useNavigation();

    const { authorize } = useAuth0();

    const handleLogin = async () => {
        try {
            await authorize();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Disc>
            <Text style={styles.text}>Hello!</Text>
            <Text style={styles.text}>Blu-Rave is the ultimate app for every blu-ray collector. It's your personal high def companion, meticulously designed to help you organize and track your blu-ray library with ease. Say goodbye to the hassle of lost discs, duplicate purchases, and the dreaded 'What should I watch tonight?' question.</Text>
            <Text style={styles.text}>Blu-Rave empowers you to take control of your collection like never before. With its user-friendly interface and powerful features, this app is your ticket to blu-ray bliss.</Text>
            <View style={styles.authButtons}>
                <Pressable style={styles.button} onPress={() => { handleLogin() }}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
            </View>
        </Disc>

    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 10,
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Arial',
    },
    authButtons: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 20,
    },
    button: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    buttonText: {
        color: '#47b2ffff',
        fontSize: 20,
    },
});
