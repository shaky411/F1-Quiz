const leaderboard = document.getElementById('leaderboard');
const leaderboardItem = JSON.parse(localStorage.getItem('leaderboard')) || []

leaderboardItem.map(leaderboard => {
    console.log(leaderboard);
})