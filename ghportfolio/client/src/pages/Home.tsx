import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, Minimize2 } from "lucide-react";
import gsap from "gsap";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { SITE_CONTENT } from "../content";
import { PublicLayout, SpatialDock, WindowChrome } from "../components/SiteLayout";
import SpatialLoadingScreen from "../components/SpatialLoadingScreen";
import { moveFieldIndex, normalizeFieldIndex } from "../spatial-navigation";

const artwork = [SITE_CONTENT.heroImage, SITE_CONTENT.aboutImage, SITE_CONTENT.heroImage, SITE_CONTENT.aboutImage];
const artworkPositions = ["54% center", "center center", "76% center", "22% center"];

export default function Home() {
  const stageRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowOpen, setWindowOpen] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [canDrag, setCanDrag] = useState(false);
  const wheelLock = useRef(false);

  const selectField = useCallback((index: number) => {
    setActiveIndex(normalizeFieldIndex(index, SITE_CONTENT.creativeFields.length));
    setWindowOpen(true);
    setMinimized(false);
  }, []);
  const moveField = useCallback((direction: number) => {
    setActiveIndex((current) => moveFieldIndex(current, direction, SITE_CONTENT.creativeFields.length));
    setWindowOpen(true);
    setMinimized(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 760px) and (pointer: fine)");
    const update = () => setCanDrag(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    const element = contentRef.current;
    if (!element) return;
    gsap.killTweensOf(element);
    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 14, filter: "blur(4px)" },
      { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.48, ease: "power3.out", clearProps: "filter" },
    );
    return () => gsap.killTweensOf(element);
  }, [activeIndex, windowOpen, minimized]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return;
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        moveField(1);
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        moveField(-1);
      } else if (event.key === "Escape" && windowOpen) {
        setWindowOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [moveField, windowOpen]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let releaseTimer = 0;
    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 760 || Math.abs(event.deltaY) < 24 || wheelLock.current) return;
      event.preventDefault();
      wheelLock.current = true;
      moveField(event.deltaY > 0 ? 1 : -1);
      releaseTimer = window.setTimeout(() => { wheelLock.current = false; }, 520);
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      stage.removeEventListener("wheel", onWheel);
      window.clearTimeout(releaseTimer);
    };
  }, [moveField]);

  const field = SITE_CONTENT.creativeFields[activeIndex];

  return (
    <PublicLayout homeMode dock={<SpatialDock homeMode activeFieldIndex={activeIndex} onFieldSelect={selectField} />}>
      <SpatialLoadingScreen />
      <section ref={stageRef} className="spatial-desktop" aria-label="인터랙티브 크리에이티브 데스크">
        <div className="spatial-coordinate" aria-hidden="true">
          <span>FIELD / {field.number}</span>
          <span className="coordinate-right">DRAG WINDOW · SCROLL OR USE ARROW KEYS</span>
        </div>

        <AnimatePresence mode="wait">
          {windowOpen && !minimized ? (
            <div className="window-anchor" key="workspace-anchor">
              <motion.article
                key={`field-${field.number}`}
                className={`spatial-window ${maximized ? "is-maximized" : ""}`}
                drag={canDrag && !maximized}
                dragConstraints={stageRef}
                dragElastic={0.035}
                dragMomentum={false}
                initial={{ opacity: 0, scale: 0.965, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.975, y: 9 }}
                transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                aria-label={`${field.marker} 창`}
              >
                <WindowChrome
                  title={field.marker}
                  onClose={() => setWindowOpen(false)}
                  onMinimize={() => setMinimized(true)}
                  onMaximize={() => setMaximized((value) => !value)}
                  maximized={maximized}
                />
                <div className="spatial-window-body" ref={contentRef}>
                  <div className={`spatial-window-art artwork-field-${field.number}`}>
                    <img src={artwork[activeIndex]} alt="" style={{ objectPosition: artworkPositions[activeIndex] }} />
                    <span className="art-orbit" aria-hidden="true" />
                    <div className="art-coordinate"><span>{field.marker}</span><span>{field.number} / 04</span></div>
                  </div>
                  <div className="spatial-window-info">
                    <div className="window-field-index"><span>PERSONAL FIELD / {field.number}</span><span>01—04</span></div>
                    <p className="spatial-eyebrow">{field.marker}</p>
                    <p className="window-field-description">{field.description}</p>
                    <div className="window-data-row">
                      <span>{SITE_CONTENT.focusAreas[activeIndex]}</span>
                      <span>{SITE_CONTENT.currentLabel}</span>
                    </div>
                    <div className="window-navigation">
                      <span className="window-nav-label">FIELD {field.number} / {String(SITE_CONTENT.creativeFields.length).padStart(2, "0")}</span>
                      <div className="window-nav-buttons">
                        <button type="button" onClick={() => moveField(-1)} aria-label="이전 관심 분야"><ArrowLeft size={15} /></button>
                        <button type="button" onClick={() => moveField(1)} aria-label="다음 관심 분야"><ArrowRight size={15} /></button>
                        <Link href="/work" aria-label="관심 분야 목록 열기" className="window-open-map"><ArrowUpRight size={15} /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          ) : null}
        </AnimatePresence>

        {minimized && windowOpen && (
          <button type="button" className="spatial-window-minimized" onClick={() => setMinimized(false)}>
            <Minimize2 size={13} aria-hidden="true" /><span>{field.marker}</span><span>RESTORE</span>
          </button>
        )}
        {!windowOpen && (
          <button type="button" className="spatial-window-closed" onClick={() => setWindowOpen(true)} aria-label="필드 창 다시 열기">
            <Maximize2 size={25} aria-hidden="true" /><span>{field.marker}</span>
          </button>
        )}
        <div className="spatial-desktop-hint" aria-hidden="true">WINDOWS ARE DRAGGABLE<br />FIELD CONTROL / DOCK</div>
      </section>
    </PublicLayout>
  );
}
