import './polyfills.server.mjs';
import{A as T,B as k,E as w,I as S,L as I,a as g,b as v,c as y,d as p,e as C,f as b,g as a,h as l,i as r,j as s,k as h,l as m,m as c,n as _,o as f,p as O,q as x,x as M,z as P}from"./chunk-Y32CGBDG.mjs";var D=(()=>{let t=class t{transform(o,...n){let i=Math.floor(o/60);return("00"+i).slice(-2)+":"+("00"+Math.floor(o-i*60)).slice(-2)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=b({name:"formatTimer",type:t,pure:!0,standalone:!0});let e=t;return e})();var ut=new y("COUNTDOWN_CONFIG");var E=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=C({type:t}),t.\u0275inj=v({});let e=t;return e})();var R=(()=>{let t=class t{constructor(){this.timeInSeconds=300,this.isStart=!0,this.isPause=!1,this.isResume=!1,this.isReset=!1}ngOnInit(){}startTimer(){this.timerSubscription=g(1e3).subscribe(()=>{this.timeInSeconds>0&&this.timeInSeconds--}),this.isStart=!1,this.isPause=!0,this.isResume=!1,this.isReset=!0}pauseTimer(){this.timerSubscription&&(this.timerSubscription.unsubscribe(),this.isStart=!1,this.isPause=!1,this.isResume=!0,this.isReset=!0)}resumeTimer(){this.startTimer(),this.isStart=!1,this.isPause=!0,this.isResume=!1,this.isReset=!0}resetTimer(){this.timeInSeconds=300,this.pauseTimer(),this.isStart=!0,this.isPause=!1,this.isResume=!1,this.isReset=!1}ngOnDestroy(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p({type:t,selectors:[["app-timer"]],standalone:!0,features:[f],decls:13,vars:7,consts:[[2,"text-align","center"],["id","timer"],["id","buttons"],["id","startBtn",3,"disabled","click"],["id","pauseBtn",3,"disabled","click"],["id","resumeBtn",3,"disabled","click"],["id","resetBtn",3,"disabled","click"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1),c(2),O(3,"formatTimer"),s(),r(4,"div",2)(5,"button",3),m("click",function(){return i.startTimer()}),c(6,"Start"),s(),r(7,"button",4),m("click",function(){return i.pauseTimer()}),c(8,"Pause"),s(),r(9,"button",5),m("click",function(){return i.resumeTimer()}),c(10,"Resume"),s(),r(11,"button",6),m("click",function(){return i.resetTimer()}),c(12,"Reset"),s()()()),n&2&&(a(2),_("",x(3,5,i.timeInSeconds)," "),a(3),l("disabled",!i.isStart),a(2),l("disabled",!i.isPause),a(2),l("disabled",!i.isResume),a(2),l("disabled",!i.isReset))},dependencies:[D,E],styles:["#timer[_ngcontent-%COMP%]{font-size:2em;margin-bottom:20px}#buttons[_ngcontent-%COMP%]{display:flex;gap:10px}button[_ngcontent-%COMP%]{padding:10px;font-size:1em;background-color:#4caf50;color:#fff;border:none;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#45a049}button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}"]});let e=t;return e})();var j=(()=>{let t=class t{constructor(){this.title="timer"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p({type:t,selectors:[["app-root"]],standalone:!0,features:[f],decls:4,vars:0,consts:[[1,"main"],[1,"content"]],template:function(n,i){n&1&&(r(0,"main",0)(1,"div",1),h(2,"app-timer"),s()(),h(3,"router-outlet"))},dependencies:[P,S,R],styles:[`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]});let e=t;return e})();var F=[];var z={providers:[I(F),k()]};var N={providers:[w()]},A=M(z,N);var B=()=>T(j,A),Nt=B;export{Nt as a};
