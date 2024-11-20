import { View,Text } from "react-native";
import { Slot } from "expo-router";
import Header from "../components/Header";


//ESTRUCTURA EXPO-ROUTER
export default function Layout(){
    return(
        <View>
            <Header/>
            <Slot/>
        </View>
    )
}