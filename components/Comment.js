import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Comment = ({ postId, content, user, created_at }) => {
    return (
        <View style={styles.commentContainer}>
            
            <View style={styles.userInfo}>
                <Text style={styles.username}>{user.name}</Text>
                <Text style={styles.createdAt}>{created_at}</Text>
            </View>
        
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    commentContainer: {
        borderWidth: 1,
        borderColor: "#6c757d", 
        borderRadius: 10,
        padding: 10,
        width: "90%",
        marginBottom: 10, 
        alignSelf: "center", 
    },
    userinfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    username: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
    },
    createdAt: {
        fontSize: 12,
        color: "#fff",
    },
    content: {
        fontSize: 14,
        color: "#6c757d",
        lineHeight: 20, 
    },
});

export default Comment;