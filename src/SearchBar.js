import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'


class SearchBar extends Component {

  state={
    searchQuery:'',
    bookSearched:[]
  }

  handleUpdate = (book, shelf) => {
    this.props.onUpdateBookStat(book, shelf);
   }

  updateQuery = (entry) => {
    if(entry===""){
      this.setState(()=>({
        bookSearched: []
      }))
    }
    else (
      BooksAPI.search(entry)
      .then((result) => {
        if(result.error){
          this.setState(() => ({
            bookSearched:[]
          }))
        }
        else if(result){
          this.setState(() => ({
            bookSearched: result
            
          }))
          console.log(`result`, this.state.bookSearched)
        }
      })
    ) 
  }



  onShelfStatus = (i) => {
    let query= this.props.library.filter((book) => (book.id===i));
    return (query.length?query[0].shelf :  'none')         
    }

  
 
  
    render() {
      const { searchQuery, bookSearched} = this.state
      const {library, onUpdateBookStat, libraryBooksID} = this.props;
      const completeBooks = bookSearched.filter((book)=> (book.imageLinks!==null && book.imageLinks!== 0 && book.imageLinks  ))
              

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'><button className="close-search" >Close</button>
              </Link>
              <div className="search-books-input-wrapper">
               
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  //value={searchQuery}
                  onChange={(event)=>this.updateQuery(event.target.value,20)}
                />

              </div>
            </div>
            <div className="search-books-results">

              <ol className="books-grid">
                {completeBooks.map((book,key)=>(
                    <li key={key}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})` 
                        }}></div>

                          <div className="book-shelf-changer">
                           <select 
                              value={this.onShelfStatus(book.id)}
                              onChange={(e) => {onUpdateBookStat(book,e.target.value)} }
                              >
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                           </select>
                           </div>
                      </div>
                      <div className="book-title">{`${book.title}`}</div>
                      <div className="book-authors">{`${book.authors}`}</div>
                    </div>
                    </li>
                    
                ))}
              </ol>
            </div>
          </div>
        )
    }

}

export default SearchBar