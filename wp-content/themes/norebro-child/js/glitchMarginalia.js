// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();
  
var BlotterSite = {};

BlotterSite.GlitchMarginalia = function (canvas) {
  this.init.apply(this, arguments);
  
}
  
BlotterSite.GlitchMarginalia.prototype = (function () {
  var rtVertexSrc = [

    "varying vec2 _vTexCoord;",

    "void main() {",

    "  _vTexCoord = uv;",
    "  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",

    "}"

  ].join("\n");

  var rtFragmentSrc = [

    "// Based heavily on https://thebookofshaders.com/13/ by Patricio Gonzalez Vivo",
    "// and https://www.shadertoy.com/view/MslGR8 by Hornet",

    "uniform vec2 uResolution;",
    "uniform vec2 uSamplerResolution;",
    "uniform sampler2D uSampler;",
    "uniform float uTime;",
    "uniform float uTimeOffset;",

    "varying vec2 _vTexCoord;",

    "float random (in vec2 st) {",
    "    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);",
    "}",

    "// Based on Morgan McGuire @morgan3d",
    "// https://www.shadertoy.com/view/4dS3Wd",
    "float noise (in vec2 st) {",
    "    vec2 i = floor(st);",
    "    vec2 f = fract(st);",

    "    // Four corners in 2D of a tile",
    "    float a = random(i);",
    "    float b = random(i + vec2(1.0, 0.0));",
    "    float c = random(i + vec2(0.0, 1.0));",
    "    float d = random(i + vec2(1.0, 1.0));",

    "    vec2 u = f * f * (3.0 - 2.0 * f);",

    "    return mix(a, b, u.x) + ",
    "            (c - a)* u.y * (1.0 - u.x) + ",
    "            (d - b) * u.x * u.y;",
    "}",

    "float fbm (in vec2 st, in float speed) {",
    "    // Initial values",
    "    float value = 0.0;",
    "    float amplitud = .5;",
    "    float frequency = 0.;",
    "    float offsetTime = (uTime + uTimeOffset);",
    
    "    // Loop of octaves",
    "    for (int i = 0; i < 6; i++) {",
    "        value += amplitud * noise(st + speed * offsetTime);",
    "        st *= 2.;",
    "        amplitud *= .5;",
    "    }",
    "    return value;",
    "}",

    "void combineColors( out vec4 adjustedColor, in vec4 bg, in vec4 color ) {",
    "    float a = color.a;",

    "    float r = (1.0 - a) * bg.r + a * color.r;",
    "    float g = (1.0 - a) * bg.g + a * color.g;",
    "    float b = (1.0 - a) * bg.b + a * color.b;",

    "    adjustedColor = vec4(r, g, b, 1.0);",
    "}",

    "void main () {",
    "    vec2 uv = _vTexCoord;",

    "    const float c0 = 128.0;",
        
    "    float offsetTime = (uTime + uTimeOffset);",
    "    float ditherSpeed = 0.5;",
    "    float fogSpeed = 0.7;",
    "    float spread = 2.0;",

    "    float its = mix(0.0, 1.0 / c0, 0.985 + (0.015 * sin(ditherSpeed * offsetTime)));",
    "    float ofs = texture2D(uSampler, gl_FragCoord.xy / uSamplerResolution / spread, 1.0).r;",

    "    vec3 ditherColor;",
    "    ditherColor = vec3(its + (ofs / 255.0));",
    "    ditherColor.rgb = floor(ditherColor.rgb * 255.0) / 255.0;",
    "    ditherColor.rgb *= c0;",

    "    vec2 st = uv;",
    "    st.x *= (uResolution.x / uResolution.y) / 2.0;",
    "    vec3 noise = vec3(0.0);",
    "    noise += fbm(st * 3.344, fogSpeed);",

    "    float alphaModifier = smoothstep(0.0, 1.0, (noise.r + noise.g + noise.b) / 3.0) - 0.185;",

    "    vec4 outColor = vec4(vec3(0.0), smoothstep(0.0, 0.65, (1.0 - min(ditherColor.r, min(ditherColor.g, ditherColor.b))) * alphaModifier));",
    "    combineColors(gl_FragColor, vec4(1.0), outColor);",
    "}"

  ].join("\n");

  var vertexSrc = [

    "varying vec2 _vTexCoord;",

    "void main() {",

    "  _vTexCoord = uv;",
    "  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",

    "}"

  ].join("\n");

  var fragmentSrc = [
    "// Based on https://www.shadertoy.com/view/Md2GDw by Kusma",

    "uniform vec2 uResolution;",
    "uniform sampler2D uSampler;",
    "uniform float uTime;",
    "uniform float uTimeOffset;",

    "varying vec2 _vTexCoord;",

    "void rgbaFromRgb( out vec4 rgba, in vec3 rgb ) {",
    "  float a = 1.0 - min(rgb.r, min(rgb.g, rgb.b));",

    "  float r = 1.0 - (1.0 - rgb.r) / a;",
    "  float g = 1.0 - (1.0 - rgb.g) / a;",
    "  float b = 1.0 - (1.0 - rgb.b) / a;",

    "  rgba = vec4(r, g, b, a);",
    "}",

    "void main () {",
    "    vec2 uv = _vTexCoord;",
    "    float offsetTime = (uTime + uTimeOffset);",
    
    "    vec2 block = floor(gl_FragCoord.xy / vec2(64));",
    "    vec2 uv_noise = block / vec2(64);",
    "    uv_noise += floor(vec2(offsetTime)) / vec2(128);",

    "    float block_thresh = pow(fract((offsetTime * 0.5) * 1236.0453), 2.0) * 1.15;",

    "    vec2 uv_r = uv, uv_g = uv, uv_b = uv;",

    "    if (texture2D(uSampler, uv_noise).r < block_thresh ) {",
    "    	 vec2 dist = (fract(uv_noise) / uResolution.xy) * 8.25;",
    "      uv_r += dist * 1.65;",
    "    	 uv_g += dist * 1.05;",
    "    	 uv_b += dist * 1.795;",
    "    }",

    "    vec4 outColor;",
    "    outColor.r = texture2D(uSampler, uv_r).r;",
    "    outColor.g = texture2D(uSampler, uv_g).g;",
    "    outColor.b = texture2D(uSampler, uv_b).b;",
    "    rgbaFromRgb(gl_FragColor, outColor.rgb);",
    "}"

  ].join("\n");

  return {
    constructor : BlotterSite.GlitchMarginalia,

    init : function (canvas) {
      this.canvas = canvas;

      this.$canvas = jQuery(canvas);
      this.width = this.$canvas.width();
      this.height = this.$canvas.height();

      this.imageSrc = "https://i.imgur.com/qB4h1Ow.png";
      this.imageWidth = 8;
      this.imageHeight = 8;

      this.rtVertexSrc = rtVertexSrc;
      this.rtFragmentSrc = rtFragmentSrc;

      this.vertexSrc = vertexSrc;
      this.fragmentSrc = fragmentSrc;

      this.startTime = new Date().getTime();
      this.timeOffset = _.random(0, 42);
    },

    build : function (callback) {
      this.texture = new THREE.TextureLoader().load(this.imageSrc, _.bind(function () {
        this.texture.wrapS = THREE.RepeatWrapping;
        this.texture.wrapT = THREE.RepeatWrapping;
        this.texture.minFilter = THREE.NearestMipMapNearestFilter;
        this.texture.magFilter = THREE.NearestFilter;
        this.texture.generateMipmaps = true;


        // Prepare Render Target scene.
        this.rtScene = new THREE.Scene();
        this.rtPlane =  new THREE.PlaneGeometry(1, 1);
        this.rtTexture = new THREE.WebGLRenderTarget(this.width, this.height);
        this.rtUniforms = {
          uResolution : { type : "2f", value : [this.width, this.height] },
          uSamplerResolution : { type : "2f", value : [this.imageWidth, this.imageHeight] },
          uTime : { type : "f", value : 0.0 },
          uTimeOffset : { type : "f", value : this.timeOffset },
          uSampler: { type: "t", value: this.texture }
        };
        this.rtMaterial = new THREE.ShaderMaterial({
          uniforms : this.rtUniforms,
          vertexShader : this.rtVertexSrc,
          fragmentShader : this.rtFragmentSrc,
        });
        this.rtMesh = new THREE.Mesh(this.rtPlane, this.rtMaterial);
        this.rtScene.add(this.rtMesh);


        // Prepare main scene.
        this.scene = new THREE.Scene();
        this.plane =  new THREE.PlaneGeometry(1, 1);
        this.uniforms = {
          uResolution : { type : "2f", value : [this.width, this.height] },
          uTime : { type : "f", value : 0.0 },
          uTimeOffset : { type : "f", value : this.timeOffset },
          uSampler: { type: "t", value: this.rtTexture.texture }
        };
        this.material = new THREE.ShaderMaterial({
          uniforms : this.uniforms,
          vertexShader : this.vertexSrc,
          fragmentShader : this.fragmentSrc,
        });
        this.mesh = new THREE.Mesh(this.plane, this.material);
        this.scene.add(this.mesh);

        this.camera = new THREE.OrthographicCamera(0.5, 0.5, 0.5, 0.5, 0, 100);
        this.renderer = new THREE.WebGLRenderer( { canvas : this.canvas, alpha : true } );
        this.renderer.autoClear = false;

        this._establishSize();
        this.animate();
        
        callback && callback();
      }, this));
    },

    animate : function () {
      requestAnimationFrame(_.bind(this.animate, this));
      this.render();
    },

    render : function () {
      var time = (new Date().getTime() - this.startTime) / 1000;
      this.rtMaterial.uniforms.uTime.value = time;
      this.material.uniforms.uTime.value = time;

      this.renderer.render(this.rtScene,this.camera, this.rtTexture, true);
      this.renderer.render(this.scene, this.camera);
    },

    resetSize : function () {
      this.width = this.$canvas.width();
      this.height = this.$canvas.height();
      this._establishSize();
    },

    _establishSize : function () {
      this.renderer.setSize(this.width, this.height);
            this.rtTexture.setSize(this.width, this.height);

      this.camera.left = this.width / - 2;
      this.camera.right = this.width / 2;
      this.camera.top = this.height / 2;
      this.camera.bottom = this.height / - 2;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      
      this.rtMesh.scale.set(this.width, this.height, 1);
      this.mesh.scale.set(this.width, this.height, 1);

      this.rtMaterial.uniforms.uResolution.value = [this.width, this.height];
      this.material.uniforms.uResolution.value = [this.width, this.height];
      
      if (this.height <= 26) {
          this.texture.wrapT = THREE.ClampToEdgeWrapping;
        this.texture.needsUpdate = true;
        this.textureNeedsWrapUpdate = true;
      } else if (this.textureNeedsWrapUpdate == true) {
          this.texture.wrapT = THREE.RepeatWrapping;
        this.texture.needsUpdate = true;
        this.textureNeedsWrapUpdate = false;
      }
    }
  }
})();
  
  
  
