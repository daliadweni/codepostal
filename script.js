(function(module) {
	
	function myCtrl($scope, $filter) {
		var vm = this;
		
	
		vm.data = [
				{name:"CITE EL WAFA", age:3064,code:"Sfax",deg:"SFAX EST"},
            
            	{name:"CITE JAOUHARA", age:3064,code:"Sfax",deg:"SFAX EST"},
				            	{name:"OUED CHAABOUNI", age:3071,code:"Sfax",deg:"SFAX EST"},
            	{name:"MERKEZ CHAKER	", age:3072,code:"Sfax",deg:"SFAX EST"},
            	{name:"CITE EL FOLL", age:3064,code:"Sfax",deg:"SFAX EST"},
                 {name:"BELIANA", age:3087,code:"Sfax",deg:"EL AMRA"},
                             {name:"CITE POPULAIRE 1", age:3036,code:"Sfax",deg:"EL AMRA"},

                             {name:"CITE EL MGHAIER	", age:3083,code:"Sfax",deg:"SFAX SUD"},

                                         {name:"CITE MOEZ 1	", age:3083,code:"Sfax",deg:"SFAX SUD"},
                                                     {name:"CITE MOEZ 2	", age:3083,code:"Sfax",deg:"SFAX SUD"},
                                                     {name:"EL KHAZZANETTE		", age:3059,code:"Sfax",deg:"SFAX SUD"},

                                                                 {name:"LE BARDO	", age:2000,code:"Tunis",deg:"LE BARDO	"},

                                                                             {name:"CITE STAR", age:2017,code:"Tunis",deg:"LE BARDO	"},
                                                                             {name:"CITE ALTEN	", age:2000,code:"Tunis",deg:"LE BARDO	"},
                                                                             {name:"EL MENZAH	9", age:1013,code:"Tunis",deg:"EL MENZAH	"},

                                                                             {name:"EL MENZAH	2", age:1082,code:"Tunis",deg:"EL MENZAH	"},
                                                                             {name:"SIDI SLAM	", age:6036,code:"Gabes",deg:"MARETH	"},

                                                                             {name:"KETTANA	", age:6036,code:"Gabes",deg:"MARETH	"},
                                                                             {name:"EL FEJIJ	", age:6030,code:"Gabes",deg:"MENZEL HABIB	"},
                                                                             {name:"CITE EL IZDIHAR	", age:6021,code:"Gabes",deg:"GHANNOUCHE		"},
                                                                             {name:"EL HAMMA	", age:6020,code:"Gabes",deg:"EL HAMMA	"},

            
            
            
		];
		
		vm.sort = function(predicate) {
			vm.predicate = predicate;
			vm.reverse = (vm.predicate == predicate) ? !vm.reverse : false;
			vm.data = $filter('orderBy')(vm.data, predicate, vm.reverse); //magic
		}
		
		vm.filters = {};
		vm.headerFilter = ['name', 'filter'];
	}
	
	module.controller("MyCtrl", ['$scope','$filter',myCtrl]);
})(angular.module('MyApp',[]));