import { render, screen } from '@testing-library/react';
import TransferCoins from './Crypto/transfer-coins';
import CryptoExchangeViewer from './Crypto/exchange-dashboard';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';


test('renders transfer coins page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <TransferCoins />
      </BrowserRouter>
    </Provider>
  );
  const titleElements = screen.getAllByText("Send Crypto Coins");
  const titleElement = titleElements[0];
  expect(titleElement).toBeInTheDocument();
});


test('renders Coins Information Page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CryptoExchangeViewer />
      </BrowserRouter>
    </Provider>
  );
  const titleElements = screen.getAllByText("Coins Info");
  const titleElement = titleElements[0];
  expect(titleElement).toBeInTheDocument();
});

test('renders Main app non loggedIn page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const titleElements = screen.getAllByText("Please log in or signup");
  const titleElement = titleElements[0];
  expect(titleElement).toBeInTheDocument();
});

