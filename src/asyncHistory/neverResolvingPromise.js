// Async/Await syntax with promises, the most modern way

const asynchronousAction = () => {
    return new Promise(resolve => {})
}

const main = () => {
    const asyncMethod = async () => {
        await asynchronousAction()
        console.log('End of asynchronous action')
    }

    asyncMethod()
    console.log('End of main')
}

main()
