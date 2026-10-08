import { ArrowUpRight, AudioLines, Clapperboard, Languages, PackageOpen } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONTENT } from "../content";
import { PublicLayout, SectionEyebrow, WindowChrome } from "../components/SiteLayout";

const icons = [AudioLines, Clapperboard, PackageOpen, Languages];

export default function Work() {
  return (
    <PublicLayout>
      <section className="spatial-page-stage spatial-work-page">
        <div className="spatial-page-utility"><span>FIELD DIRECTORY / 04</span><span>PERSONAL INTERESTS · NOT CLIENT WORK</span></div>
        <article className="spatial-page-window">
          <WindowChrome title="~/DESK/FIELDS.INDEX" />
          <div className="spatial-page-body">
            <SectionEyebrow>SOUND · IMAGE · EXPERIENCE</SectionEyebrow>
            <h1 className="spatial-page-title">관심의 <em>필드</em></h1>
            <p className="spatial-page-lead">{SITE_CONTENT.intro}</p>
            <div className="spatial-field-list">
              {SITE_CONTENT.creativeFields.map((field, index) => {
                const Icon = icons[index] ?? AudioLines;
                return (
                  <motion.article
                    key={field.number}
                    className="spatial-field-card"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, delay: index * 0.045, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <span>{field.number}</span>
                    <div>
                      <small>{field.marker}</small>
                      <h2>{field.title}</h2>
                      <p>{field.description}</p>
                    </div>
                    <Icon className="spatial-field-watermark" size={44} strokeWidth={1.1} aria-hidden="true" />
                    <ArrowUpRight className="spatial-field-arrow" size={14} aria-hidden="true" />
                  </motion.article>
                );
              })}
            </div>
            <p className="spatial-work-note">완료된 프로젝트 목록은 제공되지 않아 작업 실적을 가정하지 않고, 프로필에 담긴 관심 방향만 정리했습니다.</p>
          </div>
        </article>
      </section>
    </PublicLayout>
  );
}
