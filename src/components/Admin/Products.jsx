import { useState } from "react"
import Layout from "./Layout"

const Products = ()=>{
    const [products, setProducts] = useState([
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/a.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 50,
            image: '/products/b.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/c.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/d.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/e.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/f.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/g.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/i.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/j.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/k.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/l.jpg'
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'I am related to men`s product',
            price: 2000,
            discount: 15,
            image: '/products/a.jpg'
        },
        {
            title: 'Men`s shirt red flannel',
            description: 'I am related to men`s product',
            price: 2200,
            discount: 10,
            image: '/products/m.jpg'
        },
        {
            title: 'Men`s shirt white cotton',
            description: 'I am related to men`s product',
            price: 2500,
            discount: 20,
            image: '/products/n.jpg'
        },
        {
            title: 'Men`s shirt black silk',
            description: 'I am related to men`s product',
            price: 2700,
            discount: 25,
            image: '/products/o.jpg'
        },
        {
            title: 'Men`s shirt green plaid',
            description: 'I am related to men`s product',
            price: 2300,
            discount: 15,
            image: '/products/p.jpg'
        },
        {
            title: 'Men`s shirt yellow linen',
            description: 'I am related to men`s product',
            price: 2400,
            discount: 18,
            image: '/products/q.jpg'
        },
        {
            title: 'Men`s shirt purple chambray',
            description: 'I am related to men`s product',
            price: 2600,
            discount: 20,
            image: '/products/r.jpg'
        },
        {
            title: 'Men`s shirt grey herringbone',
            description: 'I am related to men`s product',
            price: 2800,
            discount: 30,
            image: '/products/s.jpg'
        },
        {
            title: 'Men`s shirt navy corduroy',
            description: 'I am related to men`s product',
            price: 2900,
            discount: 35,
            image: '/products/t.jpg'
        },
        {
            title: 'Men`s shirt pink oxford',
            description: 'I am related to men`s product',
            price: 2100,
            discount: 12,
            image: '/products/u.jpg'
        },
        {
            title: 'Men`s shirt brown twill',
            description: 'I am related to men`s product',
            price: 2250,
            discount: 22,
            image: '/products/v.jpg'
        },
        {
            title: 'Men`s shirt light blue chambray',
            description: 'I am related to men`s product',
            price: 2350,
            discount: 18,
            image: '/products/w.jpg'
        },
        {
            title: 'Men`s shirt black denim',
            description: 'I am related to men`s product',
            price: 2500,
            discount: 20,
            image: '/products/x.jpg'
        }        
    ])
    return (
        <Layout>
            <div>
                <h1 className="text-xl font-semibold mb-4">Products</h1>
                <div className="grid md:grid-cols-4 gap-8">
                    {
                        products.map((item, index)=>(
                            <div key={index} className="bg-white rounded-md shadow-lg">
                                <img 
                                    src={item.image}
                                    className="rounded-t-md w-full h-[270px] object-cover"
                                />
                                <div className="p-4">
                                    <h1 className="font-semibold text-md">{item.title}</h1>
                                    <p className="text-gray-600">{item.description.slice(0,50)}</p>
                                    <div className="flex gap-2 mt-1">
                                        <label>₹{item.price-(item.price*item.discount)/100}</label>
                                        <del className="font-semibold">₹{item.price}</del>
                                        <label className="text-gray-600">({item.discount}% Off)</label>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Products