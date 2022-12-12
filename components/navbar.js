const navbar=()=>{
    return `
    <div class="nav-wrapper">
   <img class="brand-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"/>
    <input type="text" class="search-box" placeholder="search">
    <div class="nav-items">
        <a href="./index.html"><img src="https://cdn-icons-png.flaticon.com/128/61/61972.png" class="icon" alt=""></a>
        <img src="https://img.icons8.com/ios-glyphs/2x/search--v2.png" class="icon" alt="">
        <img src="https://cdn.iconscout.com/icon/free/png-64/instagram-tv-4627037-3853228.png" class="icon" alt="">
        <img src="https://img.icons8.com/ios-glyphs/2x/like--v2.png" class="icon" alt="">
        <a href="./create.html"><img src="https://img.icons8.com/ios-glyphs/2x/plus.png" class="icon" alt=""></a>
        <div class="icon user-profile"></div>
    </div>
   </div>
  `
}
export default navbar;