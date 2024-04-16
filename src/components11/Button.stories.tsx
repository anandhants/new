import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { XIcon } from '@heroicons/react/solid';
import { withTests } from '@storybook/addon-jest';
//import results from '../../.jest-test-results.json';
import './tailwind.css';

const meta = {
  title: 'Components/Button',
  component: Button,
  //decorators: [withTests({ results:results })],
  parameters: {
    layout: 'centered',
    jest: ['Button.test.tsx']
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: <XIcon className="w-6 h-6 stroke-2" />,
    backgroundColor: "bg-gradient-to-t",
    className:"text-bluegray600 flex items-center justify-center h-11 w-11 text-sm font-bold rounded bg-gradient-to-t from-brgrdbtn1 to-brgrdbtn2 border border-brdrbtn1 shadow"
  }
};

