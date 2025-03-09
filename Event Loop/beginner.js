
// write a function that logs every second, incrementing the number each time it logs
let timeout = 1;

function logTimeout() {

    setTimeout(() => {
        console.log('Hello, World!', timeout);
        timeout++;
        logTimeout();
        
    }, timeout * 1000);
}

logTimeout()