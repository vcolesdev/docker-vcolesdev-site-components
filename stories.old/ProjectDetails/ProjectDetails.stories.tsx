import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { ProjectDetails } from "./ProjectDetails";

const meta: Meta<typeof ProjectDetails> = {
  component: ProjectDetails,
  title: "Site/ProjectDetails",
  args: {
    name: "Example Project Name",
    subtitle: "This is a project subtitle.",
    desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo`,
    link: "/",
    linkText: "Link to Project",
    tags: ["react", "typescript", "tailwindcss"],
  },
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
    subtitle: {
      control: {
        type: "text",
      },
    },
    desc: {
      control: {
        type: "text",
      },
    },
    link: {
      control: {
        type: "text",
      },
    },
    linkText: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectDetails>;

// Playground
export const Playground: Story = {
  render: (args) => <ProjectDetails {...args} />,
};

// Example Project
export const ExampleProject: Story = {
  render: (args) => <ProjectDetails {...args} />,
};

// With Breadcrumbs
export const WithBreadcrumbs: Story = {
  render: (args) => (
    <>
      <Breadcrumbs
        extraClasses="ms-2"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/" },
          { label: "Example Project Name", href: "/" },
        ]}
      />
      <ProjectDetails {...args} />
    </>
  ),
};
