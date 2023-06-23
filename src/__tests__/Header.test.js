import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

describe('tests for Navigation menu', () => {
  test('snapshot for Navbar component', () => {
    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
