(this["webpackJsonpstar-wars-clicky-game"]=this["webpackJsonpstar-wars-clicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Yoda","image":"https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png"},{"id":2,"name":"Han Solo","image":"https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg"},{"id":3,"name":"C-3PO","image":"https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png"},{"id":4,"name":"Obi-Wan Kenobi","image":"https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2019/09/02/obi-wan-show-1567178968.jpg?itok=wsXM9Wmp"},{"id":5,"name":"Princess Leia","image":"https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg"},{"id":6,"name":"Luke Skywalker","image":"https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png"},{"id":7,"name":"Darth Vader","image":"http://images.buystarwarscostumes.com/products/10008/2-1-99300/authentic-darth-vader-costume.jpg"},{"id":8,"name":"Rey","image":"https://upload.wikimedia.org/wikipedia/en/a/af/Rey_Star_Wars.png"},{"id":9,"name":"Chewbacca","image":"https://upload.wikimedia.org/wikipedia/en/6/6d/Chewbacca-2-.jpg"},{"id":10,"name":"Qui-Gon Jinn","image":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584503907590&di=843665c5018d085524600d9674566da5&imgtype=0&src=http%3A%2F%2Fwww.hottoys.com.cn%2Fwp-content%2Fuploads%2F2019%2F03%2FHot-Toys-Star-Wars-Qui-Gon-Jinn-collectible-figure_PR17.jpg"},{"id":11,"name":"Count Dooku","image":"http://img.mp.itc.cn/upload/20170513/ee8b8ef7ef174132b0615f2fb7b360f5_th.jpg"},{"id":12,"name":"Padm\xe9 Amidala","image":"https://upload.wikimedia.org/wikipedia/en/e/ee/Amidala.png"}]')},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(2),c=t.n(r),o=t(3),s=t(4),m=t(7),l=t(5),d=t(8);t(14);var u=function(e){return n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image,onClick:e.randomizeImages})),n.a.createElement("div",{className:"content"},n.a.createElement("strong",null,e.name))))};t(15);var p=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},e.children)))};t(16);var g=function(e){return n.a.createElement("h1",{className:"title"},e.children)};t(17);var h=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"counter-body"},n.a.createElement("p",{className:"counter-text"},"Click Count: ",e.count," /",n.a.createElement("span",null,"Top Score: ",e.topScore))))},w=t(6),k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={characters:w,count:0,userChoice:[],topScore:0},t.randomizeImages=function(e){console.log("No."+e+" This has been clicked!");var a=t.state.characters.sort((function(e,a){return.5-Math.random()}));if(-1===t.state.userChoice.indexOf(e)){var i=t.state.count,n=t.state.userChoice;n.push(e),t.setState({count:i+1,characters:a,userChoice:n})}else{alert("Game Over!");var r=t.state.count;r>t.state.topScore&&t.setState({topScore:r}),t.setState({count:0,userChoice:[]})}},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(p,null,n.a.createElement(g,null,"Star Wars Clicky Game"),n.a.createElement(h,{count:this.state.count,topScore:this.state.topScore}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.characters.map((function(a){return n.a.createElement(u,{id:a.id,name:a.name,image:a.image,randomizeImages:function(){return e.randomizeImages(a.id)}})})))))}}]),a}(i.Component);t(18);c.a.render(n.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.9de316b9.chunk.js.map