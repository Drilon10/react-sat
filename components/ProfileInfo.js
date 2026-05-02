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
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 12,
        elevation: 1
    },

    btn: {
        backgroundColor: '#ffd700',
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    btnText: {
        fontWeight: 'bold',
        color: 'white'
    },

    fullName: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#333'
    },

    desc: {
        textAlign: 'center'
    }
    
});

export default ProfileInfo;