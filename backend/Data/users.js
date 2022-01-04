import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Aman Khan',
        email: 'aman@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Juna',
        email: 'juna@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users