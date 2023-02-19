import React from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (

    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500 rounded-lg"  style={{backgroundImage: `url(${urlFor(post.coverImage).url()})`}}>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-500 to-gray-900 rounded-lg">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
          <div>
            <p className="font-bold">{post.title}</p>
            <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
            {post.categories.map((category) => (
              <div className="bg-black text-center text-white px-3 py-1 rounded-lg text-sm font-semibold]">
                <p>{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 flex-1">
        <p className="m-4 text-lg font-bold">{post.description}</p>
      </div>

    </div>
  );
};

export default PostCard;
