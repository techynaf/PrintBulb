describe('TESTING: Design Studio Testing', function(){

    beforeEach(module('shohozPrint', 'productFromCategory'));

    describe('Categories From Service', function(){
        var scope, ctrl;
        var productFromCategoryService;
        beforeEach(inject(function (_productFromCategoryService_) {
            productFromCategoryService = _productFromCategoryService_;
        }));
        beforeEach(inject(
            function($controller, $rootScope){
                scope = $rootScope.$new();
            })
          );

        it('should initialize categories from productFromCategory Service', function(){
            var scope = {};
            var ctrl;
            inject(function($controller){
                ctrl = $controller('designStudioController', {$scope:scope});
            });
            expect(productFromCategoryService.getProductsFromCategory(1).length).toEqual(12);
        });
    });
});
