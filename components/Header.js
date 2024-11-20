import React from "react";
import { Link } from "expo-router";
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import { Image } from "react-native";

const Header =() =>{
   
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>UCUDDIT</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Link href="/CreatePostPage" style={styles.button}>
                    +Create
                </Link>
                <Link href="/ProfilePage">
                    <Image
                        source={require('../assets/profile.png')} 
                        style={styles.icon}
                    />
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'grey', 
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: 8, 
      borderBottomWidth: 1, 
      marginTop: 24,
      width: '100%', 
      
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
    buttonContainer: {
        flexDirection: 'row', // Botón e icono en fila
        alignItems: 'center', // Centra verticalmente
      },
    button: {
        color: "#fff",
        padding: 10,
        borderRadius: 5,
        fontSize: 20
      },
    icon: {
        width: 29,
        height: 29, // Ajusta según el tamaño de tu icono
      },
  });

export default Header;