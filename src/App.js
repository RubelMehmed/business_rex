import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import OrderPlace from './components/OrderPlace';
import Products from './components/Pro';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order-place">Order Place</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/order-place" element={<OrderPlace />  } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
