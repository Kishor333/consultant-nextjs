"use client";

import { useState } from "react";
import Image from "next/image";
import { AFFILIATIONS, AffiliationItem } from "../constant";
import "./affiliation-card.modal.scss";

// ─── Single card ──────────────────────────────────────────────────────────────

const TRUNCATE_LENGTH = 200;

function AffiliationCard({ item }: { item: AffiliationItem }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = item.description.length > TRUNCATE_LENGTH;
  const displayText =
    !expanded && isLong
      ? item.description.slice(0, TRUNCATE_LENGTH).trimEnd() + "..."
      : item.description;

  return (
    <div className="aff-card">
      {/* Left — text */}
      <div className="aff-card__body">
        <h3 className="aff-card__title text-gray-main">{item.name}</h3>
        <p className="aff-card__desc">{displayText}</p>

        {isLong && (
          <button
            className="aff-card__toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "SHOW LESS" : "SHOW MORE"}
            <svg
              className={`aff-card__chevron ${expanded ? "aff-card__chevron--up" : ""}`}
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L6 7L11 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Right — logo */}
      <div className="aff-card__logo-wrap">
        <Image
          src={item.logoSrc}
          alt={item.logoAlt}
          width={item.logoWidth}
          height={item.logoHeight}
          className="aff-card__logo"
        />
      </div>
    </div>
  );
}

// ─── Dot indicator ────────────────────────────────────────────────────────────

function DotNav({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div
      className="aff-nav__dots"
      role="tablist"
      aria-label="Affiliation slides"
    >
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === active}
          aria-label={`Slide ${i + 1}`}
          className={`aff-nav__dot ${i === active ? "aff-nav__dot--active" : ""}`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}

// ─── Slider wrapper ───────────────────────────────────────────────────────────

export default function AffiliationCardSlider() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + AFFILIATIONS.length) % AFFILIATIONS.length);
  const next = () => setActive((i) => (i + 1) % AFFILIATIONS.length);

  return (
    <div className="aff-slider">
      <AffiliationCard item={AFFILIATIONS[active]} />

      {/* Navigation */}
      <div className="aff-nav">
        <button
          className="aff-nav__arrow"
          onClick={prev}
          aria-label="Previous affiliation"
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

        <DotNav
          count={AFFILIATIONS.length}
          active={active}
          onSelect={setActive}
        />

        <button
          className="aff-nav__arrow"
          onClick={next}
          aria-label="Next affiliation"
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
  );
}
