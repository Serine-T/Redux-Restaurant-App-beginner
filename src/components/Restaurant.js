import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addRestaurantAction } from '../redux/RestaurantAction';

function Restaurant({ add }) {
  // const { add } = props;
  const [restaurantState, setRestaurantState] = useState({})
  return (
    <div className="mt-5">  
      {/* {console.log(props)} */}
      <form onSubmit={e => {
        e.preventDefault();
        // console.log(restaurantState)
        add(restaurantState);
      }
      }> 
        <div className="mb-3">
          <label className="form-label">Name
            <input type="text" className="form-control" onChange={e => {
              setRestaurantState({
                ...restaurantState,
                ...{name: e.target.value}
              }) 
            }}/>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">Location
            <input type="text" className="form-control" onChange={e => {
              setRestaurantState({
                ...restaurantState,
                ...{location: e.target.value}
              })
            }} />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) =>({
  retaurantList: state,
});

const mapDispatchToProps=  (dispatch) =>({
  add: (res) => {
    dispatch(addRestaurantAction(res));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);