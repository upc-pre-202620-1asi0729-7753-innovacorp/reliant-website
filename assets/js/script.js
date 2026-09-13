/**
 * Reliant Landing Page — script.js
 * Handles: mobile navigation toggle, footer year, and segment-aware
 * scrolling/highlighting between the hero CTAs and the Segments section.
 */

(function () {
  "use strict";

  /* ---------- Mobile navigation toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu after a nav link is activated.
    primaryNav.addEventListener("click", function (event) {
      var target = event.target;
      if (target.tagName === "A" && primaryNav.classList.contains("is-open")) {
        primaryNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Segment-aware hero CTAs ---------- */
  // Hero buttons carry data-segment-link="recuperation-supplier" | "asset-owner".
  // Clicking one scrolls to #segments and highlights the matching card so the
  // visitor lands on the option that matches what they selected.
  var segmentLinks = document.querySelectorAll("[data-segment-link]");

  segmentLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var segment = link.getAttribute("data-segment-link");
      var targetCard = document.querySelector(
        '[data-segment-cta="' + segment + '"]'
      );

      if (targetCard) {
        event.preventDefault();
        document.getElementById("segments").scrollIntoView({ behavior: "smooth" });

        // Briefly highlight the matching segment card.
        var card = targetCard.closest(".segment-card");
        if (card) {
          card.classList.add("is-highlighted");
          window.setTimeout(function () {
            card.classList.remove("is-highlighted");
          }, 2000);
        }

        targetCard.focus({ preventScroll: true });
      }
    });
  });
})();
