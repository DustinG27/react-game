(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/images/budheavy.webp","name":"Bud Heavy","style":"Lager","notes":"Crisp & Clean"},{"id":2,"image":"/assets/images/kanaha.png","name":"Kanaha","style":"Blonde Ale","notes":"Clean & Mango"},{"id":3,"image":"/assets/images/dreamweaver.jpeg","name":"Dream Weaver","style":"Hefeweizen","notes":"Banana & Clove"},{"id":4,"image":"/assets/images/sierranavada.jpeg","name":"Sierra Navada","style":"Pale Ale","notes":"Citrus & Floral"},{"id":5,"image":"/assets/images/sixtyminute.jpeg","name":"60 Minute","style":"IPA","notes":"Cedar & Pine"},{"id":6,"image":"/assets/images/Yuengling.jpeg","name":"Yuengling","style":"Amber Ale","notes":"Roasted Caramel & Malty"},{"id":7,"image":"/assets/images/killians.jpeg","name":"Killian\'s","style":"Irish Red Ale","notes":"Bready & Caramel"},{"id":8,"image":"/assets/images/newcastle.jpeg","name":"New Castle","style":"Brown Ale","notes":"Nutty & Molasses"},{"id":9,"image":"/assets/images/edmund.jpeg","name":"Edmund Fitzgerald","style":"Porter","notes":"Roasted Malt & Dark Chocolate"},{"id":10,"image":"/assets/images/kbs.webp","name":"K.B.S.","style":"Stout","notes":"Oak & Espresso"},{"id":11,"image":"/assets/images/grolsh.jpeg","name":"Grolsch","style":"Pilsner","notes":"Cereal & Bready"},{"id":12,"image":"/assets/images/gaffel.jpeg","name":"Gaffel","style":"Kolsh","notes":"Lemon & Vanilla"},{"id":13,"image":"/assets/images/blitheringidiot.jpeg","name":"Blithering Idiot","style":"Barley Wine","notes":"Caramel Malt & Fig"},{"id":14,"image":"/assets/images/twojuicy.jpeg","name":"Two Juicy","style":"New England IPA","notes":"Tropical Fruit & Hops"},{"id":15,"image":"/assets/images/dirtwolf.jpeg","name":"Dirt Wolf","style":"DIPA","notes":"Citrus & Pine"}]')},,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(4),r=s.n(i),c=(s(13),s(5)),l=s(6),o=s(8),d=s(7),g=(s(14),s(0));var m=function(e){return Object(g.jsxs)("div",{className:"card",onClick:function(){return e.clickedBeer(e.id)},children:[Object(g.jsx)("div",{className:"img-container",children:Object(g.jsx)("img",{alt:e.name,src:e.image})}),Object(g.jsx)("div",{className:"content",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"Name:"})," ",e.name]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"Style:"})," ",e.style]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"Notes:"})," ",e.notes]})]})})]})};s(16);var h=function(e){return Object(g.jsx)("div",{className:"wrapper",children:e.children})};s(17);var u=function(e){return Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)("div",{className:"title",children:Object(g.jsx)("p",{children:"mmm beer"})}),Object(g.jsx)("div",{className:"info",children:Object(g.jsx)("h3",{children:e.title})}),Object(g.jsxs)("div",{className:"counter",children:[Object(g.jsxs)("p",{children:["Current Score: ",e.currentScore]}),Object(g.jsxs)("p",{children:["High Score: ",e.highScore]})]})]})},j=s(3);function b(e){for(var t=e.length-1;t>0;t--){var s=Math.floor(Math.random()*(t+1)),a=[e[s],e[t]];e[t]=a[0],e[s]=a[1]}return e}var f=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={beers:j,title:"Click any beer you'd like!",currentScore:0,highScore:0,clickedBeer:[]},e.shuffleArray=function(){e.setState({beers:b(j)})},e.gameReset=function(){e.setState({title:"Oops, try again.",currentScore:0,highScore:e.state.highScore,clickedBeer:[]}),e.shuffleArray()},e.handleIncrement=function(){e.setState({currentScore:e.state.currentScore+1,title:"Keep Moving!"})},e.clickedBeer=function(t){var s=e.state.clickedBeer,a=e.state.currentScore,n=e.state.highScore;-1===s.indexOf(t)?(s.push(t),console.log(s),e.handleIncrement(),e.shuffleArray()):15===e.state.currentScore?e.setState({currentScore:0,clickedBeer:[],title:"You win!"}):(console.log("game reset"),e.gameReset()),a>n&&e.setState({highScore:a})},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(h,{children:[Object(g.jsx)(u,{title:this.state.title,currentScore:this.state.currentScore,highScore:this.state.highScore}),this.state.beers.map((function(t){return Object(g.jsx)(m,{clickedBeer:e.clickedBeer,id:t.id,name:t.name,image:t.image,style:t.style,notes:t.notes},t.id)}))]})}}]),s}(a.Component),y=f,p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.e2db2dc6.chunk.js.map