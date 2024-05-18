import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TentGuidance = () => {

    return (
            <View style={styles.container}>
                <Text style={styles.topicText}>Step by Step Construction Guidance</Text>
                <View style={styles.greenBox}>
                    <Text style={styles.steps}>Step 1:</Text>
                    <Text style={styles.details}>Lay a ground tarp or footprint on the chosen site to protect the tent's bottom.</Text>
                    <Text style={styles.steps}>Step 2:</Text>
                    <Text style={styles.details}>Unpack the tent, ensuring all components are present and in good condition.</Text>
                    <Text style={styles.steps}>Step 3:</Text>
                    <Text style={styles.details}>Assemble the tent poles as per the manufacturer's instructions.</Text>
                    <Text style={styles.steps}>Step 4:</Text>
                    <Text style={styles.details}>Attach the assembled tent poles to the tent body, creating the frame.</Text>
                    <Text style={styles.steps}>Step 5:</Text>
                    <Text style={styles.details}>Secure the rain-fly (if applicable) over the tent, aligning it properly and using provided clips or straps.</Text>
                    <Text style={styles.steps}>Step 6:</Text>
                    <Text style={styles.details}>Use tent stakes to secure the corners of the tent and rain-fly. Hammer them into the ground at a slight angle.</Text>
                    <Text style={styles.steps}>Step 7:</Text>
                    <Text style={styles.details}>Adjust the tension by tightening or loosening guy lines and stakes as needed, ensuring the tent is taut but not overly tight.</Text>
                    <Text style={styles.steps}>Step 8:</Text>
                    <Text style={styles.details}>Open the zippers on the tent doors and windows to allow for proper ventilation.</Text>
                    <Text style={styles.steps}>Step 9:</Text>
                    <Text style={styles.details}>Organize your gear inside the tent, making it comfortable for your stay.</Text>
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
        height: '90%',
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

export default TentGuidance;
