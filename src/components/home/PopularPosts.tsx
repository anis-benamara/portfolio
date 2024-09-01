import { popularPosts } from "@/lib/placeholder-data";
import { Icons } from "../Icons";

export default function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
        <li
          key={post.title}
          className="flex items-center group gap-2 cursor-pointer py-2"
        >
          <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
          <span>{post.title}</span>
        </li>
      ))}
    </ul>
  );
}
