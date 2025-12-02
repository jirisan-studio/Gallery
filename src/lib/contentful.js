import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getGalleryPosts() {
  const entries = await contentfulClient.getEntries({
    content_type: "Parkmedia", // 아까 만든 모델 ID
  });
  return entries.items;
}