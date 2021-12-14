const asynchronousAction = async ({ message, duration_in_ms }) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message)
            resolve()
        }, duration_in_ms)
    })
}

const main = async () => {
    const promise1 = () => asynchronousAction({ message: '1', duration_in_ms: 500 })
    const promise2 = () => asynchronousAction({ message: '2', duration_in_ms: 100 })
    const promise3 = () => asynchronousAction({ message: '3', duration_in_ms: 400 })

    await promise1()
    await [promise2(), promise3()]

    console.log('Finished')
}

main()
