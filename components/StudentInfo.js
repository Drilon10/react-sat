import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const StudentInfo = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.headerBg}>
                <Image source={props.image} style={styles.avatar} />
            </View>

            <View style={styles.card}>
                <Text style={styles.fullname}>{props.fullname}</Text>
                <Text style={styles.position}>{props.position}</Text>
                <Text style={styles.description}>{props.description}</Text>
                <TouchableOpacity style={styles.hireBtn}>
                    <Text style={styles.hireBtnText}>HIRE HIM</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
    },
    headerBg: {
        width: "100%",
        height: 200,
        backgroundColor: "#4FC3F7",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 10,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    card: {
        backgroundColor: "#fff",
        width: "85%",
        borderRadius: 16,
        padding: 20,
        alignItems: "center",
        marginTop: -30,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    fullname: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 5,
    },
    position: {
        fontSize: 14,
        color: "#888",
        marginTop: 4,
    },
    description: {
        fontSize: 13,
        color: "#555",
        textAlign: "center",
        marginTop: 10,
        lineHeight: 20,
    },
    hireBtn: {
        backgroundColor: "#F5C518",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 16,
    },
    hireBtnText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#333",
    },
});

export default StudentInfo;
