import navbar from '../components/navbar.js';
//console.log(navbar);
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();

let input=document.getElementById("image")
.addEventListener("change",()=>{
  handleImage()
})
let image;
const handleImage=async()=>{
  try{
  let file=document.getElementById("image");
  let form=new FormData();
  form.append('image',file.files[0]);
        let res=await fetch(`https://api.imgbb.com/1/upload?key=b57d27cf06a645155e03d1ac375be1d0`,{
           method:'POST',
           body:form,
        })
        let data=await res.json();
        image=data.data.display_url;
        create_btn.disabled=false;
        console.log(data);
      }catch(e){
        console.log(e);
      }
}
let create_btn=document.getElementById("submit_btn")
.addEventListener("click",()=>{
  addPost()
})
create_btn.disabled=true;

const addPost=async()=>{
  try{
  let id=document.getElementById("id").value;
  let caption=document.getElementById("caption").value;
  let insta_obj={
    id,
    caption,
    image,
  }
  console.log(insta_obj);
  let res=await fetch(`http://localhost:3000/posts`,{
    method:'POST',
    body:JSON.stringify(insta_obj),
    headers:{
      'Content-Type':'application/json',
    },
  })
  let data=await res.json();
  console.log("postdata",data);
  }catch(e){
    console.log(e);
  }
}
let update_btn=document.getElementById("update_btn")
.addEventListener("click",()=>{
  updatePost()
})
const updatePost=async()=>{
  try{
  let id=document.getElementById('update_id').value;
  let caption=document.getElementById('new_caption').value;
  let insta_obj={
    caption,

  }
  let res=await fetch(`http://localhost:3000/posts/${id}`,{
    method:"PATCH",
    body:JSON.stringify(insta_obj),
    headers:{
      'Content-Type':'application/json',
    },
  })
  let data=await res.json();
  console.log(data);
}catch(e){
  console.log(e);
}
}

let delete_btn=document.getElementById("delete_btn")
.addEventListener("click",()=>{
  deletePost()
})
const deletePost=async()=>{
  try{
    let id=document.getElementById("delete_id").value;
    let res=await fetch(`http://localhost:3000/posts/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
      }

    })
    let data=await res.json();
    console.log(data);
  }catch(e){
    console.log(e);
  }
}