BlotterSite.GlitchMarginaliaCanvas = function (generator, rect) {
  this.init.apply(this, arguments);
}
  
BlotterSite.GlitchMarginaliaCanvas.prototype = (function () {

  var _pixelRatio = (function () {
    var vendorPrefixes = ["ms", "moz", "webkit", "o"],
        ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.backingStorePixelRatio;

    for(var x = 0; x < vendorPrefixes.length && !bsr; ++x) {
      bsr = ctx[vendorPrefixes[x]+"BackingStorePixelRatio"];
    }

    bsr = bsr || 1;

    return (dpr / bsr);
  })();

  function _buildCanvas () {
    var canvas = document.createElement("canvas");

    jQuery(canvas).addClass("marginalia");

    return canvas;
  }

  return {
    constructor : BlotterSite.GlitchMarginaliaCanvas,

    set rect (rect) {
      this.width = rect.w;
      this.height = rect.h;
      this.x = rect.x;
      this.y = rect.y;
      this._rect = rect;

      this._updateDomElement();
    },

    get rect () {
      return this._rect;
    },

    init : function (generator, rect) {
      this.generator = generator;
      this.pixelRatio = _pixelRatio;
      this.rect = rect;
            
      return this.domElement;
    },

    resetRect : function (appendToContainer) {
      this.rect = this.generator.randomRect();

      

      if (appendToContainer) {
        this.generator.container.append(jQuery(this.domElement));
      }
    },

    _updateDomElement : function () {
      this.domElement = this.domElement || _buildCanvas();

      this.domElement.width = this.width * this.pixelRatio;
      this.domElement.height = this.height * this.pixelRatio;
      this.domElement.style.width = this.width + "px";
      this.domElement.style.height = this.height + "px";

      this.domElement.style.left = this.x + "px";
      this.domElement.style.top = this.y + "px";
    }
  }
})();
  
  
BlotterSite.GlitchMarginaliaCanvasGenerator = function (container) {
  this.init.apply(this, arguments);
}

