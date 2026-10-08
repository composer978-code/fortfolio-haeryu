import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { Link } from "wouter";
import { SITE_CONTENT } from "../content";
import { PublicLayout, SectionEyebrow, WindowChrome } from "../components/SiteLayout";

export default function Contact() {
  return (
    <PublicLayout>
      <section className="spatial-page-stage spatial-contact-page">
        <div className="spatial-page-utility"><span>CONTACT / 03</span><span>CHANNEL INTERFACE</span></div>
        <article className="spatial-page-window spatial-contact-window">
          <WindowChrome title="~/NETWORK/OPEN_CHANNEL" />
          <div className="spatial-page-body">
            <p className="spatial-terminal-prompt">&gt; contact --status</p>
            <SectionEyebrow>CREATIVE EXCHANGE</SectionEyebrow>
            <h1 className="spatial-page-title">다음 연결을 <em>기다립니다.</em></h1>
            <p className="spatial-page-lead">음악과 이미지, 콘텐츠와 경험이 만나는 아이디어를 위한 채널입니다.</p>
            <div className="spatial-contact-availability"><i aria-hidden="true" />{SITE_CONTENT.email ? "EMAIL CHANNEL / ACTIVE" : "EMAIL CHANNEL / NOT CONFIGURED"}</div>
            {SITE_CONTENT.email ? (
              <a className="spatial-contact-unset is-active" href={`mailto:${SITE_CONTENT.email}`}>
                <Mail size={16} aria-hidden="true" /><span>{SITE_CONTENT.email}</span><ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : (
              <div className="spatial-contact-unset">
                <Mail size={16} aria-hidden="true" /><span>연락 이메일은 아직 공개 설정되지 않았습니다.</span><code>NO PUBLIC ADDRESS</code>
              </div>
            )}
            <div className="spatial-contact-bottom">
              <span>{SITE_CONTENT.role}</span>
              <Link href="/work">관심 분야 보기 <ArrowDownRight size={13} /></Link>
            </div>
          </div>
        </article>
      </section>
    </PublicLayout>
  );
}
