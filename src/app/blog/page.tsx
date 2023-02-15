import { getFiles } from "@/lib/blog-utils";
import Feed from "@/components/Feed";

export default async function Page() {
  const data = await getFiles();
  if (data._tag === "Left") throw data.left;

  return (
    <div className="max-w-4xl p-8 mx-auto">
      <Feed posts={data.right.posts} />
    </div>
  );
}
