import { getFiles } from "@/lib/blog-utils";
import Feed from "@/components/Feed";

export default async function Page() {
  const data = await getFiles();
  if (data._tag === "Left") throw data.left;

  return (
    <div className="max-w-4xl px-4 sm:px-8 mx-auto">
      <Feed projects={data.right.projects} />
    </div>
  );
}
