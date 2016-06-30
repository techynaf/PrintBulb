var designStudio = angular.module('designStudio', [
    'common.fabric',
    'common.fabric.utilities',
    'common.fabric.constants',
    'productFromCategory'
]);
designStudio.filter('keyboardShortcut', function($window) {
    return function(str) {
        if (!str) return;
        var keys = str.split('-');
        var isOSX = /Mac OS X/.test($window.navigator.userAgent);
        var seperator = (!isOSX || keys.length > 2) ? '+' : '';
        var abbreviations = {
            M: isOSX ? '⌘' : 'Ctrl',
            A: isOSX ? 'Option' : 'Alt',
            S: 'Shift'
        };
        return keys.map(function(key, index) {
            var last = index == keys.length - 1;
            return last ? key : abbreviations[key];
        }).join(seperator);
    };
})
designStudio.controller('designStudioController', ['$scope', '$mdMedia', '$mdDialog', 'Fabric', 'FabricConstants', 'Keypress', 'productFromCategoryService', function($scope, $mdMedia, $mdDialog, Fabric, FabricConstants, Keypress, productFromCategoryService) {
    
    $scope.newDesignTypes = [
        {name: 'Business Card', id: 1},
        {name: 'Poster', id: 2},
        {name: 'Wedding', id: 3}
    ];
    
    // Show Dialog
    $scope.showDesignTemplates = function(ev, type) {    
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $mdDialog.show({
            controller: 'templateDialogController',
            templateUrl: 'app/core/designStudio/templateDialog/templateDialogView.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen,
            locals: {
                type: type
            }
        }).then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
        $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    
    // Testing purpose
    $scope.products = productFromCategoryService.getProductsFromCategory(1);
}]);
