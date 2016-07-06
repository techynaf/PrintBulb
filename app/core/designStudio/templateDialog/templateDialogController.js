designStudio.controller('templateDialogController', ['$scope', '$mdDialog', 'locals', 'productFromCategoryService', function($scope, $mdDialog, locals, productFromCategoryService){
    $scope.type = locals.type;
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.useThisTemplate = function(template){
        console.log(template);
        $mdDialog.hide();   
    };
    $scope.products = productFromCategoryService.getProductsFromCategory($scope.type.id);
}]);