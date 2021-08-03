import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookDisplay from './BookDisplay'

class MainPage extends Component{

    state={
        
    };

    //const onUpdateBookStat = this.props.onUpdateBookStat;

    handleUpdate = (book, shelf) => {
      this.props.onUpdateBookStat(book, shelf)
    }

    render(){

      const { library, }  =  this.props

        return (
            <div className="app">
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">
                        <BookDisplay 
                            books={library.filter((book) => (book.shelf === "currentlyReading" ))}
                            handleUpdate={this.handleUpdate}
                        />
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <BookDisplay 
                            books = {library.filter((book) => (book.shelf === 'wantToRead'))} 
                            handleUpdate={this.handleUpdate}    
                        />
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <BookDisplay 
                            books = {library.filter((book) => (book.shelf === 'read'))} 
                            handleUpdate={this.handleUpdate}                        
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="open-search">
        <Link to='adding-book'><button>Add a book</button></Link>
        </div>
              </div>
            )
          </div>
        )
    }
}

export default MainPage