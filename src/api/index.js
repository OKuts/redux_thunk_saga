export const api = Object.freeze({
    getUsers: async (msg) => {
        console.log(msg)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        return await response.json()
    },
})
