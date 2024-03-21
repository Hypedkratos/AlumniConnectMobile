import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Feather';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Topbar = () => {
    const navigation = useNavigation();

    const navigateToSettingscreen = () =>{
        navigation.navigate('Settingscreen')
    };

    const openCamera = () => {
        const options = { /* You can specify options here, like mediaType, quality, etc. */ };
        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.assets[0].uri };
                // You can perform actions with the image URI here
            }
        });
    };

    const openGallery = () => {
        const options = { /* You can specify options here */ };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.assets[0].uri };
                // You can perform actions with the image URI here
            }
        });
    };

    const showImagePickerOptions = () => {
        Alert.alert(
            "Select Photo",
            "Choose an option",
            [
                { text: "Camera", onPress: openCamera },
                { text: "Gallery", onPress: openGallery },
                { text: "Cancel", style: "cancel" }
            ]
        );
    };

    return (
        <View style={styles.topbar}>
            <Text style={{ fontSize: 26, fontWeight: '500', marginLeft: 18, color: '#FFFFFF', paddingTop: 8 }}>ALUMNI CONNECT</Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={navigateToSettingscreen}>
                    <Ionicons name='menu' color={'#fff'} size={30}/>
                </TouchableOpacity>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search"
                    placeholderTextColor="#FFFFFF"
                />
                <View style={styles.cameracontainer}>
                <TouchableOpacity onPress={showImagePickerOptions}>
                    <Ionicons name="camera" size={30} color="#FFFFFF" />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Topbar

const styles = StyleSheet.create({
    topbar: {
        backgroundColor: '#0F2167',
        width: '100%',
        height: 100
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    searchBar: {
        backgroundColor: 'rgba(255,255,255,0.1)', // Semi-transparent
        marginLeft: 10,
        paddingHorizontal: 10,
        height: 35,
        width: 270,
        borderRadius: 30,
        color: '#FFFFFF',
        
    },
    cameracontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 10,
        marginLeft: 10
    },
}) 