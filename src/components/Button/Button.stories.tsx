
import { Meta } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

export const Primary = {
  args: {
    label: "Button",
  },
};
