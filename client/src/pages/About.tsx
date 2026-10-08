import { ArrowUpRight, Waves } from "lucide-react";
import { Link } from "wouter";
import { SITE_CONTENT } from "../content";
import { PublicLayout, SectionEyebrow, WindowChrome } from "../components/SiteLayout";

export default function About() {
  const profileLine = [SITE_CONTENT.location, SITE_CONTENT.role].filter(Boolean).join(" · ");

  return (
    <PublicLayout>
      <section className="spatial-page-stage spatial-about-page">
        <div className="spatial-page-utility"><span>PROFILE / 01</span><span>TERMINAL VIEW · READ ONLY</span></div>
        <article className="spatial-page-window">
          <WindowChrome title="~/PROFILE/CREATOR.BIO" />
          <div className="spatial-page-body">
            <p className="spatial-terminal-prompt">&gt; open ~/profile/creator.txt <Waves size={12} aria-hidden="true" /></p>
            <div className="spatial-about-grid">
              <figure className="spatial-about-art">
                <img src={SITE_CONTENT.aboutImage} alt={SITE_CONTENT.aboutImageAlt} />
                <figcaption>{SITE_CONTENT.aboutImageCaption}</figcaption>
              </figure>
              <div className="spatial-about-copy">
                <p className="spatial-profile-name">{SITE_CONTENT.name}</p>
                <p className="spatial-profile-role">{profileLine}</p>
                <SectionEyebrow>CREATIVE PROFILE</SectionEyebrow>
                <p>{SITE_CONTENT.aboutLead}</p>
                {SITE_CONTENT.aboutParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                <div className="spatial-focus-grid">
                  {SITE_CONTENT.focusAreas.map((item, index) => (
                    <div className="spatial-focus-chip" key={item}><span>FIELD / 0{index + 1}</span>{item}</div>
                  ))}
                </div>
                <Link href="/work" className="spatial-page-link">관심 분야 열기 <ArrowUpRight size={14} /></Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </PublicLayout>
  );
}
