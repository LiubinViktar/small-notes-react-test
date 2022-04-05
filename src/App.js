import './App.css';
import Header from './components/header/header';
import PostsList from './components/posts-list/posts-list';

function App() {
    return (
        <div className="App">
          <Header user="Liubin Viktar" />
          <PostsList />
        </div>        
    )
}

export default App;
