import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Post } from "./Post";
import examplePost from "./example-post.mdx";

const meta: Meta<typeof Post> = {
  title: "Site/Post",
  component: Post,
  args: {
    content: "This is a post",
  },
};

export default meta;

type Story = StoryObj<typeof Post>;

// Default
export const Default: Story = {
  render: (args) => <Post {...args} />,
};
