import { createClient } from "contentful";

// 1. 클라이언트 생성 (이 부분이 꼭 있어야 합니다!)
export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

// 2. 데이터 가져오기 함수
export async function getGalleryPosts() {
  const entries = await contentfulClient.getEntries({
    content_type: "parkmedia", // 모델 ID (소문자 확인!)
    order: "fields.order",     // 순서 정렬
  });
  return entries.items;
}