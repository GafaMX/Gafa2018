<?php

?>


<div class="gafa__hero">
	<div class="container-fluid">
		<div class="row">


			<div class="gafa__hero--somero">
				<canvas id="casiss"></canvas>
			</div>


			<div class="gafa__hero--canvas">


				<div class="gafa__hero--canvas--logo">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo--gafa-w.svg" />
				</div>
				<div class="gafa__hero--canvas--teaser">
					<h3 class="gafa__effects--glitch" data-text="La única constante es el">La única constante es el</h3>
				</div>
			            <div class="inner">
			                <div id="particleWrapper"><img id="image" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/cambio--slice.svg"></div>
								 <br /><br /><br /><br /><br /><br /><br /><br />
			                <div class="settings">
			                    <div id="settings" class="settings__toggle open"><svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M13.5333333,9.46666667 C13.4,9.93333333 13.2,10.4 13,10.8 L14.3333333,12.9333333 L13,14.2666667 L10.8666667,12.9333333 C10.4666667,13.2 10,13.3333333 9.53333333,13.4666667 L8.93333333,16 L7,16 L6.46666667,13.5333333 C6,13.4 5.53333333,13.2 5.13333333,13 L3,14.3333333 L1.66666667,13 L3,10.8666667 C2.73333333,10.4666667 2.6,10 2.46666667,9.53333333 L0,8.93333333 L0,7 L2.46666667,6.46666667 C2.6,6 2.8,5.53333333 3,5.13333333 L1.66666667,3 L3,1.66666667 L5.13333333,3 C5.53333333,2.73333333 6,2.6 6.46666667,2.46666667 L7,0 L8.93333333,0 L9.46666667,2.46666667 C9.93333333,2.6 10.4,2.8 10.8,3 L12.9333333,1.66666667 L14.2666667,3 L12.9333333,5.13333333 C13.2,5.53333333 13.3333333,6 13.4666667,6.46666667 L15.9333333,7 L15.9333333,8.93333333 L13.5333333,9.46666667 Z M8,11.5333333 C9.95140612,11.5333333 11.5333333,9.95140612 11.5333333,8 C11.5333333,6.04859388 9.95140612,4.46666667 8,4.46666667 C6.04859388,4.46666667 4.46666667,6.04859388 4.46666667,8 C4.46666667,9.95140612 6.04859388,11.5333333 8,11.5333333 Z"></path></svg><span>Settings</span></div>
			                    <div
			                        id="sidebar" class="settings__menu open"><span id="close" class="settings__close"></span>
			                        <h3>Settings</h3>
			                        <ul>
			                            <li class="settings__value settings__value--toggle"><span>Color</span><input id="color" type="color" value="#7f99f8" class="input">
			                                <div id="tint" class="toggle"></div>
			                            </li>
			                            <li class="settings__value settings__value--range"><output id="particleGapOutput">3</output>Gap <input id="particleGap" type="range" step="1" min="1" max="10" value="3" class="input"></li>
			                            <li class="settings__value settings__value--range"><output id="gravityOutput">0.08</output>Gravity <input id="gravity" type="range" step="0.01" min="0.01" max="1" value="0.08" class="input"></li>
			                            <li class="settings__value settings__value--range"><output id="noiseOutput">10</output>Noise <input id="noise" type="range" step="1" min="0" max="100" value="12" class="input"></li>
			                            <li class="settings__value settings__value--range"><output id="sizeOutput">550</output>Logo Size <input id="size" type="range" step="10" min="50" max="1600" value="900" class="input"></li>
			                            <li class="settings__value settings__value--range"><output id="mouseForceOutput">150</output>Mouse Force <input id="mouseForce" type="range" step="10" min="-200" max="200" value="150" class="input"></li>
			                            <li class="settings__value settings__value--toggle"><span>WebGL</span>
			                                <div id="webgl" class="toggle"></div>
			                            </li>
			                            <li class="settings__value settings__value--range settings__value--webgl settings__value--hidden"><output id="clickStrengthOutput">100</output>Click Strength <input id="clickStrength" type="range" step="1" min="-200" max="200" value="100" class="input"></li>
			                            <li class="settings__value settings__value--range settings__value--webgl settings__value--hidden"><output id="particleSizeOutput">1</output>Particle Size <input id="particleSize" type="range" step="0.1" min="0.5" max="5" value="1" class="input"></li>
			                            <li class="settings__value settings__value--range settings__value--webgl settings__value--hidden"><output id="layerCountOutput">2</output>Layer Count <input id="layerCount" type="range" step="1" min="1" max="15" value="2" class="input"></li>
			                            <li class="settings__value settings__value--range settings__value--webgl settings__value--hidden"><output id="layerDistanceOutput">5</output>Layer Distance <input id="layerDistance" type="range" step="0.1" min="0.1" max="20" value="5" class="input"></li>
			                            <li class="settings__value settings__value--range settings__value--webgl settings__value--hidden"><output id="depthOutput">1</output>Depth <input id="depth" type="range" step="0.1" min="0" max="100" value="1" class="input"></li>
			                            <li class="settings__value settings__value--toggle settings__value--webgl settings__value--hidden"><span>Life Cycle</span>
			                                <div id="lifeCycle" class="toggle"></div>
			                            </li>
			                            <li class="settings__value settings__value--range settings__value--life-cycle settings__value--hidden"><output id="growDurationOutput">200</output>Grow Duration <input id="growDuration" type="range" step="10" min="10" max="1000" value="200" class="input"></li>
			                            <li class="settings__value settings__value--range settings__value--life-cycle settings__value--hidden"><output id="waitDurationOutput">200</output>Wait Duration <input id="waitDuration" type="range" step="10" min="10" max="1000" value="200" class="input"></li>
			                            <li class="settings__value settings__value--range settings__value--life-cycle settings__value--hidden"><output id="shrinkDurationOutput">200</output>Shrink Duration <input id="shrinkDuration" type="range" step="10" min="10" max="1000" value="200" class="input"></li>
			                            <li class="settings__value settings__value--range settings__value--life-cycle settings__value--hidden"><output id="shrinkDistanceOutput">50</output>Shrink Distance <input id="shrinkDistance" type="range" step="10" min="-100" max="200" value="50" class="input"></li>
			                        </ul>
			                </div>
			            </div>
			    </div>



			    </div>





			            <script type="text/javascript">
							"use strict";var $elems=document.all;if(!$elems){$elems={};for(var allElements=document.getElementsByTagName("*"),i=0,n=allElements.length;i<n;++i){var el=allElements[i];el.id&&($elems[el.id]=el)}}
			                "use strict";var _createClass=function(){function h(t,i){for(var e=0;e<i.length;e++){var h=i[e];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(t,h.key,h)}}return function(t,i,e){return i&&h(t.prototype,i),e&&h(t,e),t}}();function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}!function(t){var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){setTimeout(t,10)},h=void Math.PI,s=void 0,a=void 0,n=void 0,o=void 0,r=void 0,c=void 0,d=void 0,l=void 0,m=void 0,g=void 0,v=void 0,u=void 0,x=void 0,f=void 0,p=void 0,y=void 0,M=void 0,w=void 0,I=void 0,_=void 0,P=void 0,k=void 0,b=void 0,D=void 0,E=void 0,C=void 0,S=void 0,A=void 0,e=function(){function e(t){_classCallCheck(this,e);var i={};t&&(t.nodeName?(i=JSON.parse(JSON.stringify(t.dataset)),"IMG"===t.nodeName?i.image=t:i.wrapperElement=t):i=t),this.state="stopped",this.touches=[],this.on("imageLoaded",this._onImageLoaded),this._initImage(i)}return _createClass(e,[{key:"on",value:function(t,i){this.events=this.events||{},this.events[t]=this.events[t]||[],this.events[t].push(i)}},{key:"emit",value:function(t,i){var e=this.events[t];if(e&&e.length)for(var h=0;h<e.length;h++)e[h].call(this,i)}},{key:"start",value:function(t){var i=t||{};this.initPosition=i.initPosition||this.initPosition,this.initDirection=i.initDirection||this.initDirection,this.canvas&&(this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.display=""),this._initOrigins(),this._initParticles(),this._webglSetAttributes(),"running"!==this.state&&(this.state="running",this.disableInteraction||("ontouchstart"in window||window.navigator.msPointerEnabled?(document.body.addEventListener("touchstart",this._touchHandler),document.body.addEventListener("touchmove",this._touchHandler),document.body.addEventListener("touchend",this._clearTouches),document.body.addEventListener("touchcancel",this._clearTouches)):(this.canvas.addEventListener("mousemove",this._mouseHandler),this.canvas.addEventListener("mouseout",this._clearTouches),this.canvas.addEventListener("click",this._clickHandler))),this._animate())}},{key:"stop",value:function(t){var i=t||{};this.fadePosition=i.fadePosition||this.fadePosition,this.fadeDirection=i.fadeDirection||this.fadeDirection,this._fade(),document.body.removeEventListener("touchstart",this._touchHandler),document.body.removeEventListener("touchmove",this._touchHandler),document.body.removeEventListener("touchend",this._clearTouches),document.body.removeEventListener("touchcancel",this._clearTouches),this.canvas&&(this.canvas.removeEventListener("mousemove",this._mouseHandler),this.canvas.removeEventListener("mouseout",this._clearTouches),this.canvas.removeEventListener("click",this._clickHandler))}},{key:"_animate",value:function(){var t=this;"stopped"!==this.state?(this._calculate(),this._draw(),i(function(){return t._animate()})):this.emit("stopped")}},{key:"_onImageLoaded",value:function(t){this.imageWidth=this.image.naturalWidth||this.image.width,this.imageHeight=this.image.naturalHeight||this.image.height,this.imageRatio=this.imageWidth/this.imageHeight,this.width=this.width||this.imageWidth,this.height=this.height||this.imageHeight,this.renderSize=(this.width+this.height)/4,this.srcImage&&(this.srcImage.style.display="none"),this._initSettings(t),this._initContext(t),this._initResponsive(t),this.start()}},{key:"_initImage",value:function(t){var i=this;this.srcImage=t.image,!this.srcImage&&t.imageId&&(this.srcImage=document.getElementById(t.imageId)),this.imageUrl=t.imageUrl||this.srcImage.src,this.image=document.createElement("img"),this.wrapperElement=t.wrapperElement||this.srcImage.parentElement,this.image.onload=function(){return i.emit("imageLoaded",t)},this.image.crossOrigin="Anonymous",t.addTimestamp&&(/\?/.test(this.imageUrl)?this.imageUrl+="&d="+Date.now():this.imageUrl+="?d="+Date.now()),this.image.src=this.imageUrl}},{key:"_initContext",value:function(t){this.canvas=t.canvas,this.canvas||this.context||!this.wrapperElement||(this.canvas=document.createElement("canvas"),this.wrapperElement.appendChild(this.canvas)),this.convas&&(this.convas.style.display="none"),this.context=t.context,this.renderer=t.renderer||"default"}},{key:"_defaultInitContext",value:function(t){this.context=this.context||this.canvas.getContext("2d")}},{key:"_webglInitContext",value:function(){this.context=this.context||this.canvas.getContext("webgl2")||this.canvas.getContext("experimental-webgl"),this.fragmentShaderScript="#version 300 es\n\n        precision highp float;\n\n        in vec4 vColor;\n        out vec4 fragColor;\n\n        void main(void) {\n          // fragColor = vec4(1, 1, 1, 0.1);\n          fragColor = vColor;\n        }\n      ",this.vertexShaderScript="#version 300 es\n\n        precision highp float;\n\n        in vec3 vertexPosition;\n        in vec4 vertexColor;\n        uniform vec3 vertexOffset;\n        uniform float pointSize;\n        uniform float depth;\n        vec3 mirror = vec3(1, -1, 1);\n\n        uniform mat4 modelViewMatrix;\n        uniform mat4 perspectiveMatrix;\n        uniform mat4 rotationMatrix;\n\n        out vec4 vColor;\n\n        void main(void) {\n          gl_Position = rotationMatrix * perspectiveMatrix * modelViewMatrix * vec4(mirror * vertexPosition + vertexOffset, vertexPosition);\n          gl_PointSize = pointSize + max((log(vertexPosition.z) - 3.91) * depth, -pointSize + 1.0);\n          vColor = vertexColor;\n        }\n      ",this.context.viewport(0,0,this.width,this.height);var t=this.context.createShader(this.context.VERTEX_SHADER);this.context.shaderSource(t,this.vertexShaderScript),this.context.compileShader(t),this.context.getShaderParameter(t,this.context.COMPILE_STATUS)||console.log(this.context.getShaderInfoLog(t));var i=this.context.createShader(this.context.FRAGMENT_SHADER);this.context.shaderSource(i,this.fragmentShaderScript),this.context.compileShader(i),this.context.getShaderParameter(i,this.context.COMPILE_STATUS)||console.log(this.context.getShaderInfoLog(i)),this.program=this.context.createProgram(),this.context.attachShader(this.program,t),this.context.attachShader(this.program,i),this.context.linkProgram(this.program),this.context.useProgram(this.program),this.vertexPosition=this.context.getAttribLocation(this.program,"vertexPosition"),this.context.enableVertexAttribArray(this.vertexPosition),this.vertexColor=this.context.getAttribLocation(this.program,"vertexColor"),this.context.enableVertexAttribArray(this.vertexColor),this.context.clearColor(0,0,0,0),this.context.enable(this.context.BLEND),this.context.disable(this.context.DEPTH_TEST),this.context.blendFunc(this.context.SRC_ALPHA,this.context.ONE),this.vertexBuffer=this.context.createBuffer(),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.vertexBuffer),this.context.clear(this.context.COLOR_BUFFER_BIT|this.context.DEPTH_BUFFER_BIT),this.vertexOffset=this.context.getUniformLocation(this.program,"vertexOffset"),this.context.uniform3f(this.vertexOffset,0,0,1e3),this.context.vertexAttribPointer(this.vertexPosition,3,this.context.FLOAT,!1,28,0),this.context.vertexAttribPointer(this.vertexColor,4,this.context.FLOAT,!1,28,12),this.uModelViewMatrix=this.context.getUniformLocation(this.program,"modelViewMatrix"),this.uPerspectiveMatrix=this.context.getUniformLocation(this.program,"perspectiveMatrix"),this.uRotationMatrix=this.context.getUniformLocation(this.program,"rotationMatrix"),this.uPointSize=this.context.getUniformLocation(this.program,"pointSize"),this.uDepth=this.context.getUniformLocation(this.program,"depth"),this._webglSetAttributes()}},{key:"_webglSetAttributes",value:function(){if("webgl"===this.renderer){var t=this.canvas.width/this.canvas.height,i=10*Math.tan(1*Math.PI/360),e=-i,h=i*t,s=-h,a=[20/(h-s),0,(h+s)/(h-s),0,0,20/(i-e),(i+e)/(i-e),0,0,0,110/90,2e3/90,0,0,-1,0];this.context.viewport(0,0,this.width,this.height),this.context.uniformMatrix4fv(this.uModelViewMatrix,!1,new Float32Array(a)),this.context.uniformMatrix4fv(this.uPerspectiveMatrix,!1,new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])),this.context.uniform1f(this.uPointSize,this.particleSize),this.context.uniform1f(this.uDepth,this.depth),this._updateRotation()}}},{key:"_updateRotation",value:function(){var t=Math.cos(0),i=Math.sin(0),e=Math.cos(0),h=[e,0,Math.sin(0),0,0,t,-i,0,-e,i,t,0,0,0,0,1];this.context.uniformMatrix4fv(this.uRotationMatrix,!1,new Float32Array(h))}},{key:"_webglRenderer",value:function(){_=new Float32Array(this.vertices),this.context.bufferData(this.context.ARRAY_BUFFER,_,this.context.STATIC_DRAW),this.context.clear(this.context.COLOR_BUFFER_BIT|this.context.DEPTH_BUFFER_BIT),this.context.drawArrays(this.context.POINTS,0,this.particles.length),this.context.flush()}},{key:"_initSettings",value:function(t){this.width=1*t.width||this.width,this.height=1*t.height||this.height,this.maxWidth=t.maxWidth,this.maxHeight=t.maxHeight,this.minWidth=t.minWidth,this.minHeight=t.minHeight,this.maxWidth&&(/%$/.test(this.maxWidth)?this.maxWidth=this.width*this.maxWidth.replace("%","")/100:this.maxWidth*=1),this.maxHeight&&(/%$/.test(this.maxHeight)?this.maxHeight=this.height*this.maxHeight.replace("%","")/100:this.maxHeight*=1),this.minWidth&&(/%$/.test(this.minWidth)?this.minWidth=this.width*this.minWidth.replace("%","")/100:this.minWidth*=1),this.minHeight&&(/%$/.test(this.minHeight)?this.minHeight=this.height*this.minHeight.replace("%","")/100:this.minHeight*=1),this.alphaFade=.4,this.gravity=1*t.gravity||.08,this.particleGap=1*t.particleGap||3,this.particleSize=1*t.particleSize||1,this.layerCount=1*t.layerCount||1,this.depth=1*t.depth||1,this.rotationDuration=1*t.rotationDuration||0,this.growDuration=1*t.growDuration||200,this.waitDuration=1*t.waitDuration||200,this.shrinkDuration=1*t.shrinkDuration||200,this.shrinkDistance=1*t.shrinkDistance||50,this.threeDimensional=void 0!==t.threeDimensional&&"false"!==t.threeDimensional&&!!t.threeDimensional,this.lifeCycle=void 0!==t.lifeCycle&&"false"!==t.lifeCycle&&!!t.lifeCycle,this.layerDistance=t.layerDistance||this.particleGap,this.initPosition=t.initPosition||"random",this.initDirection=t.initDirection||"random",this.fadePosition=t.fadePosition||"none",this.fadeDirection=t.fadeDirection||"none",this.noise=isNaN(1*t.noise)?10:1*t.noise,this.disableInteraction=t.disableInteraction,this.mouseForce=1*t.mouseForce||30,this.clickStrength=1*t.clickStrength||0,this.color=t.color,this.colorArr=t.colorArr||this.colorArr}},{key:"_initResponsive",value:function(t){var i=this;this.responsiveWidth=this.wrapperElement&&t.responsiveWidth,this.responsiveWidth&&(this.on("stopped",function(){i.width=i.wrapperElement.clientWidth,i.start()}),this.wrapperElement.addEventListener("resize",function(){i.width!==i.wrapperElement.clientWidth&&i.stop()}),this.width=this.wrapperElement.clientWidth)}},{key:"_calculate",value:function(){for(this.vertices="webgl"===this.renderer&&[],a=s=0;a<this.particles.length;a++){for(r=this.origins[a],c=this.particles[a],x=r.x-c.x+(Math.random()-.5)*this.noise,f=r.y-c.y+(Math.random()-.5)*this.noise,p=r.z-c.z+(Math.random()-.5)*this.noise/1e3,y=Math.sqrt(x*x+f*f+p*p),M=.01*y,c.vx+=M*(x/y)*this.speed,c.vy+=M*(f/y)*this.speed,c.vz+=M*(p/y)*this.speed,l=0;l<this.touches.length;l++)d=this.touches[l],x=c.x-d.x,f=c.y-d.y,p=c.z-d.z,y=Math.sqrt(x*x+f*f+p*p),M=this.mouseForce*d.force/y,c.vx+=M*(x/y)*this.speed,c.vy+=M*(f/y)*this.speed,c.vz+=M*(p/y)*this.speed;c.vx*=this.gravityFactor,c.vy*=this.gravityFactor,c.vz*=this.gravityFactor,c.x+=c.vx,c.y+=c.vy,c.z+=c.vz,c.x<0||c.x>=this.width||c.y<0||c.y>=this.height?(c.isHidden=!0,"stopping"===this.state&&(c.isDead=!0)):("stopping"!==this.state||c.isDead||s++,c.isHidden=!1),this.vertices&&(g=c.x-this.width/2,v=c.y-this.height/2,u=c.z,S=r.vertexColors[3],this.lifeCycle&&(r.tick+=1,0<=r.tick?r.tick<this.growDuration?S*=r.tick/this.growDuration:0<=(A=r.tick-this.growDuration-this.waitDuration)&&A<=this.shrinkDuration&&(d=this.touches[l],y=Math.sqrt(g*g+v*v+(u-50)*(u-50)),M=A/this.shrinkDuration,g+=this.shrinkDistance*(g/y)*M,v+=this.shrinkDistance*(v/y)*M,u+=this.shrinkDistance*((u-50)/y)*M,S*=1-M,A===this.shrinkDuration&&(r.tick=0)):S=0),this.vertices.push(g,v,u,r.vertexColors[0],r.vertexColors[1],r.vertexColors[2],S))}"stopping"===this.state&&0===s&&(this.state="stopped")}},{key:"_defaultRenderer",value:function(){for(this.depth=Math.max(this.layerDistance*this.layerCount/2,this.mouseForce),this.minZ=-this.depth,this.maxZ=this.depth,h=this.context.createImageData(this.width,this.height),a=0;a<this.origins.length;a++)r=this.origins[a],(c=this.particles[a]).isDead||c.isHidden||(g=~~c.x,v=~~c.y,S=r.color[3],0<this.alphaFade&&1<this.layerCount&&(u=Math.max(Math.min(c.z,this.maxZ),this.minZ)-this.minZ,S=S*(1-this.alphaFade)+S*this.alphaFade*(u/(this.maxZ-this.minZ)),S=Math.max(Math.min(~~S,255),0)),n=4*(g+v*this.width),h.data[n+0]=r.color[0],h.data[n+1]=r.color[1],h.data[n+2]=r.color[2],h.data[n+3]=S);this.context.putImageData(h,0,0)}},{key:"_initParticles",value:function(){for(this.particles=void 0,this.particles=[],a=0;a<this.origins.length;a++)r=this.origins[a],c={},this._initParticlePosition(r,c),this._initParticleDirection(c),this.particles.push(c)}},{key:"_initParticlePosition",value:function(t,i){switch(i.z=0,this.initPosition){case"random":i.x=Math.random()*this.width,i.y=Math.random()*this.height;break;case"top":i.x=Math.random()*this.width*3-this.width,i.y=-Math.random()*this.height;break;case"left":i.x=-Math.random()*this.width,i.y=Math.random()*this.height*3-this.height;break;case"bottom":i.x=Math.random()*this.width*3-this.width,i.y=this.height+Math.random()*this.height;break;case"right":i.x=this.width+Math.random()*this.width,i.y=Math.random()*this.height*3-this.height;break;case"misplaced":i.x=t.x+Math.random()*this.width*.3-.1*this.width,i.y=t.y+Math.random()*this.height*.3-.1*this.height;break;default:i.x=t.x,i.y=t.y}}},{key:"_fade",value:function(){if("explode"===this.fadePosition||"top"===this.fadePosition||"left"===this.fadePosition||"bottom"===this.fadePosition||"right"===this.fadePosition?this.state="stopping":this.state="stopped",this.origins)for(a=0;a<this.origins.length;a++)this._fadeOriginPosition(this.origins[a]),this._fadeOriginDirection(this.particles[a])}},{key:"_fadeOriginPosition",value:function(t){switch(this.fadePosition){case"random":t.x=Math.random()*this.width*2-this.width,t.y=Math.random()*this.height*2-this.height,0<t.x&&(t.x+=this.width),0<t.y&&(t.y+=this.height);break;case"top":t.x=Math.random()*this.width*3-this.width,t.y=-Math.random()*this.height;break;case"left":t.x=-Math.random()*this.width,t.y=Math.random()*this.height*3-this.height;break;case"bottom":t.x=Math.random()*this.width*3-this.width,t.y=this.height+Math.random()*this.height;break;case"right":t.x=this.width+Math.random()*this.width,t.y=Math.random()*this.height*3-this.height}}},{key:"_initParticleDirection",value:function(t){switch(t.vz=0,this.initDirection){case"random":w=Math.random()*Math.PI*2,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;case"top":w=Math.random()*Math.PI-Math.PI/2,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;case"left":w=Math.random()*Math.PI+Math.PI,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;case"bottom":w=Math.random()*Math.PI+Math.PI/2,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;case"right":w=Math.random()*Math.PI,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;default:t.vx=0,t.vy=0}}},{key:"_fadeOriginDirection",value:function(t){switch(this.fadeDirection){case"random":w=Math.random()*Math.PI*2,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;case"top":w=Math.random()*Math.PI-Math.PI/2,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;case"left":w=Math.random()*Math.PI+Math.PI,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;case"bottom":w=Math.random()*Math.PI+Math.PI/2,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;case"right":w=Math.random()*Math.PI,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;default:t.vx=0,t.vy=0}}},{key:"_initOrigins",value:function(){P=document.createElement("canvas"),this.responsiveWidth&&(this.width=this.wrapperElement.clientWidth),this.ratio=Math.min(this.width,this.maxWidth||Number.POSITIVE_INFINITY)/Math.min(this.height,this.maxHeight||Number.POSITIVE_INFINITY),this.ratio<this.imageRatio?(this.renderWidth=~~Math.min(this.width||Number.POSITIVE_INFINITY,this.minWidth||this.imageWidth||Number.POSITIVE_INFINITY,this.maxWidth||Number.POSITIVE_INFINITY),this.renderHeight=~~(this.renderWidth/this.imageRatio)):(this.renderHeight=~~Math.min(this.height||Number.POSITIVE_INFINITY,this.minHeight||this.imageHeight||Number.POSITIVE_INFINITY,this.maxHeight||Number.POSITIVE_INFINITY),this.renderWidth=~~(this.renderHeight*this.imageRatio)),this.offsetX=~~((this.width-this.renderWidth)/2),this.offsetY=~~((this.height-this.renderHeight)/2),P.width=this.renderWidth,P.height=this.renderHeight,(k=P.getContext("2d")).drawImage(this.image,0,0,this.renderWidth,this.renderHeight),b=k.getImageData(0,0,this.renderWidth,this.renderHeight).data,this.origins=void 0,this.origins=[];var t=this.growDuration+this.waitDuration+this.shrinkDuration;for(g=0;g<this.renderWidth;g+=this.particleGap)for(v=0;v<this.renderHeight;v+=this.particleGap)if(a=4*(g+v*this.renderWidth),0<(S=b[a+3])){var i=Math.random();if(A=-Math.floor(i*t),this.colorArr)for(o=0;o<this.layerCount;o++)this.origins.push({x:this.offsetX+g,y:this.offsetY+v,z:o*this.layerDistance+50,color:this.colorArr,tick:A,seed:i,vertexColors:this.colorArr.map(function(t){return t/255})});else for(D=b[a],E=b[a+1],C=b[a+2],o=0;o<this.layerCount;o++)this.origins.push({x:this.offsetX+g,y:this.offsetY+v,z:o*this.layerDistance+50,color:[D,E,C,S],tick:A,seed:i,vertexColors:[D/255,E/255,C/255,S/255]})}this.speed=Math.log(this.origins.length)/10,this.gravityFactor=1-this.gravity*this.speed}},{key:"_parseColor",value:function(t){var i=void 0;if("string"==typeof t){var e=t.replace(" ","");if(i=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(e))i=[parseInt(i[1],16),parseInt(i[2],16),parseInt(i[3],16)];else if(i=/^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(e))i=[17*parseInt(i[1],16),17*parseInt(i[2],16),17*parseInt(i[3],16)];else if(i=/^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(e))i=[+i[1],+i[2],+i[3],+i[4]];else{if(!(i=/^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(e)))return;i=[+i[1],+i[2],+i[3]]}return i}}},{key:"renderer",get:function(){return this._renderer},set:function(i){this._renderer=i,this._draw=this["_"+i+"Renderer"];try{this["_"+i+"InitContext"]()}catch(t){console.log(t),"default"!==i&&(this.renderer="default")}}},{key:"color",set:function(t){this.colorArr=this._parseColor(t),this.colorArr&&(isNaN(this.colorArr[3])&&(this.colorArr[3]=255),0<this.colorArr[3]&&this.colorArr[3]<=1&&(this.colorArr[3]*=255))}},{key:"_mouseHandler",get:function(){var i=this;return function(t){i.touches=[{x:t.offsetX,y:t.offsetY,z:49+(i.layerCount-1)*i.layerDistance,force:1}]}}},{key:"_clickHandler",get:function(){var e=this;return function(t){var i=e.clickStrength;e.origins.map(function(t){return t.z-=i}),setTimeout(function(){e.origins.map(function(t){return t.z+=i})},100)}}},{key:"_touchHandler",get:function(){var i=this;return function(t){for(i.touches=[],m=i.canvas.getBoundingClientRect(),l=0;l<t.changedTouches.length;l++)(d=t.changedTouches[l]).target===i.canvas&&(i.touches.push({x:d.pageX-m.left,y:d.pageY-m.top,z:49+(i.layerCount-1)*i.layerDistance,force:d.force||1}),t.preventDefault())}}},{key:"_clearTouches",get:function(){var i=this;return function(t){i.touches=[]}}}]),e}();t.NextParticle=e;for(var H=document.getElementsByClassName("next-particle"),F=0;F<H.length;F++){var T=H[F];T.nextParticle=new e(T)}}(window)

			                "use strict";var $toggles=document.getElementsByClassName("toggle");$elems.settings.addEventListener("click",function(){$elems.sidebar.classList.toggle("open"),$elems.settings.classList.toggle("open")}),$elems.close.addEventListener("click",function(){$elems.sidebar.classList.toggle("open"),$elems.settings.classList.toggle("open")});for(var toggleIndex=0;toggleIndex<$toggles.length;toggleIndex++){var $toggle=$toggles[toggleIndex];!function(e){e.addEventListener("click",function(){e.classList.toggle("toggle--checked")})}($toggle)}var isHighDensity=window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches)||window.devicePixelRatio&&1.3<window.devicePixelRatio,isRetina=(window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)").matches)||window.devicePixelRatio&&2<=window.devicePixelRatio)&&!/(iPad|iPhone|iPod)/g.test(navigator.userAgent),isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),scalingFactor=1;isMobile||(isRetina?(document.body.classList.add("retina"),scalingFactor=1.5):isHighDensity&&(document.body.classList.add("high-res"),scalingFactor=1.25));var nextParticle=void 0,refreshSettings=function(e){e&&(e.preventDefault(),e.stopPropagation());var t=$elems.webgl.classList.contains("toggle--checked");t||$elems.lifeCycle.classList.remove("toggle--checked");var i=$elems.lifeCycle.classList.contains("toggle--checked");nextParticle&&(nextParticle.stop(),nextParticle.canvas.remove()),nextParticle=new NextParticle({color:tint.classList.contains("toggle--checked")?$elems.color.value:void 0,renderer:t?"webgl":"default",image:$elems.image,particleGap:1*$elems.particleGap.value,mouseForce:1*$elems.mouseForce.value,clickStrength:1*$elems.clickStrength.value,noise:1*$elems.noise.value,gravity:1*$elems.gravity.value,width:~~($elems.particleWrapper.clientWidth*scalingFactor),height:~~($elems.particleWrapper.clientHeight*scalingFactor),maxWidth:~~($elems.size.value*scalingFactor),maxHeight:~~($elems.size.value*scalingFactor),particleSize:1*$elems.particleSize.value,layerCount:1*$elems.layerCount.value,depth:1*$elems.depth.value,layerDistance:1*$elems.layerDistance.value,lifeCycle:i,growDuration:1*$elems.growDuration.value,waitDuration:1*$elems.waitDuration.value,shrinkDuration:1*$elems.shrinkDuration.value,shrinkDistance:1*$elems.shrinkDistance.value}),$elems.particleGapOutput.value=$elems.particleGap.value,$elems.gravityOutput.value=$elems.gravity.value,$elems.mouseForceOutput.value=$elems.mouseForce.value,$elems.clickStrengthOutput.value=$elems.clickStrength.value,$elems.noiseOutput.value=$elems.noise.value,$elems.sizeOutput.value=$elems.size.value,$elems.particleSizeOutput.value=$elems.particleSize.value,$elems.layerCountOutput.value=$elems.layerCount.value,$elems.layerDistanceOutput.value=$elems.layerDistance.value,$elems.depthOutput.value=$elems.depth.value,$elems.particleSizeOutput.value=$elems.particleSize.value,$elems.growDurationOutput.value=$elems.growDuration.value,$elems.waitDurationOutput.value=$elems.waitDuration.value,$elems.shrinkDurationOutput.value=$elems.shrinkDuration.value,$elems.shrinkDistanceOutput.value=$elems.shrinkDistance.value,document.querySelectorAll(".settings__value--life-cycle").forEach(function(e){e.classList[i?"remove":"add"]("settings__value--hidden")}),document.querySelectorAll(".settings__value--webgl").forEach(function(e){e.classList[t?"remove":"add"]("settings__value--hidden")})};$elems.tint.addEventListener("click",refreshSettings),$elems.color.addEventListener("change",refreshSettings),$elems.particleGap.addEventListener("change",refreshSettings),$elems.gravity.addEventListener("change",refreshSettings),$elems.mouseForce.addEventListener("change",refreshSettings),$elems.noise.addEventListener("change",refreshSettings),$elems.size.addEventListener("change",refreshSettings),$elems.webgl.addEventListener("click",refreshSettings),$elems.particleGap.addEventListener("input",refreshSettings),$elems.gravity.addEventListener("input",refreshSettings),$elems.mouseForce.addEventListener("input",refreshSettings),$elems.clickStrength.addEventListener("input",refreshSettings),$elems.noise.addEventListener("input",refreshSettings),$elems.size.addEventListener("input",refreshSettings),$elems.particleSize.addEventListener("input",refreshSettings),$elems.clickStrength.addEventListener("change",refreshSettings),$elems.particleSize.addEventListener("change",refreshSettings),$elems.layerCount.addEventListener("change",refreshSettings),$elems.layerDistance.addEventListener("change",refreshSettings),$elems.depth.addEventListener("change",refreshSettings),$elems.layerCount.addEventListener("input",refreshSettings),$elems.layerDistance.addEventListener("input",refreshSettings),$elems.depth.addEventListener("input",refreshSettings),$elems.lifeCycle.addEventListener("click",refreshSettings),$elems.growDuration.addEventListener("change",refreshSettings),$elems.waitDuration.addEventListener("change",refreshSettings),$elems.shrinkDuration.addEventListener("change",refreshSettings),$elems.shrinkDistance.addEventListener("change",refreshSettings),$elems.growDuration.addEventListener("input",refreshSettings),$elems.waitDuration.addEventListener("input",refreshSettings),$elems.shrinkDuration.addEventListener("input",refreshSettings),$elems.shrinkDistance.addEventListener("input",refreshSettings),window.addEventListener("resize",refreshSettings),refreshSettings()
			            </script>


							</div>
		</div>
	</div>
</div>
