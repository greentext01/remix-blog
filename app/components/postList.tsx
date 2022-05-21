import { Link } from "@remix-run/react";
import type { Post } from "../routes/posts/index";

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
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
  );
}
