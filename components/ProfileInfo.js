import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ProfileInfo = (props) => {
    return(
        <View style={styles.container}>
            <Image source={props.image} style={styles.img}></Image>
            <View style={styles.infoWrapper}>
                <Text style={styles.fullName}>{props.fullName}</Text>
                <Text>{props.jobPosition}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Hire Him</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 280,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    infoWrapper: {
        backgroundColor: 'white',
        width: '80%',
        alignItems: 'center',
        marginLeft: 40,
        marginTop: -30,
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd'
    }
});

export default ProfileInfo;