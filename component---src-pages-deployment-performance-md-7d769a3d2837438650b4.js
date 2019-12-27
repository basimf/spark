(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jK0j:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return i})),o.d(t,"default",(function(){return p}));o("91GP"),o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("FlsD"),o("q1tI");var r=o("7ljp"),n=o("hhGP");o("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/Deployment/Performance.md"}});var s={_frontmatter:i},l=n.a;function p(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,["components"]);return Object(r.b)(l,a({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"performance"},"Performance"),Object(r.b)("p",null,"We have no performance figures of Spark yet. Spark is already being used in production scenarios, so it is fit for real use. If you have measured performance of Spark yourself, please share the results!"),Object(r.b)("p",null,"In the near future we will develop performance tests for Spark to get you an idea whether or how it will fit your performance needs. "),Object(r.b)("p",null,"If you are concerned Spark will not handle your load as fast as you would like, consider the following possibilities for spreading the load."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you are FHIR-enabling multiple source systems, you could provide every system with it's own FHIR front-end, implemented by Spark. Instead of feeding data from all the source systems into one instance of Spark. You will however need a way to route requests to the correct instance of Spark. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If there is a logical attribute in your data to split the whole set into multiple sets, you could deploy Spark multiple times, each one on a 'shard' of the data. You will need a way to route requests to the correct instance of Spark, based on the chosen attribute.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"MongoDB supports sharding, as described in the ",Object(r.b)("a",a({parentName:"p"},{href:"https://docs.mongodb.com/manual/sharding/"}),"MongoDB documentation"),". You will have to choose a shard key based upon expected use. To use this in Spark, you will probably have to tweak the Spark Mongo implementation."))))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/Deployment/Performance.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-deployment-performance-md-7d769a3d2837438650b4.js.map