"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo6() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-6")!;
  return <ChapterLayout chapter={chapter} />;
}
