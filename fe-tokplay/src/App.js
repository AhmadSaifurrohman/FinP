import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import ProductList from './components/ProductList';
import CommentForm from './components/CommentForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VideoList />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-comment" element={<CommentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
