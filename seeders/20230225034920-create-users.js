'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
        { 
            "handle":"DaveyLovesFilms", 
            "login":"dstock3@gmail.com",
            "description": "I'm a film buff, and I love to talk about movies.",
            "theme":"dark",
            "friends": [
                "HorrorEnthusiast",
                "DavisTheFilmMan"
            ],
            "metadataIsAllowed": true,
            "emailNotifications": true,
            "searchData": [],
            "posts": JSON.stringify([
                {
                    "date": "2022-10-23",
                    "content": "I guess you could say I'm a big 'film head,' as they say. My guys? Tarantino, Scorsese, Kubrick, etc. Heh!",
                    "likes": 3
                }
            ]), 
            "movies": JSON.stringify([
                {
                    "Title": "The Matrix",
                    "Year": "1999",
                    "imdbID": "tt0133093",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                },
                {
                    "Title": "Goodfellas",
                    "Year": "1990",
                    "imdbID": "tt0099685",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                },
                {
                    "Title": "One Flew Over the Cuckoo's Nest",
                    "Year": "1975",
                    "imdbID": "tt0073486",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                },
                {
                    "Title": "Se7en",
                    "Year": "1995",
                    "imdbID": "tt0114369",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                },
                {
                    "Title": "Seven Samurai",
                    "Year": "1954",
                    "imdbID": "tt0047478",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg"
                }            
            ])
        }
    ];
    await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};




/*
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
        { 
            "handle":"DaveyLovesFilms", 
            "login":"dstock3@gmail.com",
            "description": "I'm a film buff, and I love to talk about movies.",
            "theme":"dark",
            "friends": [
                "HorrorEnthusiast",
                "DavisTheFilmMan"
            ],
            "metadataIsAllowed": true,
            "emailNotifications": true,
            "searchData": [],
            "posts": [
                {
                    "date": "2022-10-23",
                    "content": "I guess you could say I'm a big 'film head,' as they say. My guys? Tarantino, Scorsese, Kubrick, etc. Heh!",
                    "likes": 3
                }
            ], 
            "movies":[
                {
                    "Title": "The Matrix",
                    "Year": "1999",
                    "imdbID": "tt0133093",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                },
                {
                    "Title": "Goodfellas",
                    "Year": "1990",
                    "imdbID": "tt0099685",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                },
                {
                    "Title": "One Flew Over the Cuckoo's Nest",
                    "Year": "1975",
                    "imdbID": "tt0073486",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                },
                {
                    "Title": "Se7en",
                    "Year": "1995",
                    "imdbID": "tt0114369",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
                },
                {
                    "Title": "Seven Samurai",
                    "Year": "1954",
                    "imdbID": "tt0047478",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg"
                }            
            ]
        }
    ];
    await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
*/