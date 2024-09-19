import { ACTIVE_CATEGORIES } from "@/app/blog/utils";
import { MainNav } from "./MainNav";

export default function MainNavEnhanced() {
    return <MainNav activeCategories={ACTIVE_CATEGORIES} />;
}