;
let menuList = [
    {
        name: '父导航1',
        id: 'p1',
        children: [
            {
                name: '导航1-1',
                id: 'p1-c1',
            },
            {
                name: '导航1-2',
                id: 'p1-c2',
                children: [
                    {
                        name: '导航1-2-1',
                        id: 'p1-c2-1',
                        children: [
                            {
                                name: '导航1-2-1-1',
                                id: 'p1-c2-1-1',
                            }
                        ]
                    },
                    {
                        name: '导航1-2-2',
                        id: 'p1-c2-2',
                        children: [
                            {
                                name: '导航1-2-2-1',
                                id: 'p1-c2-2-1',
                            },
                            {
                                name: '导航1-2-2-1',
                                id: 'p1-c2-2-1',
                            }
                        ]
                    },
                ]
            },
            {
                name: '导航1-3',
                id: 'p1-c3',
                children: [
                    {
                        name: '导航1-3-1',
                        id: 'p1-c3-1',
                    },
                    {
                        name: '导航1-2-2',
                        id: 'p1-c3-2',
                    },
                ]
            },
        ]
    },
    {
        name: '父导航2',
        id: 'p2',
        children: [
            {
                name: '导航2-1',
                id: 'p2-c1',
            },
            {
                name: '导航2-2',
                id: 'p2-c2',
            },
        ]
    },
    {
        name: '父导航3',
        id: 'p3',
    },
];
module.exports = {
    queryMenus: function(params){
        return menuList;
    }
};