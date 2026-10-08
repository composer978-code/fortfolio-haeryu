import { ArrowUpRight, BookOpenText, Clapperboard, FileText, Image as ImageIcon, LockKeyhole } from "lucide-react";
import { Link } from "wouter";
import { SITE_CONTENT } from "../content";
import { PublicLayout, SectionEyebrow, WindowChrome } from "../components/SiteLayout";

const ARCHIVE_ITEMS = [
  { kind: "image", title: "HAERYU / CURRENT STUDY", summary: "음악과 이미지가 만나는 작업 기록", icon: ImageIcon },
  { kind: "content", title: "CONTENT / HOOK", summary: "짧은 시간 안에 시선을 붙잡는 콘텐츠 구조를 연구합니다.", icon: Clapperboard },
  { kind: "note", title: "FIELD NOTE / 01", summary: "관찰 → 기획 → 제작 → 반응 → 다시 편집", icon: BookOpenText },
  { kind: "file", title: "PORTFOLIO / WORKLOG", summary: "작곡, 영상, 콘텐츠 기획과 관련된 작업 기록", icon: FileText },
];

export default function Archive() {
  return (
    <PublicLayout>
      <section className="spatial-window-page archive-page">
        <WindowChrome label="PRIVATE ARCHIVE / PUBLIC VIEW" index="04" />
        <div className="archive-page-head">
          <div>
            <SectionEyebrow>ARCHIVE / SELECTED RECORDS</SectionEyebrow>
            <h1>작업과 생각을<br /><em>기록합니다.</em></h1>
          </div>
          <p>기존 서버형 비공개 아카이브 대신, GitHub Pages에서 바로 열리는 공개 포트폴리오 기록으로 구성했습니다.</p>
        </div>
        <div className="archive-grid">
          {ARCHIVE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="archive-item-card" key={item.title}>
                <div className="archive-item-visual">
                  {index === 0 ? <img src={SITE_CONTENT.aboutImage} alt="작업 이미지" /> : <div className="archive-item-placeholder"><Icon size={28} /><small>{item.kind.toUpperCase()}</small></div>}
                  <span className="archive-kind-chip">RECORD / 0{index + 1}</span>
                </div>
                <div className="archive-item-copy">
                  <div className="archive-item-meta"><span>FIELD NOTE</span><span>2026</span></div>
                  <h3>{item.title}</h3>
                  <p className="archive-item-summary">{item.summary}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="archive-public-note">
          <LockKeyhole size={16} />
          <span>서버가 필요한 로그인·업로드 기능은 GitHub Pages 특성상 제외했습니다.</span>
          <Link href="/work">FIELDS 보기 <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </PublicLayout>
  );
}
