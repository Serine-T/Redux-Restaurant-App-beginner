import React from 'react';
import './App.css';
import Restaurant from './components/Restaurant';
import { connect } from 'react-redux';
import { deleteRestaurantAction } from './redux/RestaurantAction';

function App(props) {
  const { retaurantListState, remove } = props;
  return (
    <div className="container">
      <Restaurant />

      <ul className="list-group">
        {
          retaurantListState.map((d, i) =>{
            return <li className="list-group-item d-flex justify-content-between" key={i}>
              <span>{d.name} {d.location}</span>
              <span>
                <button className='btn btn-danger' onClick={()=>remove()}>Delete</button> 
              </span>
            </li>
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    retaurantListState: state,
  }
};

const mapDispatchToProps=  (dispatch) =>{
  return {
    remove: (index) =>{
      dispatch(deleteRestaurantAction(index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
