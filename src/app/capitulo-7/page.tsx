"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo7() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-7")!;
  return <ChapterLayout chapter={chapter} />;
}
