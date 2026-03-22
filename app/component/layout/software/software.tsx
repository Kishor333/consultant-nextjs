"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  SOFTWARE_ITEMS,
  SoftwareItem,
  DESKTOP_VISIBLE,
  MOBILE_VISIBLE,
} from "./constant";
import "./software.scss";
import text from "@/app/content/global-text.json";
import { GradientHeader } from "@/app/component/ui";

// ─── Single card ─────────────────────────────────────────────────────────────

function SoftwareCard({ item }: { item: SoftwareItem }) {
  return (
    <div className="sw-card">
      <h3 className="sw-card__name">{item.name}</h3>
      <div className="sw-card__image-wrap">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          width={120}
          height={120}
          className="sw-card__image"
        />
      </div>
      <p className="sw-card__category">{item.category}</p>
    </div>
  );
}

// ─── Dot indicator ───────────────────────────────────────────────────────────

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
    <div className="sw-nav__dots" role="tablist" aria-label="Software slides">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === active}
          aria-label={`Slide ${i + 1}`}
          className={`sw-nav__dot ${i === active ? "sw-nav__dot--active" : ""}`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}

// ─── Software slider ─────────────────────────────────────────────────────────

export default function SoftwareSection() {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      setPage(0);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const perPage = isMobile ? MOBILE_VISIBLE : DESKTOP_VISIBLE;
  const totalPages = Math.ceil(SOFTWARE_ITEMS.length / perPage);

  const visibleItems: SoftwareItem[] = useMemo(() => {
    const start = page * perPage;
    return SOFTWARE_ITEMS.slice(start, start + perPage);
  }, [page, perPage]);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="sw-section" aria-label="Software tools">
      <GradientHeader
        text="SOFTWARE PROFICIENCY"
        className="justify-center"
        textMessage={text.history.quote}
        messageClass="md:!text-[16px] text-black/60"
        contentType="light"
      />
      {/* Cards */}
      <div className="sw-track mt-8">
        {visibleItems.map((item) => (
          <SoftwareCard key={item.id} item={item} />
        ))}
      </div>

      {/* Navigation */}
      <div className="sw-nav">
        <button
          className="sw-nav__arrow"
          onClick={prev}
          aria-label="Previous slide"
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8.5 1L1.5 8L8.5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <DotNav count={totalPages} active={page} onSelect={setPage} />

        <button
          className="sw-nav__arrow"
          onClick={next}
          aria-label="Next slide"
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1.5 1L8.5 8L1.5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
