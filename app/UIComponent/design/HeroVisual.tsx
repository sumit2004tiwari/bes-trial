"use client";
import { useState } from "react";
import Image from "next/image";
import type { HomeCarouselSlide } from "@/app/homepage/types";
import { Icon } from "./Icons";
import { resourceUrl } from "./resource-url";

export default function HeroVisual({ slides }: { slides: HomeCarouselSlide[] }) {
  const fallback: HomeCarouselSlide[] = [{ imageUrl: "/Images/homepage_exclusive_images/9J4A7583.jpg", altText: "Broadcast professionals at a BES EXPO conference" }];
  const images = slides.length ? slides : fallback;
  const [index, setIndex] = useState(0);
  const slide = images[index % images.length];
  const picture = <Image key={slide.imageUrl} src={slide.imageUrl} alt={slide.altText || "BES EXPO broadcast and media technology event"} fill sizes="(max-width: 900px) 92vw, 48vw" priority className="hero-photo" />;
  return <div className="hero-visual">
    <div className="hero-image-wrap">{slide.clickUrl ? <a href={resourceUrl(slide.clickUrl)} target={slide.target || "_self"} rel={slide.target === "_blank" ? "noopener noreferrer" : undefined} className="hero-image-link">{picture}</a> : picture}<div className="hero-image-shade" />
      <div className="hero-photo-label"><span className="live-dot" />The broadcast community, together.</div>
      <div className="hero-image-caption"><span>Ideas. Innovation. Impact.</span><p>A shared vision.<br />A connected future.</p></div>
      {images.length > 1 && <div className="hero-slide-controls"><span aria-live="polite">{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span><button aria-label="Previous event photo" onClick={() => setIndex((index - 1 + images.length) % images.length)}><Icon name="arrow" style={{ transform: "rotate(180deg)" }} /></button><button aria-label="Next event photo" onClick={() => setIndex((index + 1) % images.length)}><Icon name="arrow" /></button></div>}
    </div>
    <div className="hero-edition"><Icon name="broadcast" width={30} height={30} /><div><strong>One industry. Endless possibilities.</strong><span>International conference & exhibition</span></div></div>
    <div className="hero-visual-corner" aria-hidden="true">BES / INDIA</div>
  </div>;
}