BlotterSite.GlitchMarginaliaCanvasGenerator.prototype = (function () {

  return {
    constructor : BlotterSite.GlitchMarginaliaCanvasGenerator,

    get padding () {
      return this._padding;
    },

    set padding (value) {
      this._padding = value;
      this._updateMinMax();
    },

    init : function (container) {
      this.container = container;
      this.width = container.width();
      this.height = container.height();

      console.log(this.container);

      this.padding = 100;

      this.sizes = [
          [26, 400],
        [104, 104],
        [104, 208],
        [104, 260],
        [104, 312],
        [104, 364],
        [104, 416]
      ];
      
      this.setListeners();
    },
    
    setListeners : function () {
        jQuery(window).on("resize", _.bind(this.handleResize, this));
    },
    
    handleResize : _.debounce(function () {
        this.width = this.container.width();
      this.height = this.container.height();
      this._updateMinMax();
    }, 500),

    generate : function (append) {
      var marginaliaCanvas = new BlotterSite.GlitchMarginaliaCanvas(this, this.randomRect());

      if (true) {
        this.container.append(jQuery(marginaliaCanvas.domElement));
      }

      return marginaliaCanvas;
    },

    randomRect : function () {
      var sizeChoice = this.sizes[_.random(0, this.sizes.length - 1)],
          iX = _.random(0, 1),
          iY = 1 - iX, // 0 or 1, opposite of iX
          width = sizeChoice[iX],
          height = sizeChoice[iY],
          maxOriginX = this.maxX - width,
          maxOriginY = this.maxY - height,
          originX = _.random(this.minX, maxOriginX),
          originY = _.random(this.minY, maxOriginY);

      return {
        x : originX,
        y : originY,
        w : width,
        h : height
      }
    },

    _updateMinMax () {
      this.minX = this._padding;
      this.minY = this._padding;
      this.maxX = this.width - this._padding;
      this.maxY = this.height - this._padding;
    }
  }
})();


