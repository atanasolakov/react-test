import React, { useEffect, useState } from 'react';
import fakestore from './fakestore.scss'
import {RiArrowGoBackFill, RiDeleteBin6Line} from "react-icons/ri";
import {useNavigate} from "react-router-dom";
import {BiArrowBack, BiSolidArrowToBottom} from "react-icons/bi";
import {BsBack} from "react-icons/bs";
const App = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        id: '',
        title: '',
        price: '',
        image: '',
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        console.log(products, 'aa');
    }, []);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    };

    const addCustomProduct = () => {
        if (newProduct.id && newProduct.title && newProduct.price && newProduct.image) {
            setProducts(prevProducts => [...prevProducts, newProduct]);
            setNewProduct({
                id: '',
                title: '',
                price: '',
                image: '',
            });
        }
    };

    const handleDeleteProduct = productId => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    };
    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = event => {
        setSortOrder(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortOrder === 'asc'
        ? [...filteredProducts].sort((a, b) => a.price - b.price)
        : [...filteredProducts].sort((a, b) => b.price - a.price);

    const navigate = useNavigate();

    return (
        <div className={'container'}>
            <div className={'title-container'}>
              <span><RiArrowGoBackFill fontSize={40} onClick={() => navigate('/')}/></span>
                <h2>Our Product Page</h2>
            </div>
            <div>
                <div className="add-product-form">
                    <div>
                <input
                    type="text"
                    name="id"
                    placeholder="ID"
                    value={newProduct.id}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newProduct.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={handleInputChange}
                />
                <button onClick={addCustomProduct}>Add Custom Product</button>
                    </div>
                    <div className={'sorting'}>
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <select onChange={handleSortChange} placeholder={'Sort By'}>
                            <option value="asc">Price: Low to High</option>
                            <option value="desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>
                </div>
            <ul>
                {sortedProducts.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <button onClick={() => handleDeleteProduct(product.id)}><RiDeleteBin6Line/></button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
