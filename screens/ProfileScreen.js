import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileInfo from "../components/ProfileInfo";
import Project from "../components/Project";

const ProfileScreen = () => {
    return(
        <View style={styles.screen}>
            <ProfileInfo></ProfileInfo>

            <View style={styles.heading}>
                <Text style={styles.text}>PROJECTS</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>View All</Text>
                </TouchableOpacity>
            </View>

            <Project 
                firstImg={require('../assets/project1.webp')}
                secondImg={require('../assets/project2.jpg')}
            ></Project>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
})


export default ProfileScreen;