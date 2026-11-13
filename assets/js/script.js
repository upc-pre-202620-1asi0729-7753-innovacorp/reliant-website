/**
 * Reliant Landing Page — script.js
 * Handles: mobile navigation toggle, footer year, and segment-aware
 * scrolling/highlighting between the hero CTAs and the Segments section.
 */

(function () {
  "use strict";

  /* ---------- About videos ----------
   * Paste the YouTube video IDs here (the part after "youtu.be/" or "v=").
   * Leave a value empty to keep the "Video coming soon" placeholder.
   */
  var ABOUT_VIDEOS = {
    product: "",
    team: ""
  };

  document.querySelectorAll("[data-video]").forEach(function (frame) {
    var id = ABOUT_VIDEOS[frame.getAttribute("data-video")];
    if (!id) {
      return;
    }
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + id;
    iframe.title = frame.getAttribute("data-video-title") || "Reliant video";
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    frame.innerHTML = "";
    frame.appendChild(iframe);
  });

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
  // Hero buttons carry data-segment-link="recuperation-supplier" | "asset-owner"
  // and link straight to the web application sign-up with the matching
  // organization type. Hovering one highlights the matching segment card.
  document.querySelectorAll("[data-segment-link]").forEach(function (link) {
    var segment = link.getAttribute("data-segment-link");
    var targetCard = document.querySelector('[data-segment-cta="' + segment + '"]');
    var card = targetCard ? targetCard.closest(".segment-card") : null;
    if (!card) {
      return;
    }
    link.addEventListener("mouseenter", function () { card.classList.add("is-highlighted"); });
    link.addEventListener("mouseleave", function () { card.classList.remove("is-highlighted"); });
  });
})();
