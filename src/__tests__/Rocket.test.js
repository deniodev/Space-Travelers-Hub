import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Rockets from '../components/pages/Rocket';

describe('tests for Rockets Page', () => {
  test('snapshot for Rockets component', () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
