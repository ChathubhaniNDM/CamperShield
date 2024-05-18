import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TentFair = ({ navigation }) => {

    const TentProcess = () => {
        navigation.navigate('GuidanceFair');
    }

    const TryAgain = () => {
        navigation.navigate('Tent');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.good}>Fair</Text>
            <Image
                style={styles.image}
                source={require('../assets/fair.png')}
            />
            <View style={styles.warnBox}>
                <Text style={styles.warning}>Warning!</Text>
                <Text style={styles.warningDesc}>This location is predicted to have a <Text style={{ color: '#C78F00' }}>"Fair" </Text>
                    safety rating for camping tent setup, with a 50% probability. Please be aware that while the prediction indicates some suitability, caution is advised as predictions are not certain.</Text>
            </View>
            <TouchableOpacity style={styles.another} onPress={TryAgain}>
                <Text style={styles.anotherText}>Try again in another location!</Text>
            </TouchableOpacity>
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
        top: '5%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 64,
        lineHeight: 77,
        textAlign: 'center',
        color: '#FFE712',
    },
    image: {
        position: 'absolute',
        width: 168,
        height: 120,
        left: '30%',
        top: '20%',
    },
    guidance: {
        position: 'absolute',
        width: '70%',
        height: 40,
        left: '15%',
        top: '90%',
        backgroundColor: '#5FFF9F',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
    },
    guidanceText: {
        position: 'absolute',
        left: '15%',
        top: '12%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.89)',
    },
    another: {
        position: 'absolute',
        width: '70%',
        height: 40,
        left: '15%',
        top: '80%',
        backgroundColor: '#EE8282',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
    },
    anotherText: {
        position: 'absolute',
        left: '15%',
        top: '12%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        color: '#FF0606',
    },
    warnBox: {
        position: 'absolute',
        width: '80%',
        height: '30%',
        left: '10%',
        top: '43%',
        backgroundColor: '#FFE7E7',
        borderColor: '#E80D0D',
        borderWidth: 1,
        borderRadius: 15,
        padding: 20,
    },
    warning: {
        textAlign: 'center',
        fontSize: 25,
        color: '#8A0505',
        fontWeight: 'bold',
        bottom: '5%',
    },
    warningDesc: {
        fontSize: 15,
        color: '#8A0505',
        fontWeight: '500'
    },
});

export default TentFair;

