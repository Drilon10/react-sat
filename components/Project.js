import React from "react";
import { View, Image, StyleSheet } from 'react-native';

const Project = (props) => {
    return(
        <View style={styles.container}>
            <Image source={props.firstImg} style={styles.img}></Image>
            <Image source={props.secondImg} style={styles.img}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },

    img: {
        width: 150,
        height: 150,
        borderRadius: 10
    }
});

export default Project;