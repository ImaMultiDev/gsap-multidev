"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo11() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-11")!;
  return <ChapterLayout chapter={chapter} />;
}
