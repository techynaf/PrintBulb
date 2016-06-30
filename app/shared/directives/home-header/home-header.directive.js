angular.
    module('PrintBulb').
    directive('homeHeader', function(){
        var linkFunction = function(scope, element, attributes) {
            scope.text = attributes["banner"];
            scope.height = "500px";
            if(attributes["banner"] == "false"){
                scope.height = "100px";    
            }
        };
        return {
            restrict: "EA",
            templateUrl: 'app/shared/directives/home-header/home-header.html',
            link: linkFunction        
        }
    });
//
//controller: function homeHeaderController($scope, $location, $mdDialog) {
//            $scope.currentPath = $location.path();    
//            $scope.openMenu = function($mdOpenMenu, ev) {
//                console.log("Gi");
//                originatorEv = ev;
//                $mdOpenMenu(ev);
//            };
//            $scope.name = "sakib";
//        }