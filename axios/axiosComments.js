import axios from "axios";

const ipAdress = "192.168.1.5";
//ip ucu=10.4.0.160
//ip casa= 192.168.1.5

export async function saveComment(commentData){
    const response= await axios.post(`http://${ipAdress}:8080/comment`,commentData)
    return response.data;
}

export async function getCommentByPostId(postId){
    const response= await axios.get(`http://${ipAdress}:8080/getComment`, { params: { postId } })
    return response.data;
}