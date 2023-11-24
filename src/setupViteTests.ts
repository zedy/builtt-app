/* eslint-disable import/no-extraneous-dependencies */
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { expect, afterEach } from 'vitest';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// https://testing-library.com/docs/react-testing-library/example-intro
// https://testing-library.com/docs/ecosystem-jest-dom/
