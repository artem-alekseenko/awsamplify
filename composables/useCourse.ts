import type { CourseOutline } from "~~/server/api/course/meta.get";
import { useFetchWithCache } from "#build/imports";

export default async () => useFetchWithCache<CourseOutline>("/api/course/meta");
