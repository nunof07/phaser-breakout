/*!
 * MIT License
 * 
 * Copyright (c) 2018 Nuno Freitas
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
webpackJsonp([1],{"+1yO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.startY=function(t){return t.y-t.displayOriginY}},"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ENk":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createBrick=function(t){return new i.BaseBrick(new r.BaseGraphicSprite({position:{x:t.bricks.startX+t.column*t.sprite.size.width,y:t.bricks.startY+t.row*t.sprite.size.height},color:t.sprite.color,size:t.sprite.size},t.graphics))};var r=n("JWfv"),i=n("gP3b")},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"+tPU":function(t,e,n){n("xGkn");for(var r=n("7KvD"),i=n("hJx8"),o=n("/bQp"),u=n("dSzd")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var a=s[c],f=r[a],l=f&&f.prototype;l&&!l[u]&&i(l,u,a),o[a]=o.Array}},"+zSe":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addCollider=function(t,e,n,i){t.collider((0,r.sprites)(e),(0,r.sprites)(n),i||function(){},function(){return!0},{})};var r=n("hXrF")},"/bQp":function(t,e){t.exports={}},"/n6Q":function(t,e,n){n("zQR9"),n("+tPU"),t.exports=n("Kh4W").f("iterator")},"/pID":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BaseBricks=void 0;var r=u(n("Zrlr")),i=u(n("wxAW")),o=n("B8Op");function u(t){return t&&t.__esModule?t:{default:t}}e.BaseBricks=function(){function t(e){(0,r.default)(this,t),this.bricks=new o.BaseComposite(e)}return(0,i.default)(t,[{key:"group",value:function(){return this.bricks.systems()}},{key:"setup",value:function(t){return this.bricks.setup(t),this}},{key:"update",value:function(){return this.bricks.update(),this}}]),t}()},"06OY":function(t,e,n){var r=n("3Eo+")("meta"),i=n("EqjI"),o=n("D2L2"),u=n("evD5").f,s=0,c=Object.isExtensible||function(){return!0},a=!n("S82l")(function(){return c(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!o(t,r)&&f(t),t}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"4LSe":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.gameWidth=function(t){return t.config.width}},"4V4I":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createBrickN=void 0;var r=n("+ENk"),i=n("ivXw");e.createBrickN=(0,i.curry)(function(t,e,n,i){var o=Math.floor(i/t.columns),u=i%t.columns;return(0,r.createBrick)({bricks:t,sprite:e,graphics:n,row:o,column:u})})},"4mcu":function(t,e){t.exports=function(){}},"52gC":function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},"5QVw":function(t,e,n){t.exports={default:n("BwfY"),__esModule:!0}},"6sO2":function(t,e,n){"use strict";var r=n("UtYb"),i=n("P1a3"),o=n("T/88");(0,r.startGame)({type:Phaser.AUTO,parent:o.config.game.container,width:o.config.game.width,height:o.config.game.height,pixelArt:!0,scene:i.Breakout,physics:{default:"arcade",arcade:{debug:o.config.game.debug}}})},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7GoO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ballOnSpritePosition=function(t,e){return{x:e.sprite().x,y:(0,r.startY)(e.sprite())-t.sprite().displayHeight-e.borderWidth()}};var r=n("+1yO")},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"7UMu":function(t,e,n){var r=n("R9M2");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"880/":function(t,e,n){t.exports=n("hJx8")},"94VQ":function(t,e,n){"use strict";var r=n("Yobk"),i=n("X8DO"),o=n("e6n0"),u={};n("hJx8")(u,n("dSzd")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:i(1,n)}),o(t,e+" Iterator")}},"9bBU":function(t,e,n){n("mClu");var r=n("FeBl").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},B8Op:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BaseComposite=void 0;var r=o(n("Zrlr")),i=o(n("wxAW"));function o(t){return t&&t.__esModule?t:{default:t}}e.BaseComposite=function(){function t(e){(0,r.default)(this,t),this.collection=e}return(0,i.default)(t,[{key:"systems",value:function(){return this.collection}},{key:"setup",value:function(t){return this.collection.forEach(function(e){e.setup(t)}),this}},{key:"update",value:function(){return this.collection.forEach(function(t){t.update()}),this}}]),t}()},BwfY:function(t,e,n){n("fWfb"),n("M6a0"),n("OYls"),n("QWe/"),t.exports=n("FeBl").Symbol},C4MV:function(t,e,n){t.exports={default:n("9bBU"),__esModule:!0}},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},EGZi:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},GdQn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.redrawSprite=function(t,e){t.clear(),t.strokeRect((0,r.startX)(e),(0,i.startY)(e),e.displayWidth,e.displayHeight)};var r=n("rCYl"),i=n("+1yO")},Ibhu:function(t,e,n){var r=n("D2L2"),i=n("TcQ7"),o=n("vFc/")(!1),u=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,a=[];for(n in s)n!=u&&r(s,n)&&a.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~o(a,n)||a.push(n));return a}},JWfv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BaseGraphicSprite=void 0;var r=f(n("Zrlr")),i=f(n("wxAW")),o=n("pPS/"),u=n("z3hQ"),s=n("dMk/"),c=n("GdQn"),a=n("oZsQ");function f(t){return t&&t.__esModule?t:{default:t}}e.BaseGraphicSprite=function(){function t(e,n){(0,r.default)(this,t),this.config=e,this.graphics=n,this.previousPosition={x:-1,y:-1}}return(0,i.default)(t,[{key:"setup",value:function(t){return this.graphicsObj=(0,o.createGraphics)(t.add,this.config.color,this.graphics.width),this.spriteObj=(0,u.createSprite)(t.physics.add,this.config.position,this.config.size,this.graphics.texture.key),this}},{key:"update",value:function(){return(0,s.positionEqual)(this.previousPosition,this.spriteObj)||(0,c.redrawSprite)(this.graphicsObj,this.spriteObj),this.previousPosition=(0,a.spritePosition)(this.spriteObj),this}},{key:"sprite",value:function(){return this.spriteObj}},{key:"borderWidth",value:function(){return this.graphics.width}},{key:"destroy",value:function(){return this.graphicsObj.clear(),this.graphicsObj.destroy(),this.spriteObj.disableBody(!0,!0),this.spriteObj.destroy(),this}}]),t}()},Kh4W:function(t,e,n){e.f=n("dSzd")},Kh5d:function(t,e,n){var r=n("sB3e"),i=n("PzxK");n("uqUo")("getPrototypeOf",function(){return function(t){return i(r(t))}})},LKZe:function(t,e,n){var r=n("NpIQ"),i=n("X8DO"),o=n("TcQ7"),u=n("MmMw"),s=n("D2L2"),c=n("SfB7"),a=Object.getOwnPropertyDescriptor;e.f=n("+E39")?a:function(t,e){if(t=o(t),e=u(e,!0),c)try{return a(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},M6a0:function(t,e){},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var r=n("EqjI"),i=n("7KvD").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},OYls:function(t,e,n){n("crlp")("asyncIterator")},OvRC:function(t,e,n){t.exports={default:n("oM7Q"),__esModule:!0}},P1a3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Breakout=void 0;var r=v(n("Zx67")),i=v(n("Zrlr")),o=v(n("wxAW")),u=v(n("zwoO")),s=v(n("Pf15")),c=n("T/88"),a=n("jTUi"),f=n("B8Op"),l=n("z9ZG"),p=n("z7HT"),h=n("YMba"),d=n("gzk/"),y=v(n("QFcC"));function v(t){return t&&t.__esModule?t:{default:t}}e.Breakout=function(t){function e(){return(0,i.default)(this,e),(0,u.default)(this,(e.__proto__||(0,r.default)(e)).apply(this,arguments))}return(0,s.default)(e,t),(0,o.default)(e,[{key:"preload",value:function(){this.load.image(c.config.graphics.texture.key,c.config.graphics.texture.url)}},{key:"create",value:function(){var t={ball:(0,a.createBall)(c.config.ball,c.config.graphics),paddle:(0,p.createPaddle)(c.config.paddle,c.config.graphics),bricks:(0,l.createBricks)(c.config.bricks,c.config.brick,c.config.graphics)};this.systems=new f.BaseComposite([t.paddle,t.ball,t.bricks,new h.BasePhysics(c.config.physics,t),new d.Referee(c.config.game,c.config.physics,t)]),this.systems.setup(this)}},{key:"update",value:function(){this.systems.update()}}]),e}(y.default.Scene)},Pf15:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n("kiBT")),i=u(n("OvRC")),o=u(n("pFYg"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,o.default)(e)));t.prototype=(0,i.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},PzxK:function(t,e,n){var r=n("D2L2"),i=n("sB3e"),o=n("ax3d")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},QRG4:function(t,e,n){var r=n("UuGF"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"QWe/":function(t,e,n){n("crlp")("observable")},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},RPLV:function(t,e,n){var r=n("7KvD").document;t.exports=r&&r.documentElement},Rrel:function(t,e,n){var r=n("TcQ7"),i=n("n0T6").f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(r(t))}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},"T/88":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={container:"game",width:800,height:600,debug:!1},i={width:2,texture:{key:"pixel",url:"images/transparent_pixel.png"}},o={position:{x:r.width/2,y:r.height-8-i.width},size:{width:96,height:16},color:11184810},u={position:{x:r.width/2,y:o.position.y-o.size.height/2-8-i.width},size:{width:16,height:16},color:11184640,bounce:1},s={position:{x:r.width/4,y:r.height/2},size:{width:32,height:32},color:11141120},c={startX:3.5*s.size.width,startY:3.5*s.size.height,columns:Math.floor((r.width-3*s.size.width*2)/s.size.width),rows:Math.floor((.5*r.height-2*s.size.height)/s.size.height)};e.config={game:r,graphics:i,paddle:o,ball:u,physics:{launchVelocity:{x:128,y:-512},collideVelocity:8},brick:s,bricks:c}},TcQ7:function(t,e,n){var r=n("MU5D"),i=n("52gC");t.exports=function(t){return r(i(t))}},UtYb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.startGame=function(t){return new o.default.Game(t)};var r,i=n("QFcC"),o=(r=i)&&r.__esModule?r:{default:r}},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},Xc4G:function(t,e,n){var r=n("lktj"),i=n("1kS7"),o=n("NpIQ");t.exports=function(t){var e=r(t),n=i.f;if(n)for(var u,s=n(t),c=o.f,a=0;s.length>a;)c.call(t,u=s[a++])&&e.push(u);return e}},YMba:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BasePhysics=void 0;var r=s(n("Zrlr")),i=s(n("wxAW")),o=n("+zSe"),u=n("pDF3");function s(t){return t&&t.__esModule?t:{default:t}}e.BasePhysics=function(){function t(e,n){(0,r.default)(this,t),this.config=e,this.entities=n}return(0,i.default)(t,[{key:"setup",value:function(t){var e=this;return(0,u.setBoundsCollision)(t.physics.world,{left:!0,right:!0,top:!0,bottom:!1}),(0,o.addCollider)(t.physics.add,this.entities.ball,this.entities.paddle,function(){return e.collide(e.entities.ball.sprite(),e.entities.paddle.sprite())}),this.entities.bricks.group().forEach(function(n){(0,o.addCollider)(t.physics.add,e.entities.ball,n,function(){return e.hit(e.entities.ball,n)})},this),this}},{key:"collide",value:function(t,e){return t.setVelocityX((t.x-e.x)*this.config.collideVelocity),this}},{key:"hit",value:function(t,e){return e.hit(),this}},{key:"update",value:function(){return this}}]),t}()},Yobk:function(t,e,n){var r=n("77Pl"),i=n("qio6"),o=n("xnc9"),u=n("ax3d")("IE_PROTO"),s=function(){},c=function(){var t,e=n("ON07")("iframe"),r=o.length;for(e.style.display="none",n("RPLV").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[u]=t):n=c(),void 0===e?n:i(n,e)}},ZaQb:function(t,e,n){var r=n("EqjI"),i=n("77Pl"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n("+ZMJ")(Function.call,n("LKZe").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},Zx67:function(t,e,n){t.exports={default:n("fS6E"),__esModule:!0}},Zzip:function(t,e,n){t.exports={default:n("/n6Q"),__esModule:!0}},ax3d:function(t,e,n){var r=n("e8AB")("keys"),i=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=i(t))}},crlp:function(t,e,n){var r=n("7KvD"),i=n("FeBl"),o=n("O4g8"),u=n("Kh4W"),s=n("evD5").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},"dMk/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.positionEqual=function(t,e){return t.x===e.x&&t.y===e.y}},dSzd:function(t,e,n){var r=n("e8AB")("wks"),i=n("3Eo+"),o=n("7KvD").Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},e6n0:function(t,e,n){var r=n("evD5").f,i=n("D2L2"),o=n("dSzd")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},e8AB:function(t,e,n){var r=n("7KvD"),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},evD5:function(t,e,n){var r=n("77Pl"),i=n("SfB7"),o=n("MmMw"),u=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},exh5:function(t,e,n){var r=n("kM2E");r(r.S,"Object",{setPrototypeOf:n("ZaQb").set})},fS6E:function(t,e,n){n("Kh5d"),t.exports=n("FeBl").Object.getPrototypeOf},fWfb:function(t,e,n){"use strict";var r=n("7KvD"),i=n("D2L2"),o=n("+E39"),u=n("kM2E"),s=n("880/"),c=n("06OY").KEY,a=n("S82l"),f=n("e8AB"),l=n("e6n0"),p=n("3Eo+"),h=n("dSzd"),d=n("Kh4W"),y=n("crlp"),v=n("Xc4G"),b=n("7UMu"),g=n("77Pl"),_=n("EqjI"),O=n("TcQ7"),x=n("MmMw"),m=n("X8DO"),k=n("Yobk"),w=n("Rrel"),M=n("LKZe"),P=n("evD5"),S=n("lktj"),j=M.f,B=P.f,E=w.f,T=r.Symbol,C=r.JSON,D=C&&C.stringify,F=h("_hidden"),L=h("toPrimitive"),z={}.propertyIsEnumerable,Q=f("symbol-registry"),W=f("symbols"),I=f("op-symbols"),G=Object.prototype,A="function"==typeof T,N=r.QObject,V=!N||!N.prototype||!N.prototype.findChild,Z=o&&a(function(){return 7!=k(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(G,e);r&&delete G[e],B(t,e,n),r&&t!==G&&B(G,e,r)}:B,R=function(t){var e=W[t]=k(T.prototype);return e._k=t,e},Y=A&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},K=function(t,e,n){return t===G&&K(I,e,n),g(t),e=x(e,!0),g(n),i(W,e)?(n.enumerable?(i(t,F)&&t[F][e]&&(t[F][e]=!1),n=k(n,{enumerable:m(0,!1)})):(i(t,F)||B(t,F,m(1,{})),t[F][e]=!0),Z(t,e,n)):B(t,e,n)},X=function(t,e){g(t);for(var n,r=v(e=O(e)),i=0,o=r.length;o>i;)K(t,n=r[i++],e[n]);return t},J=function(t){var e=z.call(this,t=x(t,!0));return!(this===G&&i(W,t)&&!i(I,t))&&(!(e||!i(this,t)||!i(W,t)||i(this,F)&&this[F][t])||e)},U=function(t,e){if(t=O(t),e=x(e,!0),t!==G||!i(W,e)||i(I,e)){var n=j(t,e);return!n||!i(W,e)||i(t,F)&&t[F][e]||(n.enumerable=!0),n}},q=function(t){for(var e,n=E(O(t)),r=[],o=0;n.length>o;)i(W,e=n[o++])||e==F||e==c||r.push(e);return r},H=function(t){for(var e,n=t===G,r=E(n?I:O(t)),o=[],u=0;r.length>u;)!i(W,e=r[u++])||n&&!i(G,e)||o.push(W[e]);return o};A||(s((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(I,n),i(this,F)&&i(this[F],t)&&(this[F][t]=!1),Z(this,t,m(1,n))};return o&&V&&Z(G,t,{configurable:!0,set:e}),R(t)}).prototype,"toString",function(){return this._k}),M.f=U,P.f=K,n("n0T6").f=w.f=q,n("NpIQ").f=J,n("1kS7").f=H,o&&!n("O4g8")&&s(G,"propertyIsEnumerable",J,!0),d.f=function(t){return R(h(t))}),u(u.G+u.W+u.F*!A,{Symbol:T});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)h($[tt++]);for(var et=S(h.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!A,"Symbol",{for:function(t){return i(Q,t+="")?Q[t]:Q[t]=T(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in Q)if(Q[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),u(u.S+u.F*!A,"Object",{create:function(t,e){return void 0===e?k(t):X(k(t),e)},defineProperty:K,defineProperties:X,getOwnPropertyDescriptor:U,getOwnPropertyNames:q,getOwnPropertySymbols:H}),C&&u(u.S+u.F*(!A||a(function(){var t=T();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(_(e)||void 0!==t)&&!Y(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,D.apply(C,r)}}),T.prototype[L]||n("hJx8")(T.prototype,L,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},fkB2:function(t,e,n){var r=n("UuGF"),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},gCxi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.followPointerMovementX=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0};t.on("pointermove",function(u){o(u)&&(e.x=n?(0,i.clamp)(e.displayOriginX,(0,r.gameWidth)(t.systems.game)-e.displayOriginX,u.x):u.x)})};var r=n("4LSe"),i=n("ivXw")},gLpE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Paddle=void 0;var r=u(n("Zrlr")),i=u(n("wxAW")),o=n("gCxi");function u(t){return t&&t.__esModule?t:{default:t}}e.Paddle=function(){function t(e){(0,r.default)(this,t),this.graphics=e}return(0,i.default)(t,[{key:"setup",value:function(t){return this.graphics.setup(t),this.graphics.sprite().setImmovable(!0),(0,o.followPointerMovementX)(t.input,this.graphics.sprite()),this}},{key:"sprite",value:function(){return this.graphics.sprite()}},{key:"borderWidth",value:function(){return this.graphics.borderWidth()}},{key:"update",value:function(){return this.graphics.update(),this}},{key:"destroy",value:function(){return this.graphics.destroy(),this}}]),t}()},gP3b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BaseBrick=void 0;var r=o(n("Zrlr")),i=o(n("wxAW"));function o(t){return t&&t.__esModule?t:{default:t}}e.BaseBrick=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;(0,r.default)(this,t),this.graphics=e,this.hp=n}return(0,i.default)(t,[{key:"hitpoints",value:function(){return this.hp}},{key:"hit",value:function(){return this.hp>0&&(this.hp-=1,this.hp<=0&&this.destroy()),this}},{key:"sprite",value:function(){return this.graphics.sprite()}},{key:"borderWidth",value:function(){return this.graphics.borderWidth()}},{key:"setup",value:function(t){return this.graphics.setup(t),this.graphics.sprite().setImmovable(!0),this}},{key:"update",value:function(){return this.graphics.update(),this}},{key:"destroy",value:function(){return this.hp=0,this.graphics.destroy(),this}}]),t}()},"gzk/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Referee=void 0;var r=u(n("Zrlr")),i=u(n("wxAW")),o=n("7GoO");function u(t){return t&&t.__esModule?t:{default:t}}e.Referee=function(){function t(e,n,i){(0,r.default)(this,t),this.game=e,this.physics=n,this.entities=i}return(0,i.default)(t,[{key:"setup",value:function(t){var e=this;return t.input.on("pointerup",function(){e.entities.ball.isInPlay()||e.entities.ball.launch(e.physics.launchVelocity)}),this}},{key:"update",value:function(){return this.entities.ball.sprite().y>this.game.height&&this.entities.ball.reset((0,o.ballOnSpritePosition)(this.entities.ball,this.entities.paddle)),this}}]),t}()},h65t:function(t,e,n){var r=n("UuGF"),i=n("52gC");t.exports=function(t){return function(e,n){var o,u,s=String(i(e)),c=r(n),a=s.length;return c<0||c>=a?t?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===a||(u=s.charCodeAt(c+1))<56320||u>57343?t?s.charAt(c):o:t?s.slice(c,c+2):u-56320+(o-55296<<10)+65536}}},hJx8:function(t,e,n){var r=n("evD5"),i=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},hXrF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sprites=function(t){return(Array.isArray(t)?t:[t]).map(function(t){return t.sprite()})}},"i/C/":function(t,e,n){n("exh5"),t.exports=n("FeBl").Object.setPrototypeOf},jTUi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createBall=function(t,e){return new i.BaseBall(t,new r.BaseGraphicSprite(t,e))};var r=n("JWfv"),i=n("yVji")},kM2E:function(t,e,n){var r=n("7KvD"),i=n("FeBl"),o=n("+ZMJ"),u=n("hJx8"),s=function(t,e,n){var c,a,f,l=t&s.F,p=t&s.G,h=t&s.S,d=t&s.P,y=t&s.B,v=t&s.W,b=p?i:i[e]||(i[e]={}),g=b.prototype,_=p?r:h?r[e]:(r[e]||{}).prototype;for(c in p&&(n=e),n)(a=!l&&_&&void 0!==_[c])&&c in b||(f=a?_[c]:n[c],b[c]=p&&"function"!=typeof _[c]?n[c]:y&&a?o(f,r):v&&_[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?o(Function.call,f):f,d&&((b.virtual||(b.virtual={}))[c]=f,t&s.R&&g&&!g[c]&&u(g,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},kiBT:function(t,e,n){t.exports={default:n("i/C/"),__esModule:!0}},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var r=n("Ibhu"),i=n("xnc9");t.exports=Object.keys||function(t){return r(t,i)}},mClu:function(t,e,n){var r=n("kM2E");r(r.S+r.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},n0T6:function(t,e,n){var r=n("Ibhu"),i=n("xnc9").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},oM7Q:function(t,e,n){n("sF+V");var r=n("FeBl").Object;t.exports=function(t,e){return r.create(t,e)}},oZsQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.spritePosition=function(t){return{x:t.x,y:t.y}}},pDF3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setBoundsCollision=function(t,e){t.setBoundsCollision(e.left,e.right,e.top,e.bottom)}},pFYg:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n("Zzip")),i=u(n("5QVw")),o="function"==typeof i.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof i.default&&"symbol"===o(r.default)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":void 0===t?"undefined":o(t)}},"pPS/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createGraphics=function(t,e,n){return t.graphics({lineStyle:{width:n,color:e}})}},qio6:function(t,e,n){var r=n("evD5"),i=n("77Pl"),o=n("lktj");t.exports=n("+E39")?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),s=u.length,c=0;s>c;)r.f(t,n=u[c++],e[n]);return t}},rCYl:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.startX=function(t){return t.x-t.displayOriginX}},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},"sF+V":function(t,e,n){var r=n("kM2E");r(r.S,"Object",{create:n("Yobk")})},uqUo:function(t,e,n){var r=n("kM2E"),i=n("FeBl"),o=n("S82l");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},"vFc/":function(t,e,n){var r=n("TcQ7"),i=n("QRG4"),o=n("fkB2");t.exports=function(t){return function(e,n,u){var s,c=r(e),a=i(c.length),f=o(u,a);if(t&&n!=n){for(;a>f;)if((s=c[f++])!=s)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},"vIB/":function(t,e,n){"use strict";var r=n("O4g8"),i=n("kM2E"),o=n("880/"),u=n("hJx8"),s=n("D2L2"),c=n("/bQp"),a=n("94VQ"),f=n("e6n0"),l=n("PzxK"),p=n("dSzd")("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,y,v,b,g){a(n,e,y);var _,O,x,m=function(t){if(!h&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",w="values"==v,M=!1,P=t.prototype,S=P[p]||P["@@iterator"]||v&&P[v],j=!h&&S||m(v),B=v?w?m("entries"):j:void 0,E="Array"==e&&P.entries||S;if(E&&(x=l(E.call(new t)))!==Object.prototype&&x.next&&(f(x,k,!0),r||s(x,p)||u(x,p,d)),w&&S&&"values"!==S.name&&(M=!0,j=function(){return S.call(this)}),r&&!g||!h&&!M&&P[p]||u(P,p,j),c[e]=j,c[k]=d,v)if(_={values:w?j:m("values"),keys:b?j:m("keys"),entries:B},g)for(O in _)O in P||o(P,O,_[O]);else i(i.P+i.F*(h||M),e,_);return _}},wxAW:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("C4MV"),o=(r=i)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},xGkn:function(t,e,n){"use strict";var r=n("4mcu"),i=n("EGZi"),o=n("/bQp"),u=n("TcQ7");t.exports=n("vIB/")(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},yVji:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BaseBall=void 0;var r=u(n("Zrlr")),i=u(n("wxAW")),o=n("gCxi");function u(t){return t&&t.__esModule?t:{default:t}}e.BaseBall=function(){function t(e,n){(0,r.default)(this,t),this.graphics=n,this.config=e}return(0,i.default)(t,[{key:"setup",value:function(t){var e=this;return this.graphics.setup(t),this.graphics.sprite().setCollideWorldBounds(!0),this.graphics.sprite().setBounce(this.config.bounce,this.config.bounce),(0,o.followPointerMovementX)(t.input,this.graphics.sprite(),!0,function(){return!e.inPlay}),this}},{key:"sprite",value:function(){return this.graphics.sprite()}},{key:"borderWidth",value:function(){return this.graphics.borderWidth()}},{key:"launch",value:function(t){return this.isInPlay()||(this.graphics.sprite().setVelocity(t.x,t.y),this.inPlay=!0),this}},{key:"reset",value:function(t){return this.graphics.sprite().setVelocity(0,0),this.graphics.sprite().setPosition(t.x,t.y),this.inPlay=!1,this}},{key:"update",value:function(){return this.graphics.update(),this}},{key:"isInPlay",value:function(){return this.inPlay}},{key:"destroy",value:function(){return this.graphics.destroy(),this}}]),t}()},z3hQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createSprite=function(t,e,n,r){var i=t.sprite(e.x,e.y,r);return i.setScale(n.width,n.height),i.setOrigin(.5*n.width,.5*n.height),i}},z7HT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createPaddle=function(t,e){return new i.Paddle(new r.BaseGraphicSprite(t,e))};var r=n("JWfv"),i=n("gLpE")},z9ZG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createBricks=function(t,e,n){return new r.BaseBricks((0,o.times)((0,i.createBrickN)(t,e,n),t.rows*t.columns))};var r=n("/pID"),i=n("4V4I"),o=n("ivXw")},zQR9:function(t,e,n){"use strict";var r=n("h65t")(!0);n("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},zwoO:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("pFYg"),o=(r=i)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}}},["6sO2"]);