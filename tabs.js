/* Top tab bar shared by every topic page. Add <script src="../tabs.js"></script> to a page to get it. */
(function(){
  var me = document.currentScript;
  if(!me) return;
  var base = me.src.replace(/tabs\.js(\?.*)?$/, "");
  var TABS = [
    ["الرئيسية", ""],
    ["السفر عبر الزمن", "time-travel/"],
    ["الثقوب السوداء", "black-holes/"],
    ["مركبة فوياجر", "voyager/"],
    ["أصوات الفضاء", "https://manaralialghamdi.github.io/space-sounds/"],
    ["الفلك بالواقع الافتراضي", "#vr"]
  ];
  var css = document.createElement("style");
  css.textContent =
    ".topbar{position:sticky;top:0;z-index:50;width:100%;padding:calc(env(safe-area-inset-top,0px) + .5rem) .75rem .5rem;" +
    "background:rgba(14,16,51,.92);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border-bottom:1px solid #2C3068;" +
    "display:flex;flex-wrap:wrap;justify-content:center;gap:clamp(.3rem,1.6vw,.55rem);direction:rtl;box-sizing:border-box}" +
    ".topbar a{display:inline-flex;align-items:center;justify-content:center;min-height:36px;padding:0 clamp(.6rem,2.6vw,.95rem);" +
    "border-radius:999px;border:1px solid #2C3068;color:#A3A5CB;text-decoration:none;font:500 clamp(.78rem,3vw,.92rem)/1.3 'IBM Plex Sans Arabic',Tahoma,Arial,sans-serif;white-space:nowrap}" +
    ".topbar a:hover{color:#EDE8DA;border-color:#A3A5CB}" +
    ".topbar a[aria-current=page]{background:#FFB35C;border-color:#FFB35C;color:#1B1030;font-weight:600}" +
    ".topbar a:focus-visible{outline:2px solid #FFB35C;outline-offset:2px}";
  document.head.appendChild(css);
  var nav = document.createElement("nav");
  nav.className = "topbar"; nav.setAttribute("aria-label", "الأركان");
  var here = location.pathname.replace(/index\.html$/, "");
  var links = TABS.map(function(t){
    var a = document.createElement("a");
    a.href = /^https?:/.test(t[1]) ? t[1] : base + t[1]; a.textContent = t[0];
    a.u = new URL(a.href, location.href);
    nav.appendChild(a);
    return a;
  });
  function mark(){
    links.forEach(function(a){
      var on = a.u.origin === location.origin && a.u.pathname === here && (a.u.hash ? location.hash === a.u.hash : location.hash !== "#vr");
      if(on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }
  mark();
  window.addEventListener("hashchange", mark);
  document.body.insertBefore(nav, document.body.firstChild);
})();
