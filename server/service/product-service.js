let products = [
    {
        id: 1,
        title: '第1个商品',
        price: 2.99,
        stars: 2.5,
        desc: '描述1',
        categories: ['电子产品', '硬件设备']
    },
    {
        id: 2,
        title: '第2个商品',
        price: 4.99,
        stars: 1.5,
        desc: '描述2',
        categories: ['零食']
    },
    {
        id: 3,
        title: '第3个商品',
        price: 6.99,
        stars: 2.5,
        desc: '描述3',
        categories: ['宠物']
    },
    {
        id: 4,
        title: '第4个商品',
        price: 8.99,
        stars: 0.5,
        desc: '描述4',
        categories: ['电子产品']
    },
    {
        id: 5,
        title: '第5个商品',
        price: 10.99,
        stars: 2.5,
        desc: '描述5',
        categories: ['宠物', '生活']
    },
    {
        id: 6,
        title: '第6个商品',
        price: 4.99,
        stars: 2,
        desc: '描述6',
        categories: ['医疗器材']
    },
    {
        id: 7,
        title: '第7个商品',
        price: 5.99,
        stars: 3,
        desc: '描述7',
        categories: ['硬件设备']
    },
    {
        id: 8,
        title: '第8个商品',
        price: 7.99,
        stars: 5,
        desc: '描述8',
        categories: ['电子产品']
    },
];


class Comment {
    constructor( id, productId, timestamp, user, rating, content ){
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
}

let comments = [
    new Comment(1, 1, new Date(), '张三1', 3, '东西不错1'),
    new Comment(2, 1, new Date(), '张三1', 3.5, '东西不错1'),
    new Comment(3, 1, new Date(), '张三1', 5, '东西不错1'),
    new Comment(4, 2, new Date(), '张三2', 4, '东西不错2'),
    new Comment(5, 2, new Date(), '张三2', 4, '东西不错2'),
    new Comment(6, 3, new Date(), '张三3', 3, '东西不错3'),
    new Comment(7, 3, new Date(), '张三3', 3, '东西不错3'),
    new Comment(8, 4, new Date(), '张三4', 2, '东西不错4'),
    new Comment(9, 5, new Date(), '张三5', 1, '东西不错5'),
];

module.exports = {
    getProducts (params) {
        if(!params){
            return products;
        }
        let _products = products;
        if(params['productName']){
            _products = _products.filter(p => p.title.indexOf(params['productName']) > -1);
        }
        if(params['productPrice'] && _products.length > 0){
            _products = _products.filter(p => p.price < +params['productPrice']);
        }
        if(params['productCategory'] && params['productCategory'] !== 'all' && _products.length > 0){
            _products = _products.filter(p => p.categories.indexOf(params['productCategory']) > -1);
        }
        return _products;
    },
    getProductByID (id) {
        return products.find(p => {
            return p.id == id;
        })
    },
    getAllProductCategories () {
        let _set = new Set();
        products.every((p) => {
            p.categories.every((c) => {
                _set.add(c);
                return true;
            });
            return true;
        });
        return Array.from(_set);
    },

    getProductComment (productId) {
        let _productId = +productId;
        return comments.filter((c) => {
            return c.productId === _productId
        });
    },
    addProductComment (comment) {
        comments.unshift(comment);
        return true;
    }
};