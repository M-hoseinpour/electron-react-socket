/* eslint-disable prettier/prettier */
import Product from 'components/Product';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return (
    <Product />
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
