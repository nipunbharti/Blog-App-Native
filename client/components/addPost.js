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

  changeTextHandler = (text, type) => {
    if(type == 'H'){
      this.setState({heading: text});
    }
    else if(type == 'C'){
      this.setState({content: text});
    }
    else{
      this.setState({author: text});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={() => this.changeTextHandler('H')}
          placeholder="Heading"
          value={this.state.heading}
          style={styles.textInput}
        />
        <TextInput 
          onChangeText={() => this.changeTextHandler('C')}
          placeholder="Content"
          value={this.state.heading}
          style={styles.textInput}
        />
        <TextInput 
          onChangeText={() => this.changeTextHandler('A')}
          placeholder="Author"
          value={this.state.heading}
          style={styles.textInput}
        />
        <Button title="Add post" style={styles.submitButton} />
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