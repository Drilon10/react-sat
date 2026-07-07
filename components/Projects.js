import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Projects = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image source={props.image} style={styles.projectImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginRight: 12,
    },
    projectImage: {
        width: 150,
        height: 100,
        borderRadius: 10,
    },
});

export default Projects;
