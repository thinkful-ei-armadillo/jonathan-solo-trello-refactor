import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

const cardArr = [{
  title: 'title',
  content: 'content'
}]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List cards={cardArr} />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders expected list', () => {
  const tree = renderer
    .create(<List cards={cardArr} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});