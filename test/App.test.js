import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('snapshots', () => {
  const component = renderer
    .create(<App />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
