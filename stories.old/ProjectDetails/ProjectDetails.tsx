import { Heading } from "../Heading/Heading";
import { Spacer } from "../Spacer/Spacer";
import { Tag } from "../Tag/Tag";
import { TextContent } from "../TextContent/TextContent";
import { styles } from "./ProjectDetails.styles";

interface ProjectDetailsApi {
  category?: string;
  desc?: string;
  linkText?: string;
  link?: string;
  name: string;
  subtitle?: string;
  tags?: string[] | ["react", "typescript", "tailwindcss"];
}

const text = {
  subtitle: "This is a project subtitle.",
  description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo`,
};

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="font-semibold font-body">
      Tags:{" "}
      <span className="inline-flex gap-x-4 ms-3">
        {tags?.map((tag) => <Tag key={tag} size="lg" tagContent={tag} />)}
      </span>
    </div>
  );
}

function ProjectLink({ link, linkText }: { link: string; linkText: string }) {
  const defaultLink = "/";
  const placeholder = "Link to Project";
  return (
    <div>
      <p className="font-semibold font-body">
        Link:{" "}
        <a className={styles.projectLink} href={link || defaultLink}>
          {linkText || placeholder}
        </a>
      </p>
    </div>
  );
}

function ProjectContent({ desc }: { desc: string }) {
  return (
    <div>
      <TextContent size="lg">{desc || text.description}</TextContent>
    </div>
  );
}

function ProjectHeader({ name, subtitle }: { name: string; subtitle: string }) {
  const placeholder = "Example Project Name";
  return (
    <header className="flex items-end gap-x-4">
      <Heading extraClasses={styles.heading} el="h3" size="md">
        {name || placeholder}
      </Heading>
      <p className={styles.subtitle}>{subtitle || text.subtitle}</p>
    </header>
  );
}

function ProjectContentWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.contentWrapper}>{children}</div>;
}

function ProjectDetailsContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.element}>{children}</div>;
}

const ProjectDivider = () => <div className={styles.divider} />;

const ProjectSpacer = () => <Spacer size="sm" />;

function ProjectDetails({ ...props }: ProjectDetailsApi) {
  return (
    <ProjectDetailsContainer>
      <ProjectContentWrapper>
        <ProjectHeader name={props.name} subtitle={props.subtitle} />
        <ProjectDivider />
        <ProjectContent desc={props.desc} />
        <ProjectSpacer />
        <ProjectLink link={props.link} linkText={props.linkText} />
        <ProjectSpacer />
        <ProjectTags tags={props.tags} />
      </ProjectContentWrapper>
    </ProjectDetailsContainer>
  );
}

export { ProjectDetails, ProjectDetailsApi };
