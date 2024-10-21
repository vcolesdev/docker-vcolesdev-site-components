import { iconPaths as paths } from "@/src/anim/iconPaths";
import { AnimatedIcon } from "@/stories/AnimatedIcon/AnimatedIcon";

/**
 * - Github
 * - LinkedIn
 * - Message
 */

export const IconGithub = () => <AnimatedIcon iconName="brand-github" paths={paths.github} />;

export const IconLinkedIn = () => <AnimatedIcon iconName="brand-linkedin" paths={paths.linkedin} />;

export const IconMessage = () => <AnimatedIcon iconName="message-share" paths={paths.message} />;
