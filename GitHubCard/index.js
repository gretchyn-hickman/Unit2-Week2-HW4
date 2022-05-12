import axios from 'axios';

const followersArray = [
  "gretchyn-hickman",
  "CRHarding",
  "RealSadLemon",
  "keirankozlowski",
  "jzkime",
  "Abargallo19",
];

function gitUsers(user){
  axios.get(`https://api.github.com/users/${user}`)
  .then(resp => {
    const user = githubCard(resp.data);
    const cards = document.querySelector(".cards");
    cards.appendChild(user);
  })
  .catch(err => console.error(err))
};
 for (let i = 0; i < followersArray.length; i++) {
   gitUsers(followersArray[i]);
 }

function githubCard(gitInfo) {
  const gitDiv = document.createElement('div');
  gitDiv.classList.add('card');
  const gitIMG = document.createElement('img');
  gitIMG.src = gitInfo.avatar_url;
  //placeholder
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('card-info');
  const infoTitle = document.createElement('h3');
  infoTitle.textContent = gitInfo.name;
  const user = document.createElement('p');
  user.textContent = gitInfo.login;
  const location = document.createElement("p");
  location.textContent = gitInfo.location;
  //placeholder
  const profile = document.createElement("p");
  profile.textContent = 'Profile:'
  const profileLink = document.createElement('a');
  profileLink.href = gitInfo.html_url;
  profileLink.textContent = ('Profile Here')
  profile.appendChild(profileLink);
  //placeholder
  const followers = document.createElement("p");
  followers.textContent = (`Followers: ${gitInfo.followers}`);
  const following = document.createElement("p");
  following.textContent = (`Following: ${gitInfo.following}`);
  const bio = document.createElement("p");
  bio.textContent = gitInfo.bio;
//placeholder
  infoDiv.appendChild(infoTitle);
  infoDiv.appendChild(user);
  infoDiv.appendChild(location);
  infoDiv.appendChild(profile);
  infoDiv.appendChild(followers);
  infoDiv.appendChild(following);
  infoDiv.appendChild(bio);
  //placeholder
  gitDiv.appendChild(gitIMG);
  gitDiv.appendChild(infoDiv);
  return gitDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
//I'm going to use my own thanxx
