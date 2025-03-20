import type { CollectionEntry } from "astro:content";

export function getFormattedDate(
  date: Date | undefined,
  options?: Intl.DateTimeFormatOptions
): string {
  if (date === undefined) {
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat("en-GB", {
    ...({
      day: "numeric",
      month: "short",
      year: "numeric",
    } as Intl.DateTimeFormatOptions),
    ...options,
  }).format(date);
}

export function collectionDateSort(
  a: CollectionEntry<"post">,
  b: CollectionEntry<"post">
) {
  return b.data.publishDate.getTime() - a.data.publishDate.getTime();
}
