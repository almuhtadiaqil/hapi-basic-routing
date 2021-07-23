const routes = [{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepae';

        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return `Halaman tidak dapat diakses dengan method ini`;

        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';

        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return `Halaman tidak dapat diakses dengan method ini`;

        },
    },
    {
        method: 'GET',
        path: `/hello/{username?}`,
        handler: (request, h) => {
            const { username = `stranger` } = request.params;
            const { lang } = request.query;

            if (lang === 'id') {
                return `Hai ${username}!`;
            }
            return `Hello ${username}!`;

        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return `Halaman tidak ditemukan`;

        },
    },
];

module.exports = routes;