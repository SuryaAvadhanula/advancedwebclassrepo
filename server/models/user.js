const list = [
    {
        id: 1,
        handle: 'Ryuk',
        firstName: 'Lawliet',
        lastName: 'Ryuzaki',
        password: 'Deathnote',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/4.jpg'
    },
    {
        id: 2,
        handle: 'Kira',
        firstName: 'Light',
        lastName: 'Yagami',
        password: 'Deathnote',
        email: 'lyagami@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/5.jpg'
    },
    {
        id: 3,
        handle: 'One Piece',
        firstName: 'Monkey',
        lastName: 'Luffy',
        password: 'Deathnote',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/2.jpg'
    }
];

function get(id){
    return list.find(user => user.id === parseInt(id));
}

module.exports.list = list;
module.exports.get = get;