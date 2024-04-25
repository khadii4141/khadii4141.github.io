import { useEffect, useMemo, useState } from 'react'
import c1 from './images/c1.png'
import cart from './images/cart icon.png'
import star from './images/star.png'

import './Books.css';
import { flushSync } from 'react-dom';

function Books() {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const [addedItems, setItems] = useState(savedItems)
    const [books, setBooks] = useState([])
    const [cartToggle, setCartToggle] = useState(false)
    const [cost, setCost] = useState(0)
    const cartItems = useMemo(()=>{
            return addedItems
    }, [addedItems])
    
    const removeBook = (bookdata)=>{
        const filteredItems = addedItems.filter(item => item.title !== bookdata.title);
        if (filteredItems.length !== addedItems.length) { 
            setItems(filteredItems);
            localStorage.setItem('savedItems', JSON.stringify(filteredItems));
            setCost((currentCost)=>{
                return currentCost - 3500
              })
        }
    }
    const addToCart = (bookdata) => {
        const foundItem = addedItems.find(item => item.title === bookdata.title);
      
        if (!foundItem) {
          setItems([...addedItems, bookdata]); // Spread operator for new array
          localStorage.setItem('savedItems', JSON.stringify([...addedItems, bookdata]));
          setCost((currentCost)=>{
            return currentCost + 300
          })
        }
      };
    const searchTopic = 'kid+books'
    const bookSearchEndpoint = (searchTopic)=>{ 
        return `https://openlibrary.org/search.json?q=${searchTopic}&fields=key,author_name,title,ratings_average,cover_i&limit=20`
    }
    const bookCoverEndpoint = (coverid)=>{return `https://covers.openlibrary.org/b/id/${coverid}-M.jpg`} 
    
    const requestOptions = {
        method: "GET",
        redirect: "follow"
        };
            
    useEffect(()=>{
        fetch(bookSearchEndpoint(searchTopic), requestOptions)
        .then((response) => response.text())
        .then((result) => {
            setBooks(JSON.parse(result).docs)   
        })
        .catch((error) => {
            console.log('Error')
            console.error(error)
        });
    }, searchTopic)
    const BookComponent =  ({author_name, key,cover_i, title, ratings_average})=>{
        return (<div class="book-content" key={key}>
                    <img src={bookCoverEndpoint(cover_i)}  className="books-img" alt="book picture"/>
                    <div className='description'>
                        <span className='title'>{title}</span>
                        <br/>
                        <span> by {author_name}</span>
                        <br/>
                        <span className='price'>N3,500 </span><br/><span class="hard"></span>
                    </div>
                    <button class="btn" onClick={()=>addToCart({author_name, key,cover_i, title, ratings_average})} >Add to Cart</button>
                </div>)
    }

    const CartBoook = ({author_name, key,cover_i, title, ratings_average})=>{
        return (
                <div id='cart-item-body'>
                    <img src={bookCoverEndpoint(cover_i)}  id="cart-books-img" alt="book picture"/>
                    <span id='cart-item-title'>{title}</span>
                    <span id='cart-item-qty'>Qty:</span>
                    <input type='text' placeholder='quantity' defaultValue={1} id='cart-item-qty-input'/>
                    <a id='cart-remove-btn' onClick={()=>removeBook({author_name, key,cover_i, title, ratings_average})}>Remove</a>
                </div>
            )
    }
    const toggleCart = ()=>{
        setCartToggle(()=>{
            return !cartToggle
        })
    }
    
    return (
        <header className="header-section">
            <div className="book-nav-section">
                <div className='category-section-panel'>
                    <ul class="category-section">
                        <li>Non-fiction</li>
                        <li>Fiction</li>
                        <li>Activity books</li>
                        <li>Parenting guide</li>
                    </ul>
                </div>
                <div className='cart-panel'>
                    <div className='cart' onClick={toggleCart}/>
                </div>
                </div>
                <div>
                    <ul class="age-group">
                        <li class="zero-three">age 0-3</li>
                        <li class="four-six">age 4-6</li>
                        <li class="seven-ten">age 7-10</li>
                    </ul>
                </div>
                {cartToggle &&<div id='shopping-cart'>
                    <div id='cart-header'>
                        <div id='cart-icon-header' />
                        <div id='cart-total-cost'>{cost}</div>
                    </div>
                    <div id='cart-body'>
                        {cartItems.map(element => {
                            return CartBoook(element)
                        })}
                    </div>
                    <div id='cart-footer'>
                        <button id='cart-checkout-btn'>Checkout</button>
                    </div>
                </div>}
                <div class="book-grid-container">
                    {books.map((book)=>{
                            return BookComponent(book)
                        })}
                </div>
        </header>  
    );
}

export default Books;