
"use strict";


// Controller
var images = angular.module("images", ["angular.filter"]);

images.controller("imagesController", function($scope){
	$scope.list = [
		{
			"Title"		: "Stir Fry",
			"Name"		: "Fried Fresh",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food1.jpeg",
			"Content" : "fhfghgf hfhg fhg fgh fghfhghfh  gfhjgfhg hjg jgjhgjgh hj ggjhgj "
		},
		{
			"Title"		: "Lean Beef",
			"Name"		: "Healthy Salad",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food2.jpeg"
		},
		{
			"Title"		: "Gordon",
			"Name"		: "Gordon, Aus.",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food3.jpeg"
		},
		{
			"Title"		: "Sashimi",
			"Name"		: "Salmon",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food4.jpeg"
		},
		{
			"Title"		: "Garden Salad",
			"Name"		: "Healthy",
			"Type"	 	: "Vegetarian",
			"Mode"	 	: "Dinner",
			"Image" 	: "food5.jpeg"
		},
		{
			"Title"		: "Zucchini",
			"Name"		: "Succulent",
			"Type"	 	: "Vegetarian",
			"Mode"	 	: "Lunch",
			"Image" 	: "food6.jpeg"
		},
		{
			"Title"		: "Buns",
			"Name"		: "Baked Fresh",
			"Type"	 	: "Vegetarian",
			"Mode"	 	: "Lunch",
			"Image" 	: "food7.jpeg"
		},
		{
			"Title"		: "Sushi",
			"Name"		: "Fresh daily",
			"Type"	 	: "Meat",
			"Mode"	 	: "Lunch",
			"Image" 	: "food8.jpeg"
		},
		{
			"Title"		: "Burger",
			"Name"		: "Wholesome",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food9.jpeg"
		},
		{
			"Title"		: "Burger",
			"Name"		: "Wholesome",
			"Type"	 	: "Meat",
			"Mode"	 	: "Breakfast",
			"Image" 	: "food9.jpeg"
		},
		{
			"Title"		: "Bread",
			"Name"		: "Baked Fresh",
			"Type"	 	: "Vegetarian",
			"Mode"	 	: "Lunch",
			"Image" 	: "food10.jpeg",
			"Content" : "fhfghgf hfhg fhg fgh fghfhghfh  gfhjgfhg hjg jgjhgjgh hj ggjhgj "
		}
	];
});


// Add/remove classes for animation
function slide(){
	"use strict";
	var grid = document.getElementById("images_grid");
	grid.className = "slide-right";

	setTimeout(function(){
		grid.className = ""; // stop animation
	},550);

}
