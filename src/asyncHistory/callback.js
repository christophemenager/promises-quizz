// The most basic form of async :  callbacks

const asynchronousAction = ({ callback }) => {
    return setTimeout(() => {
        callback()
    }, 2000)
}

const main = () => {
    asynchronousAction({ callback: () => console.log('End of asynchronous action') })
}

main()
