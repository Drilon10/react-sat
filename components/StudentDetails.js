import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';

const StudentDetails = (props) => {
    console.log(props)
    return(
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.imgWrapper}>
                    <Image source={props.image} style={styles.img}></Image>
                </View>

                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.desc}>{props.description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },

    cardWrapper: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 15
    },
    
    img: {
        widthass: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    infoWrapper: {
        marginLeft: 20,
        marginTop: 20
    },

    name: {
        fontWeight: 'bold',
        fontSize: 20
    }
})


export default StudentDetails;