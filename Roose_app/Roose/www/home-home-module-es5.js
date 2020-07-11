function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Roose\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n\n  <ion-button (click)=\"getPermission()\">Permissão</ion-button>\n  <ion-button (click)=\"Start()\">Falar</ion-button>\n\n  <ion-card>\n    <ion-card-header> Você disse: </ion-card-header>\n    \n    <!-- <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let match of matches\">\n          {{ match }}\n        </ion-item>\n      </ion-list>\n    </ion-card-content> -->\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngIf=\"filme\">\n          {{ filme }}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngIf=\"musicas\">\n          {{ musicas }}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngIf=\"servicos\">\n          {{ servicos }}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngIf=\"previsao\">\n          {{ previsao }}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGFzc2VuXFxEZXNrdG9wXFxSb29zZV9BcHAtbWFzdGVyXFxSb29zZV9hcHBcXFJvb3NlL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUVsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsMkJBQTJCO0FDQTdCOztBREdBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQ0FuQjs7QURHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFFakIsY0FBYztFQUVkLFNBQVM7QUNGWDs7QURLQTtFQUNFLHFCQUFxQjtBQ0Z2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/speech-recognition/ngx */
    "./node_modules/@ionic-native/speech-recognition/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_providers_Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/Provider */
    "./src/providers/Provider.ts");
    /* harmony import */


    var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/text-to-speech/ngx */
    "./node_modules/@ionic-native/text-to-speech/__ivy_ngcc__/ngx/index.js"); // import { CheckInProvider } from 'src/providers/checkInProvider';


    var HomePage = /*#__PURE__*/function () {
      function HomePage(speechRecognition, cd, provider, tts) {
        _classCallCheck(this, HomePage);

        this.speechRecognition = speechRecognition;
        this.cd = cd;
        this.provider = provider;
        this.tts = tts;
        this.isRecording = false;
      }

      _createClass(HomePage, [{
        key: "Start",
        value: function Start() {
          var _this = this;

          var options = {
            language: 'pt-BR',
            matches: 5
          };
          this.speechRecognition.startListening(options).subscribe(function (matches) {
            _this.matches = matches;

            for (var i = 0; matches.length > i; i++) {
              if (matches[i].toUpperCase().includes('ABRIR FILMES')) {
                _this.getfilme();

                break;
              }

              if (matches[i].toUpperCase().includes('ABRIR MÚSICAS')) {
                _this.getmusicas();

                break;
              }

              if (matches[i].toUpperCase().includes('ABRIR COMODIDADES')) {
                _this.servicoDeQuarto('ABRIR COMODIDADES');

                break;
              }

              if (matches[i].toUpperCase().includes('ABRIR REFEIÇÃO')) {
                _this.servicoDeQuarto('ABRIR REFEIÇÃO');

                break;
              }

              if (matches[i].toUpperCase().includes('ABRIR SERVIÇOS')) {
                _this.servicoDeQuarto('ABRIR SERVIÇOS');

                break;
              }

              if (matches[i].toUpperCase().includes('ABRIR CONTATO')) {
                _this.servicoDeQuarto('ABRIR CONTATO');

                break;
              }

              if (matches[i].toUpperCase().includes('TEMPO CAÇAPAVA')) {
                _this.previsaoTempo('TEMPO CAÇAPAVA');

                break;
              }

              if (matches[i].toUpperCase().includes('TEMPO SÃO JOSE DOS CAMPOS')) {
                _this.previsaoTempo('TEMPO SÃO JOSE DOS CAMPOS');

                break;
              }

              if (matches[i].toUpperCase().includes('TEMPO TAUBATÉ')) {
                _this.previsaoTempo('TEMPO TAUBATÉ');

                break;
              }
            }

            _this.cd.detectChanges();
          });
          this.isRecording = true;
        }
      }, {
        key: "getfilme",
        value: function getfilme() {
          var _this2 = this;

          this.provider.getFilme().then(function (res) {
            _this2.filme = res.filme;

            _this2.resposta(res.filme).then(function () {//Executado apos o termino da fala
            });

            _this2.cd.detectChanges();
          });
        }
      }, {
        key: "getmusicas",
        value: function getmusicas() {
          this.musicas = this.provider.getMusicas();
          this.cd.detectChanges();
        }
      }, {
        key: "servicoDeQuarto",
        value: function servicoDeQuarto(opcao) {
          this.servicos = this.provider.servicoDeQuarto(opcao);
          this.cd.detectChanges();
        }
      }, {
        key: "previsaoTempo",
        value: function previsaoTempo(cidades) {
          this.previsao = this.provider.previsaoTempo(cidades);
          this.cd.detectChanges();
        }
      }, {
        key: "resposta",
        value: function resposta(texto) {
          var options = {
            text: texto,
            locale: 'en-US'
          };
          return this.tts.speak(options).then(function () {
            return console.log('Success');
          })["catch"](function (reason) {
            return console.log(reason);
          });
        }
      }, {
        key: "getPermission",
        value: function getPermission() {
          var _this3 = this;

          this.speechRecognition.hasPermission().then(function (hasPermission) {
            if (!hasPermission) {
              _this3.speechRecognition.requestPermission();
            }
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_1__["SpeechRecognition"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: src_providers_Provider__WEBPACK_IMPORTED_MODULE_3__["Provider"]
      }, {
        type: _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_4__["TextToSpeech"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map