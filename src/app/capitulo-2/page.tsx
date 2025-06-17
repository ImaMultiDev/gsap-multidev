"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo2() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-2")!;

  return <ChapterLayout chapter={chapter} />;
}
