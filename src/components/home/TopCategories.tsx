import Link from "next/link";

import { Button } from "../ui/button";
import { ACTIVE_CATEGORIES } from "@/app/blog/utils";

export default function TopCategories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
      {ACTIVE_CATEGORIES.map(
        (category) => (
          <Button
            key={category.title}
            variant={"secondary"}
            className="hover:scale-110 transition-all"
            asChild
          >
            <Link href={category.href}>{category.title}</Link>
          </Button>
        )
      )}
    </div>
  );
}
