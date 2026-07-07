import React from "react";
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
