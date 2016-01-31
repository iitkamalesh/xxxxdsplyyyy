require.config({
  paths: {
    "angular": "bower_components/angular/angular",
    "angular-animate": "bower_components/angular-animate/angular-animate",
    "angular-bootstrap": "bower_components/angular-bootstrap/ui-bootstrap",
    "angular-cookies": "bower_components/angular-cookies/angular-cookies",
    "angular-mocks": "bower_components/angular-mocks/angular-mocks",
    "angular-resource": "bower_components/angular-resource/angular-resource",
    "angular-route": "bower_components/angular-route/angular-route",
    "angular-sanitize": "bower_components/angular-sanitize/angular-sanitize",
    "angular-touch": "bower_components/angular-touch/angular-touch",
    "angular-ui": "bower_components/angular-ui-router/release/angular-ui-router",
    "bootstrap-sass-official": "bower_components/bootstrap-sass-official/assets/javascripts/bootstrap",
    "jquery": "bower_components/jquery/dist/jquery",
    "lodash": "bower_components/lodash/lodash",
    "dsplApp": "src/app",
	  "dsplApp.homeModule": "src/components/home/homeModule"
  },
  shim: {
    "angular": {
      deps: ["jquery"]
    },
    "dsplApp": {
      "deps": ["angular", "dsplApp.homeModule"]
    },
    "dsplApp.homeModule": {
      "deps": ["angular"]
    },
    "bootstrap" : { "deps" :['jquery'] }
  }
});

require(["dsplApp"], function(){
  angular.bootstrap(document,["dsplApp"]);
});
