import axios from "axios";

const getData = async(userId)=>{
  const userData=await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const userPosts=await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const user={...userData.data,posts:userPosts.data};
  return user;
}

export default getData;