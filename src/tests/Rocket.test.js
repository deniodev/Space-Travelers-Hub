import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockstore from 'redux-mock-store';
import Rocket from '../components/pages/Rocket';
import '@testing-library/jest-dom';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const mockStore = configureMockstore([]);

describe('Rockets component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Falcon 9',
            description: 'A reusable rocket developed by SpaceX',
            images: '#',
            reserved: false,
          },
          {
            id: 2,
            name: 'Atlas V',
            description: 'A rocket developed by United Launch Alliance',
            images: '#',
            reserved: false,
          },
        ],
        isFetched: true,
      },
    });
    store.dispatch(reserveRocket(1));
  });
  it('should render component with a list of rockets', () => {
    render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );

    const headings = screen.queryAllByRole('heading', { name: /rockets/i });
    expect(headings.length).toBe(1);

    const rocketNames = screen.getAllByRole('heading', { level: 2 });
    expect(rocketNames.length).toBe(2);

    const rocketImages = screen.getAllByRole('img');
    expect(rocketImages.length).toBe(2);
  });

  it('test for Rockets component with button click', () => {
    const reservebtn = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(reservebtn).toMatchInlineSnapshot(`
Object {
  "asFragment": [Function],
  "baseElement": <body>
    <div>
      <div>
        <h1>
          Rockets
        </h1>
        <div
          class="rocket-list-item"
        >
          <img
            alt="Falcon 9"
            class="rocket-image"
          />
          <div
            class="rocket-info"
          >
            <h2 />
            <p>
               
              A reusable rocket developed by SpaceX
            </p>
            <button
              class="rocketreserved-btn"
              type="button"
            >
              Reserve rocket
            </button>
          </div>
        </div>
        <div
          class="rocket-list-item"
        >
          <img
            alt="Atlas V"
            class="rocket-image"
          />
          <div
            class="rocket-info"
          >
            <h2 />
            <p>
               
              A rocket developed by United Launch Alliance
            </p>
            <button
              class="rocketreserved-btn"
              type="button"
            >
              Reserve rocket
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>,
  "container": <div>
    <div>
      <h1>
        Rockets
      </h1>
      <div
        class="rocket-list-item"
      >
        <img
          alt="Falcon 9"
          class="rocket-image"
        />
        <div
          class="rocket-info"
        >
          <h2 />
          <p>
             
            A reusable rocket developed by SpaceX
          </p>
          <button
            class="rocketreserved-btn"
            type="button"
          >
            Reserve rocket
          </button>
        </div>
      </div>
      <div
        class="rocket-list-item"
      >
        <img
          alt="Atlas V"
          class="rocket-image"
        />
        <div
          class="rocket-info"
        >
          <h2 />
          <p>
             
            A rocket developed by United Launch Alliance
          </p>
          <button
            class="rocketreserved-btn"
            type="button"
          >
            Reserve rocket
          </button>
        </div>
      </div>
    </div>
  </div>,
  "debug": [Function],
  "findAllByAltText": [Function],
  "findAllByDisplayValue": [Function],
  "findAllByLabelText": [Function],
  "findAllByPlaceholderText": [Function],
  "findAllByRole": [Function],
  "findAllByTestId": [Function],
  "findAllByText": [Function],
  "findAllByTitle": [Function],
  "findByAltText": [Function],
  "findByDisplayValue": [Function],
  "findByLabelText": [Function],
  "findByPlaceholderText": [Function],
  "findByRole": [Function],
  "findByTestId": [Function],
  "findByText": [Function],
  "findByTitle": [Function],
  "getAllByAltText": [Function],
  "getAllByDisplayValue": [Function],
  "getAllByLabelText": [Function],
  "getAllByPlaceholderText": [Function],
  "getAllByRole": [Function],
  "getAllByTestId": [Function],
  "getAllByText": [Function],
  "getAllByTitle": [Function],
  "getByAltText": [Function],
  "getByDisplayValue": [Function],
  "getByLabelText": [Function],
  "getByPlaceholderText": [Function],
  "getByRole": [Function],
  "getByTestId": [Function],
  "getByText": [Function],
  "getByTitle": [Function],
  "queryAllByAltText": [Function],
  "queryAllByDisplayValue": [Function],
  "queryAllByLabelText": [Function],
  "queryAllByPlaceholderText": [Function],
  "queryAllByRole": [Function],
  "queryAllByTestId": [Function],
  "queryAllByText": [Function],
  "queryAllByTitle": [Function],
  "queryByAltText": [Function],
  "queryByDisplayValue": [Function],
  "queryByLabelText": [Function],
  "queryByPlaceholderText": [Function],
  "queryByRole": [Function],
  "queryByTestId": [Function],
  "queryByText": [Function],
  "queryByTitle": [Function],
  "rerender": [Function],
  "unmount": [Function],
}
`);
  });
});
