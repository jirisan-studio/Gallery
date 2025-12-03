// 👇 [수정됨] 중괄호 {} 를 써서 createClient만 콕 집어 가져옵니다.
import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getGalleryPosts() {
  const entries = await contentfulClient.getEntries({
    // 👇 사용자님이 만드신 모델 ID (대소문자 정확해야 합니다!)
    content_type: "parkmedia", 
  });
  return entries.items;
}