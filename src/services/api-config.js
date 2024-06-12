export const apiConfig = {
    baseURL: process.env.NODE_ENV === 'production' 
        ? 'https://member-club-json-server-371541e199f9.herokuapp.com' 
        : 'http://localhost:3333'
}