import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TentGuidanceFair = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.topicText}>Step by Step Construction Guidance</Text>
            <View style={styles.greenBox}>
                <Text style={styles.steps}>Step 1:</Text>
                <Text style={styles.details}>Use a basic tent suitable for fair weather conditions.</Text>
                <Text style={styles.steps}>Step 2:</Text>
                <Text style={styles.details}>Set up the tent on relatively flat ground, adjusting as needed for minor variations.</Text>
                <Text style={styles.steps}>Step 3:</Text>
                <Text style={styles.details}>Insert tent poles securely and stake down the tent moderately.</Text>
                <Text style={styles.steps}>Step 4:</Text>
                <Text style={styles.details}>Install the rainfly over the tent body, ensuring coverage without excessive tension.</Text>
                <Text style={styles.steps}>Step 5:</Text>
                <Text style={styles.details}>Check for any loose guylines and tighten as necessary.</Text>
                <Text style={styles.steps}>Step 6:</Text>
                <Text style={styles.details}>Inspect the tent for minor damages and address them with temporary repairs.</Text>
                <Text style={styles.steps}>Step 7:</Text>
                <Text style={styles.details}>Arrange sleeping gear inside the tent, avoiding direct contact with walls if possible.</Text>
                <Text style={styles.steps}>Step 8:</Text>
                <Text style={styles.details}>Consider using a ground cloth or tarp beneath the tent for added floor protection.</Text>
                <Text style={styles.steps}>Step 9:</Text>
                <Text style={styles.details}>Keep the tent entrance closed when not in use to deter insects.</Text>
                <Text style={styles.steps}>Step 10:</Text>
                <Text style={styles.details}>Monitor weather conditions and be prepared to adjust the tent setup accordingly.</Text>
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

export default TentGuidanceFair;
