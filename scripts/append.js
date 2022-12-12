const appendData=(data,parent_div)=>{
    
    parent_div.innerHTML=null;

    data.forEach(({caption,image})=>{

       let div=document.createElement("div");
       let caption_p=document.createElement("p");
       caption_p.innerText=caption;

       let img=document.createElement("img");
       img.src=image;

       div.append(img,caption_p);
       parent_div.append(div)

    })

}

export {appendData};