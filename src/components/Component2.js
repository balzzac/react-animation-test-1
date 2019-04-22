import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h2>• Component •</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam nulla fugiat repellendus est rerum id explicabo eum
                doloribus deleniti sunt neque earum maxime reprehenderit ad, nam
                obcaecati eius iusto nobis.
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle 3rd Component
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: '#BC80BC',
  color: 'white',
  padding: '1rem'
};

const btn = {
  background: '#562E56',
  color: 'white',
  cursor: `pointer`,
  margin: '1rem',
  outline: 'none',
  padding: '1rem'
};

export default Component2;