BlotterSite.GlitchMarginaliaCanvasManager = function($container, canvasCount) {
  this.init.apply(this, arguments);
}

BlotterSite.GlitchMarginaliaCanvasManager.prototype = (function () {
  return {
    constructor: BlotterSite.GlitchMarginaliaCanvasManager,

    init : function ($container, canvasCount) {
      this.$container = $container;
      this.canvasCount = canvasCount || 2;

      this.lifecycles = [1000, 1500, 2000, 2500, 3000, 4000];
      this.generator = new BlotterSite.GlitchMarginaliaCanvasGenerator(this.$container);

      this.generateMarginalia();
    },

    generateMarginalia : function () {
      this.generateMarginalia = _.reduce(new Array(this.canvasCount), _.bind(function (memo, nothing) {
        var canvas = this.generator.generate(true),
            glitch = new BlotterSite.GlitchMarginalia(canvas.domElement);
        
        var marginalia = { canvas : canvas, glitch : glitch };
        
        glitch.build(_.bind(function () {
            this.applyMarginalia(marginalia);
                }, this));
        
        memo.push(marginalia);
        return memo;
      }, this), []);
    },

    applyMarginalia : function (marginalia) {
      var lifecycle = this.lifecycles[_.random(0, this.lifecycles.length - 1)];
          marginalia.canvas.resetRect();
          marginalia.glitch.resetSize();

      (_.bind(function (marginalia, lifecycle) {
        _.delay(_.bind(function () {
          this.applyMarginalia(marginalia);
        }, this), lifecycle);
      }, this))(marginalia, lifecycle);
    }
  }
})();

new BlotterSite.GlitchMarginaliaCanvasManager(jQuery(".services__wrapper"));
