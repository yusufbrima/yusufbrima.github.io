// Animations: fetch the poster as the visitor approaches, play only while on screen.
(function () {
  var videos = document.querySelectorAll("video.lazy-video");
  if (!videos.length) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function showPoster(v) { if (v.dataset.poster && !v.poster) v.poster = v.dataset.poster; }
  if (!("IntersectionObserver" in window)) {
    videos.forEach(function (v) { showPoster(v); v.controls = true; });
    return;
  }
  var near = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { showPoster(e.target); near.unobserve(e.target); } });
  }, { rootMargin: "800px 0px" });
  var onScreen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting && !reduce) { v.preload = "auto"; var p = v.play(); if (p && p.catch) p.catch(function () { v.controls = true; }); }
      else { v.pause(); }
    });
  }, { threshold: 0.25 });
  videos.forEach(function (v) { near.observe(v); onScreen.observe(v); if (reduce) v.controls = true; });
})();
