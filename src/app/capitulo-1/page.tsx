"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo1() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-1")!;

  return <ChapterLayout chapter={chapter} />;
}
