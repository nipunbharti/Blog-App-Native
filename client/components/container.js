import React from 'react';
import { StyleSheet, FlatList, View, Button } from 'react-native';
import BlogPost from './blogPost';

class Container extends React.Component { 

    constructor(){
        super();
        this.state = {
            data: [0, 0, 0, 0, 0]
        }
    }

    componentDidMount(){
        fetch('http://10.0.0.14:1234/viewPosts')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                });
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    refreshPosts = () => {
        fetch('http://10.0.0.14:1234/viewPosts')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson
                });
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){

        const { navigate } = this.props.navigationStuff;
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={
                        ({item, index}) => <BlogPost author={item.author} heading={item.header} content={item.content} />
                    }
                />
                <View style={styles.buttons}>
                    <Button title="New post" style={styles.submitButton} onPress={() => navigate('AddPost')}/>
                    <Button title="Refresh" style={styles.submitButton} onPress={this.refreshPosts}/>
                </View>
            </View>
        );
    }
}

export default Container;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    submitButton: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1
    }
  });