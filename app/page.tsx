// import { client } from "@/sanity/lib/client";



// async function getData(){
//   const fetchData = await client.fetch(``)
//   return fetchData
// }
// export default async function Home(){
//   const data = await getData
//   return(
//     <div></div>
//   )
// }

import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/components/Blog";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: any, i) => <BlogItem key={i} blog={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
 