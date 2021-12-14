// A more modern solution using promises, introduced in 2015

const asynchronousAction = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

const main = () => {
    asynchronousAction().then(() => console.log('End of asynchronous action'))
}

main()
