import React from 'react'
import './App.css'
import SearchBar from './SearchBar'
import { Route,  } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  
  state={
    library:[]
  }

 

  onUpdateBookStat= (book, shelf) =>{
    BooksAPI.update(book, shelf)
    .then(()=>{BooksAPI.getAll()
      .then((books) => { this.setState(() =>({ library: books }));        
      })  
    })
  }  

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState(()=>({ library: books }));
        console.log(`for checking on library details`,this.state.library)
    })
  }

  render() {
    return (
      <div>      
        <Route exact path='/' render={()=>(
          <MainPage   
            library={this.state.library}
            onUpdateBookStat={this.onUpdateBookStat}
          />
        )} />
       
        <Route exact path='/adding-book' 
          render={()=>(
            <SearchBar   
              library={this.state.library}
              libraryBooksID={this.state.library.map((book)=>book.id)}

              onUpdateBookStat={this.onUpdateBookStat}
            />
          )}
        />
      
      </div>
    )
  }
}

export default BooksApp
