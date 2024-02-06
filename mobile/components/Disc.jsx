import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { LibreBarcode39Text_400Regular } from '@expo-google-fonts/libre-barcode-39-text';

export default function Disc({children}) {

    const [fontsLoaded] = useFonts({
        LibreBarcode39Text_400Regular
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.screen}>
            <Image style={styles.disc} src={'https://i.imgur.com/k7wec20.png'} alt={'Blu-Ray'} resizeMode={'cover'} />
            <View style={styles.main}>
                <Text style={styles.header}>BLU-RAVE</Text>
                <ScrollView style={styles.scrollView}>
                    {children}
                </ScrollView>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#cae7fc',
    },
    disc: {
        height: 75,
    },
    main: {
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
    scrollView: {
        flex: 1,
    },
});
