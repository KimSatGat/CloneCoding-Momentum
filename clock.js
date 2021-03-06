const clockContainer = document.querySelector(".js-clock"); // js-clock 태그를 가져온다
const clockTitle = clockContainer.querySelector("h1");  // js-clock의 자식 중 h1을 가져온다

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();