import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Post = ({ title, content, created_at, user}) => {

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
          <Text style={styles.user}>{user.name}</Text>
          <Text style={styles.createdAt}>{created_at}</Text>
      </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    borderWidth: 1,
    borderColor: '#fff', 
    borderRadius: 8,
    padding: 12,
    marginVertical: 8, 
    width: '90%', 
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 8,
  },
  user: {
    fontSize: 12,
    color: '#fff',
  },
  createdAt: {
    fontSize: 12,
    color: '#fff', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff', 
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    color: '#fff', 
  },
});

export default Post;