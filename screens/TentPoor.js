import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TentGood = ({ navigation }) => {

    const TentProcess = () => {
        navigation.navigate('Tent');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.poor}>Poor</Text>
            <Image
                style={styles.image}
                source={require('../assets/poor.png')}
            />
            <View style={styles.warnBox}>
                <Text style={styles.warning}>Warning!</Text>
                <Text style={styles.warningDesc}>This location is predicted to have a  <Text style={{ color: 'red' }}>"Poor" </Text>
                    safety rating for camping tent setup, with only a 20% probability. Due to the low suitability indicated by the prediction, camping is not recommended at this location.</Text>
            </View>
            <TouchableOpacity style={styles.guidance} onPress={TentProcess}>
                <Text style={styles.guidanceText}>Try again in another location!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    poor: {
        position: 'absolute',
        width: 168,
        height: 77,
        left: '30%',
        top: '15%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 64,
        lineHeight: 77,
        textAlign: 'center',
        color: '#FB0808',
    },
    image: {
        position: 'absolute',
        width: 168,
        height: 120,
        left: '30%',
        top: '30%',
    },
    guidance: {
        position: 'absolute',
        width: '70%',
        height: 40,
        left: '15%',
        top: '85%',
        backgroundColor: '#EE8282',
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
        color: '#FF0606',
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
