"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo9() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-9")!;
  return <ChapterLayout chapter={chapter} />;
}
