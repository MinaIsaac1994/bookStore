import React,{Component} from 'react'
import OptionMenu from './OptionMenu'

class BookDisplay extends Component {
  
  state={
    books:[]
  }

  handleUpdate = (book, shelf) => {
    this.props.handleUpdate(book, shelf)
  }

  onCheckShelf = (searchid) => {
    // compare to the array from App.js    
    console.log(searchid);
    let result = this.props.allBooks.filter((book) => {
      return book.id === searchid      
    })
    console.log('result',result);
    if(result.length > 0) 
      return result[0].shelf;
    else
      return 'none';
  }

    render(){

      const { books, handleUpdate, onShelfStatus } = this.props

        return(
                <ol className="books-grid">

                  {books.map((book, key)=>(
                                                     
                  <li key={key}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})` 
                      }}></div>
                      <OptionMenu
                        shelf={book}
                        handleUpdate={handleUpdate}
                        onShelfStatus={onShelfStatus}
                      />
                    </div>
                    <div className="book-title">{`${book.title}`}</div>
                    <div className="book-authors">{`${book.authors}`}</div>
                  </div>
                  </li>
                  
                  ))}
                          
                </ol>
        )
    }

}

export default BookDisplay