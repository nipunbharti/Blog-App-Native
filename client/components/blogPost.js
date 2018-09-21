import React from "react";
import { StyleSheet, Text, View } from "react-native";

class BlogPost extends React.Component {
  render() {
    return (
      <View style={styles.blogPostContainer}>
        <Text style={styles.header}>Heading</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Text style={styles.author}>Author</Text>
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
