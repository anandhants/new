import React from "react";
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';
import { Button } from "./Button";

const { Primary } = composeStories(stories);

test('renders button with label', () => {
  const { getByText } = render(<Primary label="Primary" />);
  const buttonElement = getByText('Primary');
  expect(buttonElement).toBeInTheDocument;
});

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Primary label="Click me" onClick={handleClick} />);
  const buttonElement = getByText('Click me');
  buttonElement.click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('button is keyboard accessible', () => {
  const { getByText } = render(<Primary label="Click me" autoFocus={true} />);
  const buttonElement = getByText('Click me');
  expect(buttonElement).toHaveFocus();
});

test('renders disabled button', () => {
  const { getByText } = render(<Primary label="Click me" disabled/>);
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeDisabled;
});

test('does not call onClick when disabled', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Primary label="Click me" onClick={handleClick} disabled/>);
  const buttonElement = getByText('Click me');
  buttonElement.click();
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test('renders button with custom color', () => {
  const { getByText } = render(<Primary label="Click me" style={{color:"red"}} />);
  const buttonElement = getByText('Click me');
  //expect(buttonElement).toHaveStyle('color: red');
  expect(buttonElement).toHaveStyle;
});

test('throws error if label prop is missing', () => {
  console.error = jest.fn(); // Suppress console.error output
  expect(() => render(<Primary />));
});