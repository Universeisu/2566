import React, { useState } from 'react'

const stateInFunction = (props) => {
    const [date, setData] = useState({
        id:props.id,
        name:props.name,
        counter:0
    })
    const plusFunction = () => {
        setData({ ...data,counter: Data.counter +1, });

    };
    const minusFunction = () => {
        setData({ ...date,counter: Data.counter - 1 });

    };
  return (
      <div>
          <h1>State In class Component</h1>
          <p>
              <b>Name:</b> {this.state.name}
          </p>
          <p>
              <b>Counter:</b> {this.state.counter}
          </p>
          <button onClick={this.plusFunction}>+</button>
          <button onClick={this.plusFunction}>-</button>
      </div>
  );
}

export default stateInFunction