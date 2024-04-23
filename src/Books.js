import { useEffect, useState } from 'react'
import c1 from './images/c1.png'
import cart from './images/cart icon.png'
import star from './images/star.png'

import './Books.css';

function Books() {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const [addedItems, setItems] = useState(savedItems)

    
    const addToCart = (bookdata)=>{
        setItems(()=>{
            addedItems.push(bookdata)
            localStorage.setItem('savedItems', JSON.stringify(addedItems))
            return addedItems
        })
    }
    const searchTopic = 'kid+books'
    const bookSearchEndpoint = (searchTopic)=>{ 
        return `https://openlibrary.org/search.json?q=${searchTopic}&fields=key,author_name,title,ratings_average,cover_i&limit=20`
    }
    const bookCoverEndpoint = (coverid)=>{return `https://covers.openlibrary.org/b/id/${coverid}-M.jpg`} 
    
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
        
        const [books, setBooks] = useState([])
        const [cartToggle, setCartToggle] = useState(false)
            
        useEffect(()=>{
            fetch(bookSearchEndpoint(searchTopic), requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setBooks(JSON.parse(result).docs)
                // console.log(`Returned Books are ${returnedBooks.length}`)
                // returnedBooks.forEach(book=>{
                //     console.log(`${book.title} by ${(book.author_name)[0]} rated ${book.ratings_average}`)
                // })    
            })
            .catch((error) => {
                console.log('Error')
                console.error(error)
            });
        }, searchTopic)
        const BookComponent =  ({author_name, key,cover_i, title, ratings_average})=>{
            // debugger
            return (<div class="book-content" key={key}>
                        <img src={bookCoverEndpoint(cover_i)}  className="books-img" alt="book picture"/>
                        <div className='description'>
                            <span className='title'>{title}</span>
                            <br/>
                            <span> by {author_name}</span>
                            <br/>
                            <span className='price'>N3,500 </span><br/><span class="hard">hard cover</span>
                        {/* <div class="list-btn">
                            <ul>
                                <li>{(ratings_average.toString(10)).slice(0,4)}</li>
                                <li><img src={star} alt="star rating" class="star"/></li>
                            </ul> 
                             
                        </div> */}
                        </div>
                        <button class="btn" onClick={()=>addToCart({author_name, key,cover_i, title, ratings_average})} >Add to Cart</button>
                        {/* <h6>based on 120 ratings</h6>   */}
                    </div>)
        }

        const CartBoook = ({author_name, key,cover_i, title, ratings_average})=>{
            return (
                    <div>
                        <img src={bookCoverEndpoint(cover_i)}  className="cart-books-img" alt="book picture"/>
                        <br/>
                        <span>{title}</span>
                        <input type='text' placeholder='quantity'/>
                        <hr/>
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
            {cartToggle && <div className='addedItems'>
                <div className="item">
                    {addedItems.map(element => {
                        return CartBoook(element)
                    })}
                    <button>Checkout</button>
                </div>
            </div>}
            <div class="book-grid-container">
                {books.map((book)=>{
                        return BookComponent(book)
                    })}
                {/* <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn" onClick={addToCart}>Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">add to cart</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li class="star-number">4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div>
                <div class="book-content">
                    <img src={c1} alt="book picture"/>
                    <h4>Mickey mouse and his friends <br/><span>author:Walt disney</span></h4>
                    <h5>Price:N3,500 <br/><span class="hard">hard cover</span></h5>
                    <div class="list-btn">
                        <ul>
                            <li>4.5</li>
                            <li><img src={star} alt="star rating" class="star"/></li>
                        </ul> 
                        <button class="btn">Buy now</button> 
                    </div>
                    <h6>based on 120 ratings</h6>  
                </div> */}
            </div>
        </header>  
    );
}

export default Books;