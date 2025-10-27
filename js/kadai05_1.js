//selector

const voiceFor = document.querySelector("#voiceFor");
const voiceForOf = document.querySelector("#voiceForOf");
const voiceForEach = document.querySelector("#voiceForEach");

const review = [
  {
    rating: "★★★★★",
    review: "マルゲリータが最高に美味しかったです！また来ます！",
    age_group: "30代",
    gender: "男性",
  },
  {
    rating: "★★★★☆",
    review: "雰囲気もサービスも良かった。",
    age_group: "20代",
    gender: "女性",
  },
  {
    rating: "★★★★★",
    review: "家族みんな大満足です。また行きたいです。",
    age_group: "40代",
    gender: "主婦",
  },
];

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
//process

function createReviewElement(review){
    const div = document.createElement("div");
    div.className = "voice";
 
    const star =  document.createElement('h4');
    star.textContent  = "☆".repeat(review.stars);
 
    const comment = document.createElement('p');
    comment.textContent = review.text;
 
    const name = document.createElement('p');
    name.className = "name";
    name.textContent = review.name;
 
    div.appendChild(star);
    div.appendChild(comment);
    div.appendChild(name);
 
    return div;
}
 
for(let i = 0;i < reviews.length;i++){
    const el = createReviewElement(reviews[i]);
    voiceFor.appendChild(el);
}

for (const element of reviews) {
    const el = createReviewElement(element);
    voiceForOf.appendChild(el)
}

reviews.forEach(element => {
    const el =createReviewElement(element)
    voiceForEach.appendChild(el)
});


console.log("=== review [0] の　中身 For in")

for (const key in reviews) {
    // if (!Object.hasOwn(reviews, key)) continue;
    
    const element = reviews[key];
    console.log(createReviewElement(element))   
}

