import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class PostsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.setState({posts: jsonData});
    }

    render() {
        const {posts} = this.state;
        return(
            <View>
                <Text>Posts Screen</Text>
                <FlatList
                    keyExtractor={posts => posts.id}
                    data={posts}
                    renderItem={({item}) => (
                        <View style={styles.container}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.body}>{item.body}</Text>
                        </View>
                    )}
                ></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
        padding: 10
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textTransform: 'capitalize'
    }
});

export default PostsScreen;