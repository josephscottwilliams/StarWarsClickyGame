(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":1,"name":"Chewie","image":"https://pmcvariety.files.wordpress.com/2018/05/unnamed10.jpg"},{"id":2,"name":"Luke Skywalker","image":"https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/13/1490612144-luke-skywalker-thanks-c-3po-empire-strikes-back.jpg"},{"id":3,"name":"Han Solo","image":"https://cdn.vox-cdn.com/thumbor/T6-AbhuHx9CaW4R8qLGMrfXDTP4=/0x12:640x439/1200x800/filters:focal(0x12:640x439)/cdn.vox-cdn.com/uploads/chorus_image/image/48379679/hansolo.0.png"},{"id":4,"name":"Princess Leia","image":"https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg/220px-Princess_Leia%27s_characteristic_hairstyle.jpg"},{"id":5,"name":"C3PO","image":"https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/46/1479397679-c-3po-see-threepio-68fe125c.jpeg"},{"id":6,"name":"Rey","image":"https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Rey_Star_Wars.png/220px-Rey_Star_Wars.png"},{"id":7,"name":"Obi Wan","image":"https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2019/09/02/obi-wan-show-1567178968.jpg"},{"id":8,"name":"Qui-Gon Jinn","image":"https://vignette.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg"},{"id":9,"name":"Yoda","image":"https://metro.co.uk/wp-content/uploads/2018/04/sei_7510757.jpg"},{"id":10,"name":"Darth Maul","image":"https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Darth_Maul.png/220px-Darth_Maul.png"},{"id":11,"name":"Darth Vader","image":"https://metro.co.uk/wp-content/uploads/2018/04/sei_7510757.jpg"},{"id":12,"name":"The Emporer","image":"https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png"}]')},232:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(79),s=t.n(r),c=(t(92),t(84)),o=t(80),m=t(81),l=t(85),p=t(82),h=t(86);t(93),t(94),t(95);var d=function(e){return n.a.createElement("img",{src:e.image,className:"custom-images",id:e.id,onClick:function(){e.click(e.id)},alt:""})};var u=function(){return n.a.createElement("div",{className:"jumbotron"},n.a.createElement("h1",{className:"display-4"},"The Star Wars Clicky Game!"),n.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!"),n.a.createElement("hr",{className:"my-4"}))},g=t(83);var k=function(e){return n.a.createElement("nav",Object(g.a)({className:"navbar navbar-light bg-light"},"className","navText"),n.a.createElement("ul",null,n.a.createElement("li",{className:"brand"},"Clicky Game"),n.a.createElement("li",{className:!0},"Click an image to begin with"),n.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.highScore)))},f=t(22),w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={score:0,highScore:0,clickedItems:[],characters:f},t.shuffleCards=function(e){for(var a=e.length-1;a>0;a--){var i=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[i],e[i]=n}return t.setState({score:t.state.score+1,highScore:t.state.highScore+1,clickedItems:[].concat(Object(c.a)(t.state.clickedItems),[e])}),e},t.displayNewOrder=function(){t.setState({characters:t.shuffleCards(f)})},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(k,{score:this.state.score,highScore:this.state.highScore}),n.a.createElement(u,null),n.a.createElement("div",{className:"main-div"},f.map((function(a){return n.a.createElement(d,{id:a.id,key:a.id,image:a.image,click:e.displayNewOrder})}))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,a,t){e.exports=t(232)},92:function(e,a,t){},93:function(e,a,t){e.exports=t.p+"static/media/logo.25bf045c.svg"},94:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.f51c2c86.chunk.js.map