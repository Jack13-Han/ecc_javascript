//array

const reviews = [
  {
    stars: 5,
    text: "マルゲリータが最高に美味しかったです！また来ます！",
    name: "（30代・男性）",
  },
  {
    stars: 4,
    text: "雰囲気もサービスも良かった。",
    name: "（20代・女性）",
  },
  {
    stars: 5,
    text: "家族みんな大満足です。また行きたいです。",
    name: "（40代・主婦）",
  },
];

//selector
const voiceFor = document.querySelector("#voiceFor");
const voiceForOf = document.querySelector("#voiceForOf");
const voiceForEach = document.querySelector("#voiceForEach");

const btn = document.querySelector("#submit");

const reviewForm = document.querySelector("#reviewForm");
const userName = document.querySelector("#userName");
const starRating = document.querySelector("#starRating");
const userComment = document.querySelector("#userComment");

function createReviewElement(review) {
  const div = document.createElement("div");
  div.className = "voice";

  const star = document.createElement("h4");

  const filledStar = "★".repeat(review.stars);
  const emptyStar = "☆".repeat(5 - review.stars);
  star.textContent = filledStar + emptyStar;

  const comment = document.createElement("p");
  comment.textContent = review.text;

  const name = document.createElement("p");
  name.className = "name";
  name.textContent = review.name;

  div.appendChild(star);
  div.appendChild(comment);
  div.appendChild(name);

  return div;
}

const renderReviews = () => {

    voiceFor.innerHTML=""
    voiceForOf.innerHTML=""
    voiceForEach.innerHTML=""


  reviews.forEach((element) => {
    const el = createReviewElement(element);
    voiceForEach.appendChild(el.cloneNode(true));

    voiceFor.appendChild(el.cloneNode(true));
    voiceForOf.appendChild(el);
  });
};

reviewForm.addEventListener("submit",(event) => {
    event.preventDefault()
   console.log(starRating.value)

   console.log(userComment.value)
   console.log(userName.value)

    const newReview={
        stars :starRating.value , 
        name : userName.value ,
        text : userComment.value,
    }

    reviews.unshift(newReview)

    renderReviews();
    reviewForm.reset();
})

renderReviews()