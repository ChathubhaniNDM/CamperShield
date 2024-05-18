import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TentGood = ({ navigation }) => {

    const TentProcess = () => {
        navigation.navigate('GuidanceExcel');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.excellent}>Excellent</Text>
            <Image
                style={styles.image}
                source={require('../assets/excellent.png')}
            />
            <View style={styles.warnBox}>
                <Text style={styles.warning}>Warning!</Text>
                <Text style={styles.warningDesc}>This location is predicted to be highly suitable for camping tent setup with an <Text style={{ color: 'green' }}>"Excellent" </Text>
                    safety rating, with an 80% probability. However, please note that predictions are not 100% guaranteed, and caution is advised.</Text>
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
    excellent: {
        position: 'absolute',
        width: 'auto',
        height: 77,
        left: '25%',
        top: '10%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 50,
        lineHeight: 77,
        textAlign: 'center',
        color: '#5FFF9F',
    },
    image: {
        position: 'absolute',
        width: 168,
        height: 150,
        left: '35%',
        top: '20%',
    },
    guidance: {
        position: 'absolute',
        width: '70%',
        height: 40,
        left: '15%',
        top: '85%',
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

export default TentGood;
