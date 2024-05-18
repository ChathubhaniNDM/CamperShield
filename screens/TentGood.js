import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TentGood = ({ navigation }) => {

    const TentProcess = () => {
        navigation.navigate('GuidanceGood');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.good}>Good</Text>
            <Image
                style={styles.image}
                source={require('../assets/likeGood.png')}
            />
            <View style={styles.warnBox}>
                <Text style={styles.warning}>Warning!</Text>
                <Text style={styles.warningDesc}>This location is predicted to be suitable for camping tent setup with a <Text style={{color: 'green'}}>"Good" </Text>
                safety rating, with a 70% probability. Please note that while the prediction suggests a moderate suitability, caution is still advised as predictions are not 100% guaranteed.</Text>
            </View>
            <TouchableOpacity style={styles.guidance} onPress={TentProcess}>
                <Text style={styles.guidanceText}>Tent Construction Guidance </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    good: {
        position: 'absolute',
        width: 168,
        height: 77,
        left: '30%',
        top: '10%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 64,
        lineHeight: 77,
        textAlign: 'center',
        color: '#70FE01',
    },
    image: {
        position: 'absolute',
        width: 168,
        height: 120,
        left: '30%',
        top: '25%',
    },
    guidance: {
        position: 'absolute',
        width: '70%',
        height: 40,
        left: '15%',
        top: '83%',
        backgroundColor: '#5FFF9F',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
    },
    guidanceText: {
        position: 'absolute',
        left: '15%',
        top: '15%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.89)',
    },
    warnBox: {
        position: 'absolute',
        width: '80%',
        height: '30%',
        left: '10%',
        top: '48%',
        backgroundColor: '#FFE7E7', 
        borderColor: '#E80D0D',
        borderWidth: 1,
        borderRadius: 15,
        padding: 20,
    },
    warning:{
        textAlign: 'center',
        fontSize: 25,
        color: '#8A0505',
        fontWeight: 'bold',
        bottom: '5%',
    },
    warningDesc: {
        fontSize:15,
        color: '#8A0505',
        fontWeight: '500'
    },
});

export default TentGood;
