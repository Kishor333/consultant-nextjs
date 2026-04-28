"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { TEAM_MEMBERS, SECTION_QUOTE, TeamMember } from "./constant";
import "./profile.model.scss";
import { GradientHeader } from "@/app/component/ui";
import text from "@/app/content/global-text.json";

const VISIBLE_COUNT = 7;
const CENTER_OFFSET = Math.floor(VISIBLE_COUNT / 2); // 3
// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Return 7 indices centered around `activeIndex`, wrapping circularly. */
function getVisibleIndices(activeIndex: number, total: number): number[] {
  const indices: number[] = [];
  for (let offset = -CENTER_OFFSET; offset <= CENTER_OFFSET; offset++) {
    indices.push((activeIndex + offset + total) % total);
  }
  return indices;
}

// ─── Avatar thumbnail ─────────────────────────────────────────────────────────

function Avatar({
  member,
  active,
  onClick,
}: {
  member: TeamMember;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`ps-avatar${active ? " is-active" : ""}`}
      onClick={onClick}
      aria-label={`View ${member.displayName}`}
      aria-pressed={active}
    >
      <div className="ps-avatar__ring">
        <div className="ps-avatar__circle">
          <Image
            src={member.imageSrc}
            alt={member.displayName}
            fill
            sizes="96px"
            className="ps-avatar__img"
          />
        </div>
      </div>
      <span className="ps-avatar__name">
        {member.shortName}
        {/* {member.firstName} {member.lastName} */}
      </span>
    </button>
  );
}

// ─── Main display ─────────────────────────────────────────────────────────────

function ProfileDisplay({ member }: { member: TeamMember }) {
  return (
    <div className="ps-main" key={member.id}>
      {/* Left — photo + watermark */}
      <div className="ps-photo-panel">
        <span className="ps-watermark ps-watermark--first" aria-hidden="true">
          {member.firstName}
        </span>
        <span className="ps-watermark ps-watermark--last" aria-hidden="true">
          {member.lastName}
        </span>
        <div className="ps-photo-wrap">
          <Image
            src={member.imageSrc}
            alt={member.displayName}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="ps-photo"
            priority
          />
        </div>
      </div>

      {/* Right — info */}
      <div className="ps-info z-3">
        {/* <div> */}
        <h2 className="ps-info__name">
          {/* {member.firstName} {member.lastName} */}
          {member.displayName}
        </h2>
        <p className="ps-info__bio">{member.bio}</p>
        <p className="ps-info__email">{member.email}</p>
        <p className="ps-info__role">{member.role}</p>
        {/* </div> */}
      </div>
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function ProfileSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TEAM_MEMBERS.length;
  const active = TEAM_MEMBERS[activeIndex];

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  /** The 7 member indices currently in view, with active in the centre. */
  const visibleIndices = useMemo(
    () => getVisibleIndices(activeIndex, total),
    [activeIndex, total],
  );

  return (
    <section className="ps-container" aria-label="Team profiles">
      {/* Quote */}
      <GradientHeader
        text="OUR TEAM"
        className="justify-center"
        textMessage={text.our_team}
        messageClass="md:!text-[16px] text-black/60"
      />

      {/* Main display */}
      <ProfileDisplay member={active} />

      {/* Carousel — always 7 items, active centred */}
      <div className="ps-carousel">
        <div className="ps-carousel__track" role="list">
          {visibleIndices.map((memberIdx, slotIdx) => {
            const distance = Math.abs(slotIdx - CENTER_OFFSET); // 3,2,1,0,1,2,3
            return (
              <div
                key={`${memberIdx}-${slotIdx}`}
                className="ps-carousel__item"
                data-distance={distance}
                role="listitem"
              >
                {slotIdx > 0 && (
                  <div
                    className={`ps-connector ${slotIdx === 3 ? "" : ""} `}
                    aria-hidden="true"
                  />
                )}
                <Avatar
                  member={TEAM_MEMBERS[memberIdx]}
                  active={memberIdx === activeIndex}
                  onClick={() => setActiveIndex(memberIdx)}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div
          className="ps-carousel__nav"
          role="group"
          aria-label="Profile navigation"
        >
          <button
            className="ps-nav__btn"
            onClick={prev}
            aria-label="Previous team member"
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
            className="ps-nav__btn"
            onClick={next}
            aria-label="Next team member"
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
