import React from "react";
<<<<<<< HEAD
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import StudentInfo from "../components/StudentInfo";
import Projects from "../components/Projects";

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <StudentInfo
                fullname="John Doe"
                position="UI/UX Designer"
                description="We're passionate about creating beautiful desing for startups & leading brands"
                image={require("../assets/icon.png")}
            />

            <View style={styles.projectsSection}>
                <View style={styles.projectsHeader}>
                    <Text style={styles.projectsTitle}>PROJECTS</Text>
                    <TouchableOpacity style={styles.viewAllBtn}>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.projectsRow}>
                    <Projects image={require("../assets/splash-icon.png")} />
                    <Projects image={require("../assets/splash-icon.png")} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    projectsSection: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    projectsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },
    projectsTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    viewAllBtn: {
        backgroundColor: "#F5C518",
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 18,
    },
    viewAllText: {
        fontWeight: "bold",
        fontSize: 13,
        color: "#333",
    },
    projectsRow: {
        flexDirection: "row",
    },
});

export default ProfileScreen;
=======
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileInfo from "../components/ProfileInfo";
import Project from "../components/Project";

const ProfileScreen = () => {
    return(
        <View style={styles.screen}>
            <ProfileInfo
                fullName="John Doe"
                jobPosition="Full-Stack Developer"
                desc="I`m passionate about creating Web and Mobile Applications"
                image={require('../assets/profile.jpg')}
            ></ProfileInfo>

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
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center',
        marginVertical: 15
    },
    screen: {
        backgroundColor: 'white'
    },

    text: {
        fontWeight: 'bold',
        fontSize: 16
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
    }
})


export default ProfileScreen;
>>>>>>> 743543fd6e3f9f324221817bbbc7571a99b695c7
