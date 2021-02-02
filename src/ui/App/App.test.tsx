import { render, screen } from '@testing-library/react';
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

    render(<App />);
    const element = screen.getByText(/TODO/i);

    expect(element).toBeInTheDocument();
  });
})