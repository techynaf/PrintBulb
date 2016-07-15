var adminPanel = angular.module('adminPanel', []);
adminPanel.controller('adminPanelController', ['$scope', '$mdPanel', 'Fabric', 'FabricConstants','Keypress', '$mdDialog', '$mdMedia', function($scope, $mdPanel, Fabric, FabricConstants, Keypress, $mdDialog, $mdMedia) {
    // Initialize Canvas
    var canvas = window._canvas = new fabric.Canvas('c');
    canvas.setWidth(627);
    canvas.setHeight(411);
    canvas.setBackgroundColor('#ffffff', canvas.renderAll.bind(canvas));


    $scope.ItemsAdded = [];

    canvas.on('object:modified', function(e){
        $scope.$apply()
    });


    $scope.AddText = function(){
        console.log("AddText");
        var text = new fabric.IText("New Text", { 
            fontFamily: 'Delicious_500', 
            left: 100, 
            top: 100,
            fill: '#000000'
        })
        canvas.add(text); 
        $scope.ItemsAdded.push(text);
    };

    $scope.AddShape = function(){
        console.log("AddShape");
    };

    $scope.SetBackground = function(ev, type){
        console.log("SetBackground");
        // Appending dialog to document.body to cover sidenav in docs app
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $mdDialog.show({
            controller: 'adminPanelDialogController',
            templateUrl: 'app/core/adminPanel/adminPanelDialogView.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen,
            locals: {
                type: type
            }
        })
            .then(function(answer) {
            //$scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            //$scope.status = 'You cancelled the dialog.';
        });
        $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    $scope.resetCanvas = function(){
        console.log("resetCanvas");
    };
}]);
adminPanel.controller('adminPanelDialogController', ['$scope', '$mdDialog', 'locals', function($scope, $mdDialog, locals){
    $scope.type = locals.type;
    console.log($scope.type);
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
}]);






adminPanel.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});