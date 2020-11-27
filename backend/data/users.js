import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Hiep Nguyen',
    email: 'nguyenhiep@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'User 1',
    email: 'user1@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'User 2',
    email: 'user2@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
