function countDown(num) {
    let timer = setInterval(function() {
        if (num <= 0) {
            clearInterval(timer);
            console.log('DONE!');
        } else {
            console.log(`${num}`);
            num--;
        }
    }, 1000);
}

function randomGame() {
    count = 0;
    let gameTimer = setInterval(function() {
        rand = Math.random();
        console.log('trying...');
        count++;
        if (rand > 0.75) {
            console.log(`It took ${count} tries to pick a number (${rand}) greater than 0.75`);
            clearInterval(gameTimer);
        }
    }, 1000)
}