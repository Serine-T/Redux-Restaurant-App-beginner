import { createStore } from 'redux';
import restaurantReducer from './RestauranReducer';

const restaurantStore = createStore(restaurantReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default restaurantStore;
