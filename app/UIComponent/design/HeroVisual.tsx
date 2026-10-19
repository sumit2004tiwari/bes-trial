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
  const activeIndex = index % images.length;
  const slide = images[activeIndex];
  const picture = <Image key={slide.imageUrl} src={slide.imageUrl} alt={slide.altText || "BES EXPO broadcast and media technology event"} fill sizes="(max-width: 900px) 92vw, 48vw" priority className="hero-photo" />;
  return <figure className="hero-visual"><div className="hero-image-wrap">{slide.clickUrl ? <a href={resourceUrl(slide.clickUrl)} target={slide.target || "_self"} rel={slide.target === "_blank" ? "noopener noreferrer" : undefined} className="hero-image-link">{picture}</a> : picture}</div><figcaption className="hero-photo-caption"><span>From the BES EXPO archive<br /><strong>Broadcast & media technology, in person.</strong></span>{images.length > 1 && <div className="hero-slide-controls"><span aria-live="polite" aria-atomic="true">{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span><button type="button" aria-label="Previous event photo" onClick={() => setIndex((activeIndex - 1 + images.length) % images.length)}><Icon name="arrow" style={{ transform: "rotate(180deg)" }} /></button><button type="button" aria-label="Next event photo" onClick={() => setIndex((activeIndex + 1) % images.length)}><Icon name="arrow" /></button></div>}</figcaption></figure>;
}
