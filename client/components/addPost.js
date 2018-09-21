import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

class AddPost extends React.Component {

  constructor(){
    super();
    this.state = {
      heading: "",
      content: "",
      author: "",
    }
  }

  changeTextHandlerHeading = (text) => {
    this.setState({heading: text});
  }

  changeTextHandlerContent = (text) => {
    this.setState({content: text});
  }

  changeTextHandlerAuthor = (text) => {
    this.setState({author: text});
  }

  handleClick = () => {
    console.log(this.state.author);
    console.log(this.state.heading);
    console.log(this.state.content);
    fetch('http://10.0.0.14:1234/addPost', {
      method: 'POST',
      body: JSON.stringify({
        author: this.state.author,
        content: this.state.content,
        header: this.state.heading,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        this.props.navigation.navigate('Home');
    })
    .catch((error) => {
        console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={this.changeTextHandlerHeading}
          placeholder="Heading"
          value={this.state.heading}
          style={styles.textInput}
        />
        <TextInput 
          onChangeText={this.changeTextHandlerContent}
          placeholder="Content"
          value={this.state.content}
          style={styles.textInput}
        />
        <TextInput 
          onChangeText={this.changeTextHandlerAuthor}
          placeholder="Author"
          value={this.state.author}
          style={styles.textInput}
        />
        <Button title="Add post" style={styles.submitButton} onPress={this.handleClick}/>
      </View>
    );
  }
}

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    padding: 30,
    fontSize: 20
  },
  submitButton: {
      position: 'absolute',
      bottom: 0,
      left: 0
  }
})