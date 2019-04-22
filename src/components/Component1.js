import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h2>
              • Component{' '}
              <Spring
                from={{ number: 10 }}
                to={{ number: 1 }}
                config={{ duration: 10000 }}
              >
                {props => (
                  <span style={props}>
                    <span style={counter}>{props.number.toFixed()}</span>
                  </span>
                )}
              </Spring>
            </h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              nulla fugiat repellendus est rerum id explicabo eum doloribus
              deleniti sunt neque earum maxime reprehenderit ad, nam obcaecati
              eius iusto nobis.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: '#AB5EAA',
  color: 'white',
  padding: '1rem'
};

const counter = {
  background: '#fff',
  borderRadius: '50%',
  color: '#AB5EAA',
  display: 'inline-block',
  fontSize: '1.2rem',
  height: '1.5rem',
  lineHeight: '1.5rem',
  margin: '1rem 0.5rem',
  padding: '0.5rem',
  textAlign: 'center',
  width: '1.5rem'
};
