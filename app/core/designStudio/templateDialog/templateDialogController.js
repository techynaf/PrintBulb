designStudio.controller('templateDialogController', ['$scope', '$mdDialog', 'locals', 'productFromCategoryService', function($scope, $mdDialog, locals, productFromCategoryService){
    $scope.type = locals.type;
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.useThisTemplate = function(template){
        $mdDialog.hide(template);   
    };
    $scope.products = productFromCategoryService.getProductsFromCategory($scope.type.id);
}]);