const timeoutSleep = milliseconds => {
    return setTimeout(() => {
        console.log('timeoutSleep')
    }, milliseconds)
}

const customSleep = milliseconds => {
    let start_time = new Date().getTime()
    let current_time = start_time
    while (current_time < start_time + milliseconds) {
        current_time = new Date().getTime()
    }
}

const main = () => {
    timeoutSleep(100)
    customSleep(5000)
    console.log('Finished : end of main')
}

// https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf

main()
