import React from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";

const students = [
    {name: 'Bledar', lastname: "Abdili", age: '15'},
    {name: 'Naron', lastname: "Emurllai", age: '15'},
    {name: 'Viola', lastname: "Ismaili", age: '14'},
    {name: 'Viola1', lastname: "Ismaili1", age: '141'}
]

const ListScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>List of Students</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                keyExtractor={student => student.name}
                data={students}
                renderItem={({item}) => {
                    return <Text>{item.name} {item.lastname} - {item.age}</Text>
                }}

            />

            <Button
                title="Go Back"
                onPress={() => props.navigation.goBack()}
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: "red"
    }
});

export default ListScreen;