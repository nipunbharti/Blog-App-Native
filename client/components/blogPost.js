import React from "react";
import { StyleSheet, Text, View } from "react-native";

class BlogPost extends React.Component {
  render() {
    return (
      <View style={styles.blogPostContainer}>
        <Text style={styles.header}>{this.props.heading}</Text>
        <Text>
          {this.props.content}
        </Text>
        <Text style={styles.author}>{this.props.author}</Text>
        <View style={styles.hr} />
      </View>
    );
  }
}

export default BlogPost;

const styles = StyleSheet.create({
  blogPostContainer: {
    flex: 1,
  },
  header: {
      fontSize: 25,
      paddingBottom: 7,
  },
  author: {
      fontSize: 18,
      paddingTop: 5
  },
  hr: {
      height: 1,
      backgroundColor: 'gray',
      marginTop: 5,
  }
});
