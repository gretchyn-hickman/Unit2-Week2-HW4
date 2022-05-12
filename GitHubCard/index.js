import axios from 'axios';


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

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
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
//I'm going to use my own thanxx
