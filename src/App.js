import './App.css';
import LogIn from './pages/LogIn';
import Layout from './components/Layout';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate replace to='/login' />}/>
          <Route path='/login' element={<LogIn />} />
          <Route path='/home' element={<Home />} />
					<Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

