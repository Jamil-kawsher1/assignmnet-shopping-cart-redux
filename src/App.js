import logo from './logo.svg';
import './App.css';
import Products from './component/Products';
import ItemCard from './component/ItemCard';
import CartParents from './component/CartParents';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CartParents />



      </Provider>

    </div>
  );
}

export default App;
