
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./cpHeader.module.scss";

const COMPANY_LOGO_SRC =
  "/images/branding/cropped-Majestic-Metal-works.png";

const PHONE_NUMBER = "+919814426117";
const DISPLAY_PHONE_NUMBER = "+91 98144 26117";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

const CpHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main navigation">

        {/* Company Logo */}
        <Link
          href="/"
          className={styles.brand}
          aria-label="Majestic Metalworks Home"
          onClick={closeMenu}
        >
          <Image
            src={COMPANY_LOGO_SRC}
            alt="Majestic Metalworks"
            width={320}
            height={74}
            priority
            className={styles.logo}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNavigation}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                isActive(item.href) ? styles.active : ""
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Action */}
        <div className={styles.actions}>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className={styles.phone}
            aria-label={`Call ${DISPLAY_PHONE_NUMBER}`}
          >
            <span aria-hidden="true">☎</span>
            <span>{DISPLAY_PHONE_NUMBER}</span>
          </a>

          <Link href="/contact" className={styles.quoteButton}>
            Get a Quote
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`${styles.menuToggle} ${
            isMenuOpen ? styles.menuToggleOpen : ""
          }`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
        hidden={!isMenuOpen}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className={`${styles.mobileNavLink} ${
              isActive(item.href) ? styles.mobileActive : ""
            }`}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}

        <a href={`tel:${PHONE_NUMBER}`} className={styles.mobilePhone}>
          ☎ {DISPLAY_PHONE_NUMBER}
        </a>

        <Link
          href="/contact"
          className={styles.mobileQuoteButton}
          onClick={closeMenu}
        >
          Get a Quote <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
};

export default CpHeader;
