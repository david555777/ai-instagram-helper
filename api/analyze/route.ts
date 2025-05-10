import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("image");

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Файл не найден" }, { status: 400 });
  }

  // В реальности: обработка файла и вызов AI здесь
  // Сейчас: просто возвращаем фейковый caption
  return NextResponse.json({
    caption: "AI: Потрясающее фото! 📸 Подходит для бренда или поста.",
  });
}
