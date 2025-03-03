
// Create a function createLogger that returns a function. 
// This returned function should take a string as an argument and log it.
function createLogger(level) {
    return function (msg) {
        console.log(`${level} : ${msg}`)
    }
}

const logInfo = createLogger('INFO')
const logError = createLogger('ERROR')

logInfo("This is info 1") // INFO
logError("This is error 1") // ERROR
logInfo("This is info 2") // INFO
