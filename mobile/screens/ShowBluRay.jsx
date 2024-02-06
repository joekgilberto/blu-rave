import { Text, StyleSheet } from 'react-native';

import Disc from '../components/Disc';

export default function ShowBluRay() {
    return (
        <Disc>
            <Text style={styles.text}>Show Blu-Ray</Text>
        </Disc>

    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 10,
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Arial',
    }
});
