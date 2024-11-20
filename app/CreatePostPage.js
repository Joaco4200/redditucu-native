import React, { useState } from "react";
import { View,TextInput, StyleSheet} from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { savePost } from "../axios/axiosPost";
import { ScrollView } from "react-native";
import { router } from "expo-router";

const CreatePostPage= ()=>{
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const handleTitleChange = (text) => setPostTitle(text);
    const handleContentChange = (text) => setPostContent(text);

    const user = {
      auth0id: "auth0idhardcodeaada",
    };

    const handlePostButtonClick = async()=> {
      if(!user){
          setWarning("You must be logged")
          return;
      }

      if(postContent !== ""){
      const postData={
          user: user,
          title: postTitle,
          content: postContent,
      }
      
      await savePost(postData);
      setPostTitle("");
      setPostContent("");
      setTimeout(() => router.push('/'), 500);
      
      }
   }

    return(
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>

            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#fff" }}>Create Post</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Title*"
                placeholderTextColor="#bbb"
                value={postTitle}
                onChangeText={handleTitleChange}
            />
            
            <TextInput
                style={[styles.input, styles.textarea]}
                placeholder="Body*"
                placeholderTextColor="#bbb"
                value={postContent}
                onChangeText={handleContentChange}
                multiline
            />

            <TouchableOpacity style={styles.postbutton} onPress={handlePostButtonClick}>
                <Text style={styles.buttontext}>Post</Text>
            </TouchableOpacity>

            <Link href="/" style={{ marginTop: 20, textAlign: 'center', color:'white' }}>
                Go to Home
            </Link>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow:1,
      padding: 20,
      backgroundColor: "black",
      marginTop: 30
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "#fff",
    },
    input: {
      height: 40,
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 10,
      marginBottom: 15,
      backgroundColor: "#333",
      color: "#fff",
    },
    textarea: {
      height: 100,
      textAlignVertical: "top", 
    },
    postbutton: {
      height: 35,
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 25, 
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
  },
  buttontext: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
  },
  link: {
      marginTop: 20,
      textAlign: "center",
      color: "#fff",
  },
  });

export default CreatePostPage;