import { Text, StyleSheet } from 'react-native';

import Disc from '../components/Disc';

export default function NewBluRay() {
    return (
        <Disc>
            <Text style={styles.text}>New Blu-Ray</Text>
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
