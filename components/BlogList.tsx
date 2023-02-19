"use client";
import { useState } from "react";
import ClientSideRoute from "./ClientSideRoute";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const items = showAll ? posts : posts.slice(0, 4);

  return (
    <div className="relative z-0">
      <hr className="mb-10" />
        <div className="p-5 mx-auto bg-black text-gray-100 rounded-lg">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                {items.map((item) => (
                    <>
                        <ClientSideRoute
                            route={`/post/${item.slug.current}`}
                            key={item._id}
                        >
                            <PostCard post={item} />
                        </ClientSideRoute>
                    </>
                ))}
            </div>
        </div>
      <div className="flex justify-center p-5">
        {!showAll ? (
          <button
            type="button"
            className="group relative overflow-hidden bg-white px-2 py-3 text-sm md:text-base rounded-lg"
            onClick={handleClick}
          >
            <div className="absolute inset-0 w-3  hover:bg-amber-300 group-hover:w-full"></div>
            <span className="relative text-black ">
              Cargar más articulos
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="bg-[#8F00FF] text-[#FFF] hover:bg-[#483248] px-2 py-3 text-sm md:text-base rounded-lg transition-all duration-[250ms] ease-out"
            onClick={handleClick}
          >
            Todos los articulos fueron cargados
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogList;
