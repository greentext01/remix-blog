import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getPosts } from "~/models/post.server";

export interface Post {
  slug: string;
  title: string;
}

type LoaderData = {
  posts: Array<Post>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;
  console.log(posts);

  return (
    <main className="mx-auto max-w-4xl py-5">
      <h1 className="text-center text-4xl">Posts</h1>

      <div className="my-4 text-center">
        <Link
          to="admin"
          className="text-lg font-bold text-red-600 underline"
        >
          Admin
        </Link>
      </div>

      <ul>
        {posts.map((post: Post) => (
          <li key={post.slug}>
            <div className="mb-4 rounded-lg bg-gray-100 p-6 shadow-lg">
              <Link
                to={post.slug}
                className="text-xl font-medium text-blue-600 underline"
              >
                {post.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
