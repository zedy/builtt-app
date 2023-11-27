/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-extraneous-dependencies */
// libs
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// https://testing-library.com/docs/react-testing-library/example-intro
// https://testing-library.com/docs/ecosystem-jest-dom/

// dev written
import App from '../App';

describe('App', () => {
  it('Renders "code goes here" string', () => {
    render(<App />);
    // @ts-ignore
    expect(screen.getByRole('heading')).toHaveTextContent('code goes here');
  });

  it('Renders 404', () => {
    render(
      <MemoryRouter initialEntries={['/some-made-up-route']}>
        <App />
      </MemoryRouter>
    );
    // @ts-ignore
    expect(screen.getByRole('heading')).toHaveTextContent('404: not found');
  });
});
