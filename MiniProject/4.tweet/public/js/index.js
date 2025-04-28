

async function fetchTweets() {
    const res = await fetch('/api/tweets');
    return await res.json();
}


async function likeTweet(id) {
    console.log(`버튼 클릭: , ${id}`);
    const res = await fetch(`/api/like/${id}`, {method:'POST'});
    const data = await res.json();
    if(!res.ok) {
        alert(data.error);
    }else{
        //alert(data.message);
//        window.location.href='/index.html';
        renderTweets();
    }
}


async function unlikeTweet(id) {
    console.log(`버튼 클릭: , ${id}`);
    const res = await fetch(`/api/unlike/${id}`, {method:'POST'});
    const data = await res.json();
    if(!res.ok) {
        alert(data.error);
    }else{
        renderTweets();
    }
}

async function renderTweets() {
    const tweets = await fetchTweets();
    const tweetsDiv = document.getElementById('tweets');
    tweetsDiv.innerHTML = '';
    tweets.forEach(tweet => {
        const div = document.createElement('div');
        div.className = "tweet";
        div.innerHTML = `
        <div class="tweet-body-row">
            <p>${tweet.content}</p>
        </div>
        <div class="tweet-author">
            <p>- ${tweet.username} -</p>
        </div>
        <div class="tweet-actions">
        ${tweet.liked_by_current_user ? `
            <button type="submit" onclick="likeTweet(${tweet.id})">좋아요</button>
            <p>좋아요수 : ${tweet.likes_count} </p>
            ` : ` 
            <button type="submit" onclick="unlikeTweet(${tweet.id})">좋아요 취소</button>
            <p>좋아요수 : ${tweet.likes_count} </p>
        `}
        </div>
        `

        tweetsDiv.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", renderTweets);