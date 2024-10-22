import { Spacer } from "@/stories/Spacer/Spacer";
import { TextContent } from "@/stories/TextContent/TextContent";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Components/Header",
  args: {
    children: "Header content here",
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

// Default
export const Default: Story = {
  render: (args) => (
    <div>
      <Header {...args}>{args.children}</Header>
      <div className="max-w-4xl m-auto">
        <Spacer size="lg" />
        <TextContent size="xl">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat mi porttitor nisi, ornare ante sodales pharetra.
          Lectus duis massa gravida luctus lorem curae ligula. Rhoncus massa curabitur aptent eu ex; etiam elementum
          tristique tincidunt. Sit vel massa dis accumsan primis, rhoncus tempor cras. Nulla netus et cubilia efficitur
          posuere.
        </TextContent>
        <Spacer size="md" />
        <TextContent size="xl">
          Risus mus sociosqu pretium eleifend nullam, felis duis bibendum. Tempus porttitor hac convallis tempor
          vehicula lacinia litora auctor. Ultricies himenaeos leo nostra vivamus morbi conubia sapien sociosqu
          himenaeos? Porttitor eros velit nullam litora ullamcorper rhoncus faucibus purus. Penatibus penatibus donec
          nisi vitae litora. Aptent mauris et dis etiam odio nulla. Tincidunt eros sed purus cursus arcu ad ornare
          fermentum amet.
        </TextContent>
        <Spacer size="md" />
        <TextContent size="xl">
          Tortor consectetur lacinia ornare tempor; non est. Aptent massa sodales faucibus; dapibus natoque eros.
          Consectetur duis porta faucibus nostra nostra justo efficitur. Tellus conubia class odio iaculis facilisis
          augue nisl nibh sodales. Porta augue et dis ultricies facilisis faucibus auctor odio sollicitudin. Mauris
          augue ligula ipsum magnis fringilla volutpat. Praesent erat aptent primis ipsum purus condimentum. Est
          tristique quis a maximus; phasellus potenti in.
        </TextContent>
        <Spacer size="md" />
        <TextContent size="xl">
          Mus sapien condimentum dui at aliquet tempus. Ultricies augue leo maximus libero convallis curae; quis odio
          porta. Mus sit fames id purus fames purus proin. Aerat himenaeos hendrerit dapibus a vulputate pharetra ut
          est. Morbi orci eu odio venenatis iaculis varius. Quam nibh ullamcorper odio porttitor etiam; molestie amet
          quisque. Congue pharetra vitae tortor; vulputate posuere netus vehicula. Faucibus sapien suspendisse duis
          rhoncus ornare urna eu ultrices. Enim lorem lobortis cras ligula orci risus. Congue elementum vestibulum
          imperdiet facilisis ultrices rhoncus sed vitae tempor.
        </TextContent>
        <Spacer size="md" />
        <TextContent size="xl">
          Libero velit justo faucibus eros molestie, pharetra ridiculus placerat convallis. Adignissim ultricies cursus
          proin morbi. Bibendum interdum commodo orci cras lacinia ullamcorper. Leo laoreet torquent sodales torquent
          tristique vulputate. Suscipit nibh dignissim at sem per in. Enim faucibus maecenas lobortis risus sodales
          dapibus. Semper ac orci sem nunc tristique at consectetur class. Elementum felis blandit enim suspendisse nisl
          nibh feugiat.
        </TextContent>
      </div>
    </div>
  ),
};
