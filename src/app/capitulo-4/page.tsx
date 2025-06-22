"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo4() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-4")!;
  return <ChapterLayout chapter={chapter} />;
}
