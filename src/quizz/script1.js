const asynchronousAction = async ({ message, duration_in_ms }) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message)
            resolve()
        }, duration_in_ms)
    })
}

const main = async () => {
    await asynchronousAction({ message: '2', duration_in_ms: 500 })
    await asynchronousAction({ message: '1', duration_in_ms: 100 })
    console.log('Finished')
}

main()
