import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Text,View,StyleSheet,TextInput,TouchableOpacity,ScrollView } from "react-native";
import Post from "../components/Post";
import { getPostByPostId } from "../axios/axiosPost";
import { getCommentByPostId } from "../axios/axiosComments";
import { saveComment } from "../axios/axiosComments";
import Comment from "../components/Comment";


const SinglePostPage=()=>{
    const { postId } = useLocalSearchParams();
    const [post,setPost]= useState([]);
    const [comments,setComments]= useState([]);
    const [content,setContent]= useState("");

    const user = {
        auth0id: "auth0idhardcodeaada",
      };

    const handleContentChange =(text)=> setContent(text);

    useEffect(()=>{
        const getPostAndComments= async()=>{
            const postData= await getPostByPostId(postId);
            setPost(postData);

            const commentData= await getCommentByPostId(postId);
            setComments(commentData);
        }    
        if(postId){
            getPostAndComments();
        }
    }, [postId])

    const handleCreateCommentButtonClick= async()=>{
        const commentData={
            user:user,
            post: {
                postId: postId
            },
            content:content
        }
        await saveComment(commentData);
        // onNewComment(newComment);
        setContent("");
    }

    return(
        <View>
            {post ? (
                <Post
                    title={post.title}
                    content={post.content}
                    created_at={post.created_at}
                    postId={postId}
                    user={{ name: "Felipe Gimenez" }}
                />
            ) : (
                <Text>Loading post...</Text>
            )}
            <TextInput style={styles.textInput}
                placeholder="Add comment..."
                value={content}
                onChangeText={handleContentChange}
            />
            <TouchableOpacity style={styles.button} onPress={handleCreateCommentButtonClick}>
                <Text style={styles.buttonText}>Comment</Text>
            </TouchableOpacity>
            <ScrollView style={{marginTop:20}}>
                {comments.length === 0 ? (
                <Text style={{color:'#fff'}}>This post has no comments</Text>  
                ) : (
                comments.map((comment) => {
                    const { postId, content, created_at } = comment;
                    return (
                        <View style={styles.commentwrapper}>
                            <Comment postId={postId} user={{ name: "Felipe Gimenez" }} content={content} created_at={created_at} />
                        </View>
                    );
                })
             )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        color:'#fff'
      },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderColor:'#fff',
        borderWidth: 1,
        alignItems: 'center',
      },
    buttonText: {
        color: '#fff',
    },
    commentwrapper: {
        paddingVertical: 4,
        paddingHorizontal: 10,
      },
});

export default SinglePostPage;