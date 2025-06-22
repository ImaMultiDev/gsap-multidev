"use client";

import { chapters } from "../../data/chapters";
import ChapterLayout from "../../components/ChapterLayout";

export default function Capitulo12() {
  const chapter = chapters.find((ch) => ch.id === "capitulo-12")!;
  return <ChapterLayout chapter={chapter} />;
}
