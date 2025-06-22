"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo10() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-10")!;
  return <ChapterLayout chapter={chapter} />;
}
