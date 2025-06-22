"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo5() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-5")!;
  return <ChapterLayout chapter={chapter} />;
}
