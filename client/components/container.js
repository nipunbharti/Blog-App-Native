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

    render(){

        const { navigate } = this.props.navigationStuff;

        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={
                        ({item, index}) => <BlogPost />
                    }
                />
                <Button title="New post" style={styles.submitButton} onPress={() => navigate('AddPost')}/>
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
    }
  });