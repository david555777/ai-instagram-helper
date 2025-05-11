export async function POST(request) {
  const { imageUrl } = await request.json();

  // Здесь вы позже подключите реальный AI backend
  return new Response(
    JSON.stringify({
      object: 'Cat',
      caption: 'A cute cat sitting on a window.',
      hashtags: '#cat #cute #aihelper',
    }),
    { status: 200 }
  );
}
