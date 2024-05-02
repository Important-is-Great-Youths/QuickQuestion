import { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/common/Pagination";

const meta = {
  title: "Pagination",
  component: Pagination
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "lg"
  }
};
