import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TentGuidanceGood = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.topicText}>Step by Step Construction Guidance</Text>
            <View style={styles.greenBox}>
                <Text style={styles.steps}>Step 1:</Text>
                <Text style={styles.details}>Select a reliable tent with moderate weather resistance.</Text>
                <Text style={styles.steps}>Step 2:</Text>
                <Text style={styles.details}>Set up the tent on relatively flat ground, using rocks or logs to level if necessary.</Text>
                <Text style={styles.steps}>Step 3:</Text>
                <Text style={styles.details}>Ensure tent poles are properly inserted into grommets or sleeves.</Text>
                <Text style={styles.steps}>Step 4:</Text>
                <Text style={styles.details}>Stake down the tent securely, paying attention to tension on all sides.</Text>
                <Text style={styles.steps}>Step 5:</Text>
                <Text style={styles.details}>Assemble the rainfly over the tent body, leaving ventilation gaps if possible.</Text>
                <Text style={styles.steps}>Step 6:</Text>
                <Text style={styles.details}>Use guylines to stabilize the tent structure, especially in moderate winds.</Text>
                <Text style={styles.steps}>Step 7:</Text>
                <Text style={styles.details}>Check for any tears or holes in the tent fabric and patch as needed.</Text>
                <Text style={styles.steps}>Step 8:</Text>
                <Text style={styles.details}>Arrange sleeping gear inside the tent, keeping it organized and away from walls.</Text>
                <Text style={styles.steps}>Step 9:</Text>
                <Text style={styles.details}>Utilize a ground cloth or tarp beneath the tent for added protection.</Text>
                <Text style={styles.steps}>Step 10:</Text>
                <Text style={styles.details}>Keep the tent entrance closed when not in use to minimize insect entry.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topicText: {
        marginBottom: 10,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#653030',
        top: '2%',
    },
    image: {
        position: 'absolute',
        width: 168,
        height: 150,
        left: '35%',
        top: '35%',
    },
    greenBox: {
        position: 'absolute',
        width: '95%',
        height: '85%',
        left: '2.5%',
        top: '8%',
        backgroundColor: '#5FFF9F',
        borderRadius: 10,
        padding: 20,
    },
    steps: {
        fontWeight: 'bold',
        fontSize: 15,
        bottom: '1.2%',
    },
    details: {
        bottom: '1.8%'
    },
});

export default TentGuidanceGood;
