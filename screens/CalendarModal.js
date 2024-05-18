import React from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Import Calendar component
import { TouchableHighlight } from 'react-native-gesture-handler';

const CalendarModal = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                    <Calendar />
                    <TouchableHighlight onPress={onClose} style={{ marginTop: 10, alignSelf: 'flex-end', left: '25%' }}>
                        <Text>Close</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
};

export default CalendarModal;
