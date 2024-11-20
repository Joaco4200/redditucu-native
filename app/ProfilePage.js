import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfilePage =()=>{

    const user={
        name: "Felipe Gimenez",
        email: "felipe23@gmail.com"
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image 
                    source={require('../assets/profile.png')} 
                    style={styles.profileImage} 
                />
                <Text style={styles.username}>Username: {user.name}        </Text>
                <Text style={styles.email}>Email: {user.email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:100,
        marginTop:150
    },
    header: {
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#007bff",
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 75,
        marginBottom: 20,
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#fff",
    },
    email: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#fff",
    },
});

export default ProfilePage;