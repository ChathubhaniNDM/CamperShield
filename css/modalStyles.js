import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
    modal: {
        position: 'absolute',
        width: 250,
        height: 932,
        left: -9,
        top: 35,
        backgroundColor: '#D8F6E4',
        border: '1px solid #000000',
        borderRadius: 20,
        zIndex: 1,
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2,
    },
    profileContainer: {
        position: 'relative',
        width: '100%',
        height: '20%',
        alignItems: 'center',
        backgroundColor: '#5FFF9F',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        marginTop: 25,
        fontSize: 18,
        fontWeight: 'bold',
    },
    home: {
        top: 10,
        width: 120,
        left: '5%',
        justifyContent: 'center',
    },
    homeText: {
        fontWeight: 'bold',
        fontSize: 20,
        left: '40%',
        textAlign: 'left'
    },
    homes: {
        position: 'absolute',
        left: 10,
        top: 0,
        width: 24,
        height: 24,
    },
    profile: {
        top: 25,
        width: 120,
        left: '5%',
        justifyContent: 'center',
    },
    setting: {
        top: 45,
        width: 120,
        left: '5%',
        justifyContent: 'center',
    },
});
