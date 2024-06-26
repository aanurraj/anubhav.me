import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITEDATA } from "@/data/siteData";
import { ProjectCard } from "@/components/project-card";
import { ThemeButton } from "@/components/theme-provider";

export default function Page() {
  return (
    <main className="container relative w-full mx-auto scroll-my-12 overflow-auto p-4 md:p-16 dark:bg-gray-950">
      <section className="mx-auto w-full max-w-2xl space-y-8 dark:bg-gray-950">
        <ThemeButton />
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{SITEDATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {SITEDATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={SITEDATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {SITEDATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground">
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`mailto:${SITEDATA.contact.email}`}>
                  <MailIcon className="size-4" />
                </a>
              </Button>
              {SITEDATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={SITEDATA.name} src={SITEDATA.avatarUrl} />
            <AvatarFallback>{SITEDATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {SITEDATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <h3 className="text-l font-bold">Languages</h3>
          <div className="flex flex-wrap gap-1">
            {SITEDATA.languages.map((language) => {
              return <Badge key={language}>{language}</Badge>;
            })}
          </div>
          <h3 className="text-l font-bold">Technologies</h3>
          <div className="flex flex-wrap gap-1">
            {SITEDATA.technologies.map((technologie) => {
              return <Badge key={technologie}>{technologie}</Badge>;
            })}
          </div>
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {SITEDATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {SITEDATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {SITEDATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                  <h4 className="font-mono text-sm leading-none">
                    Under Graduate College
                  </h4>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
      </section>
    </main>
  );
}
