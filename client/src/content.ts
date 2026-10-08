export const SITE_CONTENT = {
  // Edit these public-facing profile details here.
  name: "박해류",
  brandName: "HAERYU",
  initials: "HR",
  role: "크리에이터 · 음악 × 비주얼",
  location: "",
  email: "",
  headline: "음악과 이미지로, 기억되는 장면을.",
  intro:
    "오래 이어온 작곡을 중심에 두고 영상과 콘텐츠 기획을 연결합니다. 상품·브랜드·소비자 경험이 만나는 지점을 관찰하고 있어요.",
  aboutLead: "서로 다른 감각이 만나는 지점에서, 나만의 장면을 만듭니다.",
  aboutParagraphs: [
    "작곡을 오래 이어오며 쌓아온 음악적 감각을 영상·스타일링·인터넷 콘텐츠로 확장하고 있습니다. 음악과 비주얼을 따로 두기보다 하나의 인상으로 기억될 장면을 만들고 싶습니다.",
    "관심은 상품 기획에서 브랜드, 콘텐츠, 마케팅, 소비자 경험으로 이어지는 교차점에 있습니다. 일본어와 영상, 음악을 조합한 콘텐츠 콘셉트도 탐색하고 있습니다.",
  ],
  focusAreas: ["음악 × 비주얼", "영상 · 콘텐츠", "브랜드 × 경험", "일본어 × 스토리"],
  heroImage: "/media/haeryu-wave-hero.webp",
  heroCaption: "SOUND / IMAGE / EXPERIENCE",
  aboutImage: "/media/haeryu-wave-detail.webp",
  aboutImageAlt: "검은 바탕 위에 은빛과 아이스 블루로 흐르는 추상적인 파도",
  aboutImageCaption: "HAERYU / CURRENT STUDY",
  currentLabel: "NOW / CREATIVE FIELD",
  creativeLoop: ["관찰", "기획", "제작", "반응", "다시 편집"],
  creativeFields: [
    {
      number: "01",
      marker: "SOUND → IMAGE",
      title: "음악에서 시작",
      description:
        "오래 이어온 작곡을 중심에 두고 영상·스타일링·분위기를 한 장면으로 엮습니다.",
    },
    {
      number: "02",
      marker: "CONTENT / HOOK",
      title: "1초의 기억",
      description:
        "짧은 시간 안에 시선을 붙잡고, 오래 기억에 남는 장면과 서사를 탐구합니다.",
    },
    {
      number: "03",
      marker: "PRODUCT → EXPERIENCE",
      title: "제품에서 경험까지",
      description:
        "상품 기획·브랜드·콘텐츠·마케팅·소비자 반응이 만나는 흐름에 관심이 있습니다.",
    },
    {
      number: "04",
      marker: "JAPANESE / VIDEO / MUSIC",
      title: "언어를 넘는 조합",
      description:
        "일본어, 영상, 음악을 하나의 콘텐츠 콘셉트로 연결하는 방향을 살펴봅니다.",
    },
  ],
};

export type CreativeField = (typeof SITE_CONTENT.creativeFields)[number];
