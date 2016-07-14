var productFromCategoryService = angular.module('productFromCategory', []);
productFromCategoryService.service('productFromCategoryService', function CategoryService() {
    return {
        getProductsFromCategory: function(id) {
            if(id == 1){
                return [
                    {
                        id: 111,
                        name: "Beutiful Business Card 1",
                        img: "assets/images/card1.png",
                        price: 10,
                        elements: [
                            {
                                left: 100,
                                top: 100,
                                text: "Sakib Hasan",
                                img: "",
                            },
                            {
                                left: 100,
                                top: 200,
                                text: "CEO",
                                img: "",
                            },
                        ]
                    },
                    {
                        id: 112,
                        name: "Beutiful Business Card 2",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001216",
                        price: 20
                    },
                    {
                        id: 113,
                        name: "Beutiful Business Card 3",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001217",
                        price: 30
                    },
                    {
                        id: 114,
                        name: "Beutiful Business Card 4",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001218",
                        price: 40
                    },
                    {
                        id: 111,
                        name: "Beutiful Business Card 1",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001215",
                        price: 10
                    },
                    {
                        id: 112,
                        name: "Beutiful Business Card 2",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001216",
                        price: 20
                    },
                    {
                        id: 113,
                        name: "Beutiful Business Card 3",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001217",
                        price: 30
                    },
                    {
                        id: 114,
                        name: "Beutiful Business Card 4",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001218",
                        price: 40
                    },
                    {
                        id: 111,
                        name: "Beutiful Business Card 1",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001215",
                        price: 10
                    },
                    {
                        id: 112,
                        name: "Beutiful Business Card 2",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001216",
                        price: 20
                    },
                    {
                        id: 113,
                        name: "Beutiful Business Card 3",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001217",
                        price: 30
                    },
                    {
                        id: 114,
                        name: "Beutiful Business Card 4",
                        img: "http://www.vistaprint.com/galleries/GalleryPreviewImage?templateDescriptor=2001218",
                        price: 40
                    },
                ];    
            }
            return [];
        }
    }; 
});