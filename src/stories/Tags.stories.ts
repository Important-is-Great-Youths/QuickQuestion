import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Tags from '@/components/common/Tags/Tags'

const meta = {
  title: "Tags",
  component: Tags,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};
