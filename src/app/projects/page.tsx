import Feed from "@/components/Feed";
import { sortByDate } from "@/lib/date";
import { allProjects } from "contentlayer/generated";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const featured = allProjects.filter((item) => item.featured);

  return (
    <div className="max-w-4xl px-4 sm:px-8 mx-auto">
      <div className="flex items-center justify-center mb-12 gap-4">
        {featured.map((project) => (
          <Link
            href={project.url ?? project.path}
            key={project.slug}
            className="p-4 relative slide-in-from-bottom-5 border rx-border-neutral-6 group animate-in fade-in hover:rx-border-neutral-8 transition-colors duration-150 rx-bg-neutral-2 rounded max-h-[150px] max-w-[300px]"
          >
            <h3>{project.title}</h3>
            <p>{project.description.split(" ").slice(0, 8).join(" ")}...</p>
            {project.url && (
              <div className="group-hover:opacity-100 opacity-0 -bottom-2.5 -right-2.5 absolute transition-opacity floating-card duration-150 rounded-full py-2 p-1">
                <ExternalLink className="h-3" />
              </div>
            )}
          </Link>
        ))}
      </div>
      <Feed projects={allProjects.sort(sortByDate)} />
    </div>
  );
}
