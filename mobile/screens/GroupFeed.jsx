import { Text, StyleSheet } from 'react-native';

import Disc from '../components/Disc';

export default function GroupFeed() {
    return (
        <Disc>
            <Text style={styles.text}>Group Feed</Text>
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
