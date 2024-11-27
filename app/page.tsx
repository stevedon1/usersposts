
import { posts } from "@/libs/posts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-center mb-2 text-indigo-500 text-4xl">dynamic routes</h1>
      <ul className="flex justify-center items-center flex-col">
        {posts.map(post=>(
          <Link href={`${post.id}`}>
            <li className="shadow-md p-4 m-4 rounded-md" key={post.id}>
            <p className="font-bold text-3xl">{post.name}</p>
            <p>{post.name} comes from {post.home} and takes the following course: {post.course}</p>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
