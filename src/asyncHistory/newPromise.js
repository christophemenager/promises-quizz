// Async/Await syntax with promises, the most modern way

const asynchronousAction = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

const main = () => {
    const asyncMethod = async () => {
        await asynchronousAction()
        console.log('End of asynchronous action')
    }

    asyncMethod()
}

main()
