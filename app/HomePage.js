import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { View } from 'react-native';
import Post from '../components/Post';
import { getAllPosts } from '../axios/axiosPost';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

const HomePage =()=>{
    const [posts,setPosts] = useState([])
    const navigation = useNavigation();
    
    const handleClick =(postId)=>{
        navigation.navigate("SinglePostPage", { postId });
    }    

    useEffect(()=>{
        const getPostData = async()=> {
            const postData= await getAllPosts();
            setPosts(postData); 
        }
        getPostData();
    }, []);

    return(
        <ScrollView>
             <View>
                {posts.map(post => {
                    const { title, content, created_at, postId} = post;

                    return (
                        <View style={styles.postcontainer}>
                            <Post title={title} content={content} created_at={created_at} postId={postId} user={{ name: "Felipe Gimenez" }} />
                            
                            <TouchableOpacity style={styles.button} onPress={() => handleClick(postId)}>
                                <Text style={styles.buttonText}>Add comment...</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    postcontainer: {
        padding: 10,
    },

    button: {
        marginRight:150,
        // borderRadius: 8,
        // borderWidth: 1,
        // borderColor: '#fff', 
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:9
    },
});

export default HomePage;