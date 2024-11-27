import { posts } from "@/libs/posts"

export default function UserDetails({params}:{params:{id:string}}) {
  const id = params.id
  const post = posts.find(post=>post.id === parseInt(id))
  return (
    <>
    <h1 className="text-center text-3xl text-indigo-500 mb-2">{post?.name}, These are your Details.</h1>
    <div className="flex justify-center items-center flex-col text-lg m-2 p-4 shadow-lg rounded-lg">
      <p className="p-2">Name: {post?.name}</p>
      <p className="p-2">Course: {post?.course}</p>
      <p className="p-2">Home: {post?.home}</p>
      <p className="p-2">University: {post?.university}</p>
      <p className="p-2">Year of study: {post?.year}</p>
    </div>
    </>
  )
}
