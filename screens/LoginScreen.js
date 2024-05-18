import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ToastAndroid, Image, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import { auth } from './firebase';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);

    useEffect(() => {
        const tryAutoLogin = async () => {
            try {
                const storedEmail = await SecureStore.getItemAsync('email');
                const storedPassword = await SecureStore.getItemAsync('password');

                if (storedEmail && storedPassword) {
                    setEmail(storedEmail);
                    setPassword(storedPassword);
                    handleLogin();
                }
            } catch (error) {
                console.error('Error reading stored credentials:', error);
            }
        };

        tryAutoLogin();
    }, []);

    const handleLogin = () => {
        if (email.length === 0 || password.length === 0) {
            console.log('Please enter Email and Password');
            const value = "Please enter Email and Password";
            ToastAndroid.showWithGravityAndOffset(
                value,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        } else {
            setLoading(true);
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    console.log('Login Successful!');
                    const value = "Login Successful!";
                    ToastAndroid.showWithGravityAndOffset(
                        value,
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                    saveCredentials(email, password);

                    navigation.navigate('Homes');
                })
                .catch(error => {
                    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                        const value = "Incorrect Email or Password";
                        ToastAndroid.showWithGravityAndOffset(
                            value,
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM,
                            25,
                            50
                        );
                    }
                    if (error.code === 'auth/too-many-requests') {
                        const value = "Login disabled due to many attempts. Reset password or retry later.";
                        ToastAndroid.showWithGravityAndOffset(
                            value,
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM,
                            50,
                            50
                        );
                    }
                })
                .finally(() => {
                    setLoading(false); // Finish loading, hide progress circle
                });
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRememberPassword = () => {
        setRememberPassword(!rememberPassword);
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    const saveCredentials = async (email, password) => {
        try {
            await SecureStore.setItemAsync('email', email);
            await SecureStore.setItemAsync('password', password);
        } catch (error) {
            console.error('Error saving credentials:', error);
        }
    };

    const handleForgotPassword = () => {
        if (email.length === 0) {
            console.log('Please enter your email');
            const value = 'Please enter your email';
            ToastAndroid.showWithGravityAndOffset(
                value,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    console.log('Password reset email sent successfully!');
                    const value = 'Password reset email sent successfully. Check your email for instructions.';
                    ToastAndroid.showWithGravityAndOffset(
                        value,
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                })
                .catch(error => {
                    console.error(error);
                    console.log('Failed to send password reset email.');
                    const value = 'Failed to send password reset email. Please try again later.';
                    ToastAndroid.showWithGravityAndOffset(
                        value,
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                });
        }
    }

    return (
        <View contentContainerStyle={styles.container}>
            <Text style={styles.wildlifeText}>CamperShield</Text>
            <View style={styles.frame1}>
                <View style={styles.fluentBatteryIcon} />
                <Text style={styles.loginTitle}>Login</Text>

            <View style={styles.frame16}>
                <TouchableOpacity style={styles.facebookIcon}  />
                <TouchableOpacity style={styles.instagramIcon} />
                <TouchableOpacity style={styles.pinterestIcon} />
                <TouchableOpacity style={styles.linkedinIcon} />
            </View>
            <View style={styles.form}>
                        <Text style={styles.loginLabel}>Login</Text>
                    <TouchableNativeFeedback onPress={handleRegister} underlayColor="transparent">
                        <Text style={styles.RegisterLabel}>Register</Text>
                    </TouchableNativeFeedback>

                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                    <View style={styles.passwordInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
                            {showPassword ? (
                                <Text style={styles.eyeIconText}>👁️</Text>
                                
                            ) : (
                                    <Image source={require('../assets/hide.png')} />
                            )}
                        </TouchableOpacity>
                    </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                    <Text style={styles.termAndPrivacyText}>
                        By signing in you are agreeing our{' '}
                        <TouchableOpacity onPress={() => navigation.navigate('TermScreen')}>
                            <Text style={styles.linkToTermScreen}>Term and privacy policy</Text>
                        </TouchableOpacity>
                    </Text>
            </View>
                <View style={styles.group18}>
                    <TouchableOpacity
                        style={styles.rememberPasswordCheckbox}
                        onPress={toggleRememberPassword}
                    >
                        {rememberPassword ? (
                            <Text style={styles.checkboxChecked}>✓</Text>
                        ) : (
                            <Text style={styles.checkboxUnchecked}>◻</Text>
                        )}
                    </TouchableOpacity>
                    <Text style={styles.rememberPasswordText}>Remember password</Text>
                </View>
            <TouchableNativeFeedback onPress={handleForgotPassword} style={styles.forgetPassword}>
                <Text style={styles.forgetPasswordText}>Forget password</Text>
            </TouchableNativeFeedback>
                {loading && (
                    <View style={styles.progressContainer}>
                        <ActivityIndicator size="large" color="#00D972" />
                        <Text style={styles.progressText}>Logging in...</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 430,
        height: 932,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    wildlifeText:{
        top: '100%',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    frame1: {
        width: '90%',
        height: '2000%',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 25,
        shadowColor: 'rgba(4, 2, 104, 0.4)',
        shadowOffset: { width: 20, height: 20 },
        shadowRadius: 30,
        shadowOpacity: 0.5,
        top: 100,
        left:'5%',
        position: 'absolute',
    },
    fluentBatteryIcon: {
        width: 33,
        height: 28,
        position: 'absolute',
        left: 320,
        top: 21,
    },
    form: {
        left: '-2.5%'
    },
    loginTitle: {
        width: 284,
        height: 50,
        position: 'absolute',
        left: '10%',
        top: 10,
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 34,
        textAlign: 'center',
        color: '#000000',
    },
    frame16: {
        width: 318,
        height: 45,
        position: 'absolute',
        left: 50,
        top: 519,
        borderRadius: 5,
    },
    facebookIcon: {
        width: 39,
        height: 39,
    },
    instagramIcon: {
        width: 39,
        height: 39,
    },
    pinterestIcon: {
        width: 39,
        height: 39,
    },
    linkedinIcon: {
        width: 39,
        height: 39,
    },
    loginLabel: {
        width: 58,
        height: 23,
        position: 'absolute',
        left: 90,
        top: 170,
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24,
        color: 'blue',
    },
    RegisterLabel: {
        width: 100,
        height: 23,
        position: 'absolute',
        left: 220,
        top: 170,
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24,
        color: 'gray',
    },
    input: {
        top: 250,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        width:300,
        left:35,
    },
    loginButton: {
        top: 300,
        width: 300,
        left: 35,
        height: 45,
        backgroundColor: '#5FFF9F',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#000000',
        fontSize: 20,
        lineHeight: 24,
    },
    termAndPrivacyText: {
        width: 296,
        height: 82,
        position: 'absolute',
        left: 40,
        top: 70,
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: '#6B5E5E',
    },
    linkToTermScreen:{
        left: 5,
        top: 5,
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24,
        color: 'blue', 
    },
    group18: {
        width: 206,
        height: 22,
        position: 'absolute',
        left: 35,
        top: 360,
    },
    rememberPasswordCheckbox: {
        width: 20,
        height: 20,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#D5C5C5',
        top: 15,
        left: -10,
    },
    rememberPasswordText: {
        width: 176,
        height: 18,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        color: '#6B5E5E',
        left: 20,
    },
    forgetPassword: {
        width: 143,
        height: 18,
        position: 'absolute',
        left: 130,
        top: 333,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        color: '#1C4EFF',
    },
    forgetPasswordText: {
        width: 143,
        height: 18,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        color: '#1C4EFF',
        left: 210,
        top: 380,
        position: 'absolute',
    },
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 30,
        top: 255
    },
    eyeIconText: {
        fontSize: 20,
    },
    checkboxChecked: {
        fontSize: 17,
        bottom: 3,
        left: 2
    },
    checkboxUnchecked: {
        fontSize: 40,
    },
    progressContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 24,
    },
    progressText: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFF',
    },
});
