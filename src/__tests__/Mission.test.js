import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Mission from '../components/pages/Mission';

describe('tests for Missions file', () => {
  test('snapshot for missions component', () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Mission />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
