import navbar from '../components/navbar.js';
console.log(navbar);
import {appendData} from '../scripts/append.js';
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();
let posts_div=document.getElementById("post")

const getData=async()=>{
    try{
        let res=await fetch(`http://localhost:3000/posts`);
        let data=await res.json();
        console.log('data',data);
        appendData(data,posts_div);
    }catch(e){
        console.log('e',e);
    }
   
};
getData();
