$(document).ready(function() {	
	floor1 = Raphael("floor_1", 3600, 1600);

	var keskiValiseina = floor1.path("m 2246,850 25.5,0 24.5,0 m -24.5,397 0,-397 m -148.5,397 148.5,0 149.5,0");
	keskiValiseina.attr({id: 'keskiValiseina',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'keskiValiseina');
	
	var hissiA = floor1.path("m 1228,750 0,-49.98382 0,-99.01618 100,0 0,99 -100,0");
	hissiA.attr({id: 'hissiA_line',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'hissiA');
	var hissiB = floor1.path("m 1874,850 0,-50 -50,0 0,50 z");
	hissiB.attr({id: 'hissiB',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'hissiB');
	var hissiC = floor1.path("m 3017,800 50,0 0,50 -50,0 z");
	hissiC.attr({id: 'hissiC',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'hissiC');
	var delta = floor1.path("m 2520,1247 149,0 0,348 -248,0 0,-348 0,-99 99,0 0,99");
	delta.attr({id: 'delta',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1',"fill-opacity": '1'}).data('id', 'delta');

	var vasenPaaty = floor1.path("m 1228,5 298,0 0,99 m 298,-99 0,646 199,49 50,0 0,-49 m -249,-298 -298,0 0,-249 -99,0 0,418.45042 M 731,850 l -49,0 m 49,-50 0,50 m -49,-50 49,0 m -49,50 0,-50 M 930,369.4891 930,750 85,750 m 746,199 49,-99 50,0 m 298,99 -397,0 -298,-99 -448,0 m 1094,-398 347,99 M 1228,1184.3399 1129,1148 1030,1496 85,1197 85,104 929.84147,369.47435 1030,402 1129,55 1228,93.160711 M 1228,5 l 0,460.47899");
	vasenPaaty.attr({id: 'vasenPaaty',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'vasenPaaty');
	var yleSeina = floor1.path("m 1824,6 199,0");
	yleSeina.attr({id: 'yleSeina',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'yleSeina');
	var oikeaYla = floor1.path("m 2967,899 0,199 m 298,-248 -198,0 m 99,49 99,0 m -99,50 0,-50 m -199,0 199,50 m 99,198.6971 0,-248.58798 0,-49.30639 0,-150.3132 0,-346.3348 L 3265,5 l -298,0 0,348 298,0 M 2470,5 l 199,0 0,348 m 596,347 -298,0 0,-347 -298,0 -48.9839,0 L 2470,353 m -49,298 0,99 199,0 0,-397");
	oikeaYla.attr({id: 'oikeaYla',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'oikeaYla');

	var alaSeinaOikea = floor1.path("m 2967,1595 -99,0");
	alaSeinaOikea.attr({id: 'alaSeinaOikea',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'alaSeinaOikea');
	var keskiAla3 = floor1.path("m 2520,850 0,99 -99,0 0,199 m 0,-298 447,0 0,347 0,398 -199,0");
	keskiAla3.attr({id: 'keskiAla3',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1',"fill-opacity": '1'}).data('id', 'keskiAla3');
	var keskiAla2 = floor1.path("m 1999.1898,899 123.8102,0 0,696 -547,0 m 99,-348 100,0 0,-348 199,50 24.5,-49.5 24.5,-49.5 100,0");
	keskiAla2.attr({id: 'keskiAla2',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'keskiAla2');
	var vasenAla = floor1.path("m 1228.7484,1147.8344 0,-297.42656 446.7516,0 0,297.42656");
	vasenAla.attr({id: 'vasenAla',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).data('id', 'vasenAla');


	var hall_fill = "#afa";
	var hall_stroke = "1";

	var alpha = floor1.path("m 2470,5 -447,0.5 0,645.5 447,0 z");
	alpha.attr({id: 'alpha',fill: hall_fill,"fill-opacity": '1',stroke: '#000000',"stroke-width": hall_stroke,"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'alpha');
	var beta = floor1.path("m 1228.25,1148 447,0 0,99 -99.25,0 0,348 -347.75,0 z");
	beta.attr({id: 'beta',fill: hall_fill, "fill-opacity": '1', stroke: '#000000',"stroke-width": hall_stroke,"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1'}).data('id', 'beta');
	var lambda = floor1.path("m 3265,1147.8486 -198,0.1514 0,-50 -100,0 0,497 298,-0.3806 z");
	lambda.attr({id: 'lambda',fill: hall_fill,stroke: '#000000',"stroke-width": hall_stroke,"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-opacity": '1',"fill-opacity": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).data('id', 'lambda');

	var halls = [];
	halls.push({element: alpha, name: "Alpha", info: "Management track & keynotes."});
	halls.push({element: beta, name: "Beta", info:  "Development track."});
	halls.push({element: lambda, name: "Lambda", info:  "Human resources track."});
	
	/*$.each(halls, function(i, hall) {
		hall.element.hover(function () {
			hall.element.animate({"transform": "s1.05"}, 500, "elastic");
		},
		function () {
			hall.element.animate({"transform": "s1"}, 500, "elastic");
			}
		);
		
		hall.element.click(function() {
			setInfo(hall.element, hall.name, hall.info);
		});
	});*/

	var panoramas = [];
	panoramas.push({"id": "cam1", x: 1050, y: 750, "link": "http://turkuagileday.fi/venue/lobby"});
	panoramas.push({"id": "cam2", x: 2100, y: 750, "link": "http://turkuagileday.fi/venue/alpha"});
	
	$.each(panoramas, function(i, camera){
		camera.element = addCamera(floor1, camera.id, camera.x, camera.y, camera.link);
	});
	
	var sponsors = [];
	
	sponsors.push({type: "Premium", x: 2240, y: 650, start: 180, end: 360, desc: "seliteteksti", info: "Special location for the one and only Premium level sponsor"});
	
	sponsors.push({type: "Gold", x: 2420, y: 750, start: 90, end: 360, info: ""});
	sponsors.push({type: "Gold", x: 2420, y: 850, start: 0, end: 270, info: ""});
	sponsors.push({type: "Gold", x: 2270, y: 850, start: -30, end: 210, info: ""});
	
	sponsors.push({type: "Silver", x: 2530, y: 750, start: 180, end: 360, info: ""});
	sponsors.push({type: "Silver", x: 2630, y: 750, start: 180, end: 360, info: ""});
	
	sponsors.push({type: "Silver", x: 2530, y: 850, start: 0, end: 180, info: ""});
	sponsors.push({type: "Silver", x: 2800, y: 850, start: 0, end: 180, info: ""});
	
	sponsors.push({type: "Silver", x: 3020, y: 825, start: 90, end: 270, info: ""});
	
	$.each(sponsors, function(i, data) {
		data.element = addSponsorSpot(floor1, data);
	});
	
	

});
