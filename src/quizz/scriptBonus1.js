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
    console.log('customSleep')
}

const main = () => {
    timeoutSleep(100)
    customSleep(3000)
    console.log('Finished')
}

main()
