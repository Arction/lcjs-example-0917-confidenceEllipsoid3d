(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),{lightningChart:n,PointStyle3D:d,ColorShadingStyles:o,Themes:i}=s,r=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Chart3D({theme:i[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("3D scatter data set and confidence ellipsoid");r.forEachAxis((e=>e.setInterval({start:-1.8,end:1.8})));const h=r.addPointSeries().setName("Scatter series"),l=r.addPointSeries().setName("Confidence ellipsoid"),c=2*Math.PI,m=new Array(1e3).fill(0).map((e=>{const t=Math.random(),a=Math.random(),s=t*c,n=Math.acos(2*a-1),d=Math.cbrt(Math.random()),o=Math.sin(s),i=Math.cos(s),r=Math.sin(n);return{x:1.2*d*r*i,y:1.2*d*r*o,z:1.5*d*Math.cos(n)}}));h.add(m),l.setDepthTestEnabled(!1).setColorShadingStyle(new o.Simple).setPointStyle(new d.Triangulated({shape:"sphere",size:{x:2.4,y:2.4,z:3},fillStyle:h.getPointStyle().getFillStyle().setA(50)})).add({x:0,y:0,z:0}),r.addLegendBox().add(r)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);