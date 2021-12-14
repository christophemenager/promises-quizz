const timeoutSleep = milliseconds => {
    return setTimeout(() => {
        console.log('timeoutSleep')
    }, milliseconds)
}

const main = () => {
    timeoutSleep(0)
    console.log('Finished : end of main')
}

// https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf

main()
