"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { SLIDER_CATEGORIES, SliderCategory, SlideCard } from "./constant";
import "./slider-card.model.scss";

const CARD_GAP = 16; // px — must match $card-gap in scss

// ─── Card layouts ────────────────────────────────────────────────────────────

function CardSingle({
  images,
  alts,
  description,
}: Pick<SlideCard, "images" | "alts" | "description">) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="sc-card__inner sc-card__inner--single">
      <Image
        src={images[0]}
        alt={alts[0]}
        fill
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, 33vw"
        className="sc-card__img"
      />
      {description && (
        <>
          <div className={`sc-card__overlay${showDesc ? " is-visible" : ""}`}>
            <p className="sc-card__desc">{description}</p>
          </div>
          <button
            className="sc-card__info-btn"
            onClick={() => setShowDesc((v) => !v)}
            aria-label={showDesc ? "Hide description" : "Show description"}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
              <line x1="7" y1="6.5" x2="7" y2="10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="7" cy="4.5" r="0.75" fill="currentColor" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

function CardGrid2x2({ images, alts }: Pick<SlideCard, "images" | "alts">) {
  return (
    <div className="sc-card__inner sc-card__inner--grid">
      {images.slice(0, 4).map((src, i) => (
        <div key={i} className="sc-card__cell">
          <Image
            src={src}
            alt={alts[i] ?? ""}
            fill
            sizes="(max-width: 480px) 50vw, 17vw"
            className="sc-card__img"
          />
        </div>
      ))}
    </div>
  );
}

function CardStack2({ images, alts }: Pick<SlideCard, "images" | "alts">) {
  return (
    <div className="sc-card__inner sc-card__inner--stack">
      {images.slice(0, 2).map((src, i) => (
        <div key={i} className="sc-card__cell">
          <Image
            src={src}
            alt={alts[i] ?? ""}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, 33vw"
            className="sc-card__img"
          />
        </div>
      ))}
    </div>
  );
}

function CardItem({ card }: { card: SlideCard }) {
  return (
    <article className="sc-card">
      {card.layout === "single" && (
        <CardSingle images={card.images} alts={card.alts} description={card.description} />
      )}
      {card.layout === "grid-2x2" && (
        <CardGrid2x2 images={card.images} alts={card.alts} />
      )}
      {card.layout === "stack-2" && (
        <CardStack2 images={card.images} alts={card.alts} />
      )}
    </article>
  );
}

// ─── Category slider ──────────────────────────────────────────────────────────

function CategorySlider({ category }: { category: SliderCategory }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const syncNavState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft + el.offsetWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    syncNavState();
    const el = trackRef.current;
    window.addEventListener("resize", syncNavState);
    el?.addEventListener("scroll", syncNavState, { passive: true });
    return () => {
      window.removeEventListener("resize", syncNavState);
      el?.removeEventListener("scroll", syncNavState);
    };
  }, [syncNavState]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    // Step = one card width + one gap
    const cardWidth = (el.offsetWidth - CARD_GAP * 2) / 3;
    el.scrollBy({ left: dir * (cardWidth + CARD_GAP), behavior: "smooth" });
  };

  return (
    <section className="sc-section" aria-label={category.title}>
      {/* ── Header ── */}
      <div className="sc-header">
        <div className="sc-header__left">
          <div className="sc-icon" aria-hidden="true">
            {category.iconSrc ? (
              <Image
                src={category.iconSrc}
                alt=""
                width={22}
                height={22}
                className="sc-icon__img"
              />
            ) : (
              <span className="sc-icon__initials">
                {category.title.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          <h3 className="sc-title">{category.title}</h3>
        </div>

        <div className="sc-header__right relative">
          <Link href={category.learnMoreHref} className="sc-learn-more">
            Learn More
          </Link>
          {/* <span className="sc-plus" aria-hidden="true">+</span> */}
          <div className="absolute size-10 top-7.5 right-[-30px]">
            <Image
              className="w-full object-cover"
              src="image/divider.svg"
              alt="wave logo"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Slider ── */}
      <div className="sc-slider-wrapper">
        <div
          ref={trackRef}
          className="sc-track"
          aria-label={`${category.title} project images`}
        >
          {category.slides.map((slide, i) => (
            <CardItem key={i} card={slide} />
          ))}
        </div>

        {/* Arrows — overlaid on mobile, below on desktop (CSS handles placement) */}
        <div className="sc-nav" role="group" aria-label="Slider navigation">
          <button
            className="sc-nav__btn sc-nav__btn--prev"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="Previous slide"
          >
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 1L1.5 7.5L8 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="sc-nav__btn sc-nav__btn--next"
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="Next slide"
          >
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L7.5 7.5L1 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function SliderCard() {
  return (
    <div className="sc-container">
      {SLIDER_CATEGORIES.map((category) => (
        <CategorySlider key={category.id} category={category} />
      ))}
    </div>
  );
}
