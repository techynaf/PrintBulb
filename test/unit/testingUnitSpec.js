describe('Testing AngularJS Test Suite', function(){

    beforeEach(module('shohozPrint'));

    describe('Testing AngularJS Controller', function(){
        var scope, ctrl;

        beforeEach(inject(
            function($controller, $rootScope){
                scope = $rootScope.$new();
                //ctrl = $controller('testCtrl', {$scope: scope})
            })
                  );

        it('should initialize the title in the scope', function(){
            var scope = {};
            var ctrl;

            inject(function($controller){
                ctrl = $controller('designStudioController', {$scope:scope});
            });

            expect(scope.newDesignTypes).toBeDefined();
            expect(scope.newDesignTypes).toEqual([
                {name: 'Business Card', id: 1},
                {name: 'Poster', id: 2},
                {name: 'Wedding', id: 3}
            ]);
        });

        
    });
});
