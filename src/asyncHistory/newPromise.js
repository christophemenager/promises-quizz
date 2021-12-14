// Async/Await syntax with promises, the most modern way

const asynchronousAction = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

const main = async () => {
    await asynchronousAction()
    console.log('End of asynchronous action')
}

main()
