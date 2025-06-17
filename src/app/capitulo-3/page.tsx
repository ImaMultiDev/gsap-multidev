"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo3() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-3")!;

  return <ChapterLayout chapter={chapter} />;
}
