
import type { Meta, StoryObj } from '@storybook/react';

import Button from "./Button";

const storyMeta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default storyMeta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    label: "Button",
  },
};
