import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import ArticleListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <NavBar/>
      <div id='page-body'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about'element={<AboutPage/>}/>
          <Route path='/articles'element={<ArticleListPage/>}/>
          <Route path='/article/:articleId'element={<ArticlePage/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
