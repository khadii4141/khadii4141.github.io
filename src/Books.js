import c_1 from './images/c 1.png'
import c_2 from './images/c2.png'
import c_3 from './images/c3.png'
import c_4 from './images/c4.png'
import c_5 from './images/c5.png'
import c_6 from './images/c6.png'
import c_7 from './images/c7.png'
import c_8 from './images/c8.png'
import c_9 from './images/c9.png'
import c_10 from './images/c10.png'
import c_11 from './images/c11.png'
import c_12 from './images/c12.png'
import c_13 from './images/c13.png'
import c_14 from './images/c14.png'
import c_15 from './images/c15.png'
import c_16 from './images/c16.png'
import c_17 from './images/c17.png'
import c_18 from './images/c18.png'
import './Books.css';
import { useEffect, useState } from 'react'

const openlibrary = 'https://openlibrary.org'
const searchTopic = 'kid+books'
const bookSearchEndpoint = (searchTopic)=>{ 
    return `https://openlibrary.org/search.json?q=${searchTopic}&fields=author_name,title,ratings_average,cover_i`
}
const bookCoverEndpoint = (coverid)=>{return `https://covers.openlibrary.org/b/id/${coverid}-M.jpg`} 

function Books() {
    
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
    
    const [books, setBooks] = useState([])
        
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
    }, [])

    const BookIcon = ({author_name, cover_i, title, ratings_average})=>{
        return (
            <div id="book_panel">
                <img src={bookCoverEndpoint(cover_i)} alt="book picture" id="book_icons" width={'150px'} height={'150px'}/><br/>
                <div id="book_text"><span id="title">{title}</span> <span id="author">{author_name[0]}</span> <span id='ratings'>ratings_average</span></div>
                <button>Add To Cart</button>
            </div>
        )
    }

    return (
        <div>
            <div class="font-awesome">
                                        <i class="fa fa-facebook"></i>
                                        <i class="fa fa-linkedin"></i>
                                        <i class="fa fa-twitter"></i>
                                        </div>
            <div class="grid-container">
                {books.map((book)=>{
                    return BookIcon(book)
                })}
                
                {/* <img src={c_2} alt="book picture"/>
                <img src={c_3} alt="book picture"/>
                <img src={c_4} alt="book picture"/>
                <img src={c_5} alt="book picture"/>
                <img src={c_6} alt="book picture"/>
                <img src={c_7} alt="book picture"/>
                <img src={c_8} alt="book picture"/>
                <img src={c_9} alt="book picture"/>
                <img src={c_10} alt="book picture"/>
                <img src={c_11} alt="book picture"/>
                <img src={c_12} alt="book picture"/>
                <img src={c_13} alt="book picture"/>
                <img src={c_14} alt="book picture"/>
                <img src={c_15} alt="book picture"/>
                <img src={c_16} alt="book picture"/>
                <img src={c_17} alt="book picture"/>
                <img src={c_18} alt="book picture"/> */}
            </div>
            
        </div>
    )
}

export default Books;