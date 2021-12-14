const asynchronousAction = async ({ message, duration_in_ms, error_message }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error_message) {
                reject(error_message)
            } else {
                console.log(message)
                resolve()
            }
        }, duration_in_ms)
    })
}

const main = async () => {
    const promise1 = () => asynchronousAction({ message: '1', duration_in_ms: 500 })
    const promise2 = () =>
        asynchronousAction({ message: '2', duration_in_ms: 100, error_message: 'error' })
    const promise3 = () => asynchronousAction({ message: '3', duration_in_ms: 400 })

    const array = [promise1, promise2, promise3]

    await Promise.all(array.map(promise => promise()))

    console.log('Finished')
}

main()
