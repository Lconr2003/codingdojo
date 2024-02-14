function Like_Track(targetId){
    let likes = document.querySelector(targetId).innerHTML;
    let Add_Likes = parseInt(likes, 10)
    Add_Likes = Add_Likes + 1;
    document.querySelector(targetId).innerHTML = Add_Likes;
}
// spent wayyy too long trying everything to get this to work
// should have asked for help
// glad it works