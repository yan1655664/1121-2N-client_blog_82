import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage_82 from './pages/HomePage_82';
import BlogStaticPage_82 from './pages/BlogStaticPage_82'; 
import BlogNodeServer_82 from './pages/BlogNodeServer_82'; 
import BlogSupabase_82 from './pages/BlogSupabase_82';
import BlogLocalJson_82 from './pages/BlogLocalJson_82';

const App_82 = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_82 />} />
        <Route path='/static_82' element={<BlogStaticPage_82 />} />
 
        <Route path='/node_82' element={<BlogNodeServer_82 />} />
        <Route path='/supa_82' element={<BlogSupabase_82 />} />
        <Route path='/local_82' element={<BlogLocalJson_82 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_82;
