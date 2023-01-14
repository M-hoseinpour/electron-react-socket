/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
import Product from 'components/Product';
// import { connectToServer } from 'main/main';
import { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Hello = () => {
  useEffect(() => {
    // connectToServer()

  }, [])
  return <Product />;
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
