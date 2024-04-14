let index = 0;
carousel(index);


document.querySelector(".fa-play").addEventListener("click", function startReview(){
    let reviews = document.getElementsByClassName("review__items");
    console.log(reviews)
    
    const s = setInterval(() => {

        if(index === reviews.length - 1) {
            index = 0
        } else {
            index++
        }
        carousel(index)
    }, 3000)

document.querySelector(".fa-stop").addEventListener("click", function stopRewiew() {
    clearInterval(s)
})
})
document.querySelector(".fa-arrow-left").addEventListener("click", function prevReview(){
    index = index - 1;
    carousel(index)
})
document.querySelector(".fa-arrow-right").addEventListener("click", function nextReview(){
    index = index + 1;
    carousel(index)
})


function carousel(review) {
    
    let reviews = document.getElementsByClassName("review__items");

    if (review >= reviews.length) {
        review = 0;
        index = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        index = reviews.length - 1;
    }

   for (let i = 0; i < reviews.length; i++) {
      reviews[i].style.display = "none";
   }
   reviews[review].style.display = "flex";
}


 


