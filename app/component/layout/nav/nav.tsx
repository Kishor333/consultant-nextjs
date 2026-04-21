"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import "./nav.scss";

// ─── Nav items config ────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  sectionId: string;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "PROJECTS", sectionId: "projects", hasDropdown: true },
  { label: "AFFILIATIONS", sectionId: "affiliations" },
  { label: "HISTORY", sectionId: "history" },
  { label: "OUR TEAM", sectionId: "our-team" },
  { label: "CONTACT US", sectionId: "contact-us" },
];

// ─── Smooth scroll helper ────────────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = window.innerWidth <= 768 ? 56 : 64;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// ─── Desktop nav link ────────────────────────────────────────────────────────

function NavLink({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`nav__item ${isActive ? "nav__item--active" : ""}`}
      onClick={onClick}
    >
      {item.label}
      {item.hasDropdown && (
        <svg
          className="nav__chevron"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

// ─── Mobile nav link ─────────────────────────────────────────────────────────

function MobileNavLink({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`nav__mobile-item ${isActive ? "nav__mobile-item--active" : ""}`}
      onClick={onClick}
    >
      {item.label}
      {item.hasDropdown && (
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = useCallback(
    (sectionId: string) => {
      setActiveId(sectionId);
      scrollToSection(sectionId);
      if (mobileOpen) setMobileOpen(false);
    },
    [mobileOpen],
  );

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        {/* Logo */}
        <button
          className="nav__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <Image
            src="/image/app_logo.svg"
            alt="Consult2T logo"
            width={44}
            height={44}
            className="nav__logo-img "
            priority
          />
          {/* <span className="nav__logo-text">CONSULT2T</span> */}
        </button>

        {/* Desktop links */}
        <div className="nav__links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.sectionId}
              item={item}
              isActive={activeId === item.sectionId}
              onClick={() => handleNav(item.sectionId)}
            />
          ))}
        </div>

        {/* Desktop search icon */}
        {/* <button className="nav__search" aria-label="Search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 12L16.5 16.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button> */}

        {/* Mobile hamburger */}
        <button
          className={`nav__hamburger ${mobileOpen ? "nav__hamburger--open" : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="nav__hamburger-line" />
          <span className="nav__hamburger-line" />
          <span className="nav__hamburger-line" />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav__mobile-overlay ${mobileOpen ? "nav__mobile-overlay--open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div
        className={`nav__mobile-menu ${mobileOpen ? "nav__mobile-menu--open" : ""}`}
        role="menu"
      >
        {NAV_ITEMS.map((item) => (
          <MobileNavLink
            key={item.sectionId}
            item={item}
            isActive={activeId === item.sectionId}
            onClick={() => handleNav(item.sectionId)}
          />
        ))}
      </div>
    </>
  );
}
