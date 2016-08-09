angular.module('taryngabbert', ['ui.router'])

.config( function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: "src/home/home.html",
      controller: "homeCtrl"
    })
    .state('about', {
      url:'/about',
      templateUrl: "src/about/about.html",
      controller: "aboutCtrl",
    })
    .state('contact', {
      url:'/contact',
      templateUrl: "src/contact/contact.html",
      controller: "contactCtrl"
    })
    .state('resume', {
      url: '/resume',
      templateUrl: "src/resume/resume.html",
      controller: "resumeCtrl"
    })

    $urlRouterProvider.otherwise("/");
})
