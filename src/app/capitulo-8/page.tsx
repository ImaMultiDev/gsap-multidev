"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo8() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-8")!;
  return <ChapterLayout chapter={chapter} />;
}
