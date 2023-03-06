const leaderboard = document.getElementById('leaderboard');
const leaderboardItem = JSON.parse(localStorage.getItem('leaderboard')) || [];

leaderboardItem.map(leaderboard => {

    let newDiv = document.createElement('li')

    newDiv.innerText = leaderboardItem

    

    console.log(leaderboard);
})

