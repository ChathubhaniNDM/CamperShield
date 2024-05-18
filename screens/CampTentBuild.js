import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Base_url } from '../common/baseUrl';

const CampTentBuild = ({navigation}) => {
    const [soil, setSoil] = useState('');
    const [land, setLand] = useState('');
    const [insect, setInsect] = useState('');
    const [tree, setTree] = useState('');
    const [animal, setAnimal] = useState('');
    const [terrain, setTerrain] = useState('');
    const [weather, setWeather] = useState('');
    const [wind, setWind] = useState('');
    const [precipitation, setPrecipitation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const TentProcess = () => {
        if (
            soil === '' ||
            land === '' ||
            insect === '' ||
            tree === '' ||
            animal === '' ||
            terrain === '' ||
            weather === '' ||
            wind === '' ||
            precipitation === ''
        ) {
            Alert.alert('Error', 'Please select values for all dropdowns.');
        } else {
            setIsLoading(true);
            
            const requestBody = {
                Soil_condition: soil,
                Features_of_the_land: land,
                Insect_activity: insect,
                surrounding_trees: tree,
                Animal_habitats: animal,
                surrounding_terrain: terrain,
                Weather_Condition: weather,
                Wind_Speed: wind,
                Precipitation: precipitation
            };

            // Make API request
            fetch(Base_url+'/tentSafety', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
                .then(response => {
                    // Handle response
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setIsLoading(false);
                    Alert.alert('Safety Rating:',
                    data.Safety_Rating);
                    if(data.Safety_Rating === 'Good'){
                        navigation.navigate('Good');
                    }else if(data.Safety_Rating === 'Fair'){
                        navigation.navigate('Fair');
                    } else if (data.Safety_Rating === 'Poor') {
                        navigation.navigate('Poor');
                    } else if (data.Safety_Rating === 'Excellent') {
                        navigation.navigate('Excellent');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    Alert.alert('Error', 'Failed to process. Please try again later.');
                    setIsLoading(false);
                });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
            <Image
                style={styles.homePic}
                source={require('../assets/tentHome.png')}
            />
            <View style={styles.rectangle81}></View>
            <Text style={styles.campingTentBuild}>Camping Tent Build</Text>
            <View style={styles.rectangle49}></View>

            <View style={styles.greenBox}>
                <Text style={styles.selectLocationText}>Select Location for Camping Tent Build</Text>
                    <Text style={styles.question}>Soil Condition</Text>
                <Picker
                    selectedValue={soil}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setSoil(itemValue)
                    }>
                    <Picker.Item label="Select One" value="" />
                        <Picker.Item label="Well Drained" value="1" />
                        <Picker.Item label="Firm and Compact" value="2" />
                        <Picker.Item label="Muddy" value="3" />
                        <Picker.Item label="Sandy" value="4" />
                </Picker>
                    <Text style={styles.question}>Topographic features of the land</Text>
                <Picker
                    selectedValue={land}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setLand(itemValue)
                    }>
                    <Picker.Item label="Select One" value="" />
                        <Picker.Item label="Not eroded" value="1" />
                        <Picker.Item label="Flat and Level" value="2" />
                        <Picker.Item label=" Low Lying Area" value="3" />
                        <Picker.Item label=" Gentle Slope" value="4" />
                </Picker>
                    <Text style={styles.question}>Insect activity</Text>
                <Picker
                    selectedValue={insect}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setInsect(itemValue)
                    }>
                    <Picker.Item label="Select One" value="" />
                        <Picker.Item label="High" value="1" />
                        <Picker.Item label="Moderate" value="2" />
                        <Picker.Item label="Minimal" value="3" />
                        <Picker.Item label="Low" value="4" />
                </Picker>
                    <Text style={styles.question}>surrounding trees</Text>
                <Picker
                    selectedValue={tree}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setTree(itemValue)
                    }>
                    <Picker.Item label="Select One" value="" />
                    <Picker.Item label="Nearby" value="1" />
                    <Picker.Item label="Far away" value="2" />
                    <Picker.Item label="Short distance away" value="3" />
                    <Picker.Item label="very close" value="4" />
                </Picker>
                    <Text style={styles.question}>Animal habitats</Text>
                <Picker
                    selectedValue={animal}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setAnimal(itemValue)
                    }>
                    <Picker.Item label="Select One" value="" />
                        <Picker.Item label="yes" value="1" />
                        <Picker.Item label="Moderate" value="2" />
                        <Picker.Item label="Minimal" value="3" />
                        <Picker.Item label="no" value="4" />
                </Picker>
                    <Text style={styles.question}>surrounding terrain</Text>
                <Picker
                    selectedValue={terrain}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setTerrain(itemValue)
                    }>
                    <Picker.Item label="Select One" value="" />
                        <Picker.Item label="Mountain Nearby" value="1" />
                        <Picker.Item label="Rolling Hills" value="2" />
                        <Picker.Item label="Level Ground" value="3" />
                        <Picker.Item label="Arid Rocky Terrain" value="4" />
                </Picker>
                    <Text style={styles.question}>Weather Condition</Text>
                <Picker
                    selectedValue={weather}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setWeather(itemValue)
                    }>
                    <Picker.Item label="Select One" value="" />
                        <Picker.Item label="Cloudy" value="1" />
                        <Picker.Item label="Sunny" value="2" />
                        <Picker.Item label="Heavy Rain" value="3" />
                        <Picker.Item label="Fog" value="4" />
                </Picker>
                    <Text style={styles.question}>Wind Speed</Text>
                <Picker
                    selectedValue={wind}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setWind(itemValue)
                    }>
                    <Picker.Item label="Select One" value="" />
                        <Picker.Item label="High" value="1" />
                        <Picker.Item label="Calm" value="2" />
                        <Picker.Item label="Light" value="3" />
                        <Picker.Item label="Breezy" value="4" />
                </Picker>
                    <Text style={styles.question}>Precipitation</Text>
                <Picker
                    selectedValue={precipitation}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setPrecipitation(itemValue)
                    }>
                    <Picker.Item label="Select One" value="" />
                        <Picker.Item label="Heavy" value="1" />
                        <Picker.Item label="Light" value="2" />
                        <Picker.Item label="None" value="3" />
                        <Picker.Item label="Moderate to Heavy" value="4" />
                </Picker>
            </View>
                <TouchableOpacity style={styles.rectangle84} onPress={TentProcess}>
                    {isLoading && <ActivityIndicator size="large" color="#000" />}
            <Text style={styles.processText}>Process</Text>
                </TouchableOpacity>
                <View style={styles.rectangle93}></View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        position: 'relative',
        width: 430,
        height: 1350,
        backgroundColor: '#FFFFFF',
    },
    campingTentBuild: {
        position: 'absolute',
        width: 191,
        height: 24,
        left: '2.5%',
        top: '16%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: '#000000',
    },
    rectangle81: {
        position: 'absolute',
        width: 430,
        height: 165,
        left: 0,
        top: 0,
    },
    rectangle49: {
        position: 'absolute',
        width: 23,
        height: 23,
        left: 108,
        top: 887,
        backgroundColor: 'url(48)',
    },
    greenBox: {
        position: 'absolute',
        width: '85%',
        height: 'auto',
        left: '3%',
        top: '20%',
        backgroundColor: '#5FFF9F',
        borderRadius: 10,
        padding: 20,
    },
    selectLocationText: {
        marginBottom: 10,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#653030',
    },
    dropdown: {
        height: '50%',
        width: '100%', 
        marginBottom: 10,
        backgroundColor: '#fafafa',
    },
    rectangle84: {
        position: 'absolute',
        width: 131,
        height: 37,
        left: '30%',
        top: 1270,
        backgroundColor: '#5FFF9F',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
    },
    processText: {
        position: 'absolute',
        width: 80,
        height: 24,
        left: '20%',
        top: '12%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.89)',
    },
    rectangle93: {
        position: 'absolute',
        width: 10,
        height: 10,
        left: 368,
        top: 285,
        backgroundColor: 'url(Inputs (22))',
    },

    homePic: {
        position: 'absolute',
        width: '100%',
        height: '15%',
        left: 0,
        top: '0%',
    },
    question: {
        fontSize: 15,
        marginBottom: 10,
    },
    dropdown: {
        height: 50,
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#fafafa',
    },
});

export default CampTentBuild;
