import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addEventListener : function() {},
        removeEventListener : function() {}
    };
  };
  

  it('should show the text TODO', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId("header");

    expect(element).toBeInTheDocument();
  });
})