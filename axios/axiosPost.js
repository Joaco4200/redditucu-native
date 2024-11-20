import axios from "axios";

const ipAdress = "192.168.1.5";
//ip ucu=10.4.0.160
//ip casa= 192.168.1.5


export async function savePost(postData){
    const response= await axios.post(`http://${ipAdress}:8080/post`,postData)
    return response.data;
}
    
export async function getAllPosts(){
    const response= await axios.get(`http://${ipAdress}:8080/getAllPosts`)
    return response.data;
}

export async function getPostByPostId(postId){
    const response= await axios.get(`http://${ipAdress}:8080/getPostById`, { params: { postId } })
    return response.data;
}