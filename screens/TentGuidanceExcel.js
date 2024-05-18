import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TentGuidanceExcellent = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.topicText}>Step by Step Construction Guidance</Text>
            <View style={styles.greenBox}>
                <Text style={styles.steps}>Step 1:</Text>
                <Text style={styles.details}>Choose a sturdy and durable tent with high-quality materials.</Text>
                <Text style={styles.steps}>Step 2:</Text>
                <Text style={styles.details}>Ensure all tent poles are fully extended and securely locked into place.</Text>
                <Text style={styles.steps}>Step 3:</Text>
                <Text style={styles.details}>Lay out the tent footprint on level ground and stake it down securely.</Text>
                <Text style={styles.steps}>Step 4:</Text>
                <Text style={styles.details}>Assemble the tent body according to the manufacturer's instructions, making sure all zippers are closed.</Text>
                <Text style={styles.steps}>Step 5:</Text>
                <Text style={styles.details}>Attach the rainfly over the tent body for additional weather protection, ensuring proper alignment and coverage.</Text>
                <Text style={styles.steps}>Step 6:</Text>
                <Text style={styles.details}>Use guylines and stakes to secure the rainfly, especially in windy conditions.</Text>
                <Text style={styles.steps}>Step 7:</Text>
                <Text style={styles.details}>Check all seam sand connections for tightness and waterproofing.</Text>
                <Text style={styles.steps}>Step 8:</Text>
                <Text style={styles.details}>Inside the tent, arrange sleeping bags and gear away from walls to prevent moisture buildup.</Text>
                <Text style={styles.steps}>Step 9:</Text>
                <Text style={styles.details}>Consider using a ground tarp or footprint to further protect the tent floor.</Text>
                <Text style={styles.steps}>Step 10:</Text>
                <Text style={styles.details}>Keep the tent entrance closed when not in use to prevent insects and wildlife from entering.</Text>
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
        height: '87%',
        left: '2.5%',
        top: '6%',
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

export default TentGuidanceExcellent;
