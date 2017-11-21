//TARGET GROUPS
var targets1 = ["0", "4", "8", "12", "16", "20", "24", "28"];
var targets2 = ["1", "5", "9", "13", "17", "21", "25", "29"];
var targets3 = ["2", "6", "10", "14", "18", "22", "26", "30"];
var targets4 = ["3", "7", "11", "15", "19", "23", "27", "31"];

var docWidth;
var mCount = 0;
var mInt;

var row0 = [];
var row1 = [];
var row2 = [];
var row3 = [];

var UEFA = 0;
var CONMEBOL = 0;
var CONCACAF = 0;
var AFC = 0;
var CAF = 0;
//sets universal variable for each conference

var groupA = [];
var groupB = [];
var groupC = [];
var groupD = [];
var groupE = [];
var groupF = [];
var groupG = [];
var groupH = [];
var groupCounter = 0;
//creates an array for each group that can be added to with .push()

// var groups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH];


//UPDATE THESE WHEN THE TEAMS ARE FINAL!
var confUEFA = ["russia", "belgium", "germany", "serbia", "portugal", "france", "england", "spain", "iceland", "denmark", "switzerland", "sweden", "croatia", "poland"];
var confCONMEBOL = ["brazil", "argentina", "uruguay", "colombia"]; //possibly add Peru
var confCONCACAF = ["mexico", "costa-rica", "panama"];
var confAFC = ["iran", "japan", "south-korea", "saudia-arabia", "australia"];
var confCAF = ["egypt", "nigeria", "senegal", "tunisia", "morocco"];


// var container1  = document.getElementById('group-1');
// var container2  = document.getElementById('group-2');
// var container3  = document.getElementById('group-3');
// var container4  = document.getElementById('group-4');
// var container5  = document.getElementById('group-5');
// var container6  = document.getElementById('group-6');
// var container7  = document.getElementById('group-7');



// function clearGroups() {
// 	groupA = [];
// 	groupB = [];
// 	groupC = [];
// 	groupD = [];
// 	groupE = [];
// 	groupF = [];
// 	groupG = [];
// 	groupH = [];
//
// }
function clearConf() {
	UEFA = 0;
	CAF = 0;
	AFC = 0;
	CONCACAF = 0;
	CONMEBOL = 0;
}

function confVerify(array) {

	for (var i = 0; i < array.length; i++) {
		//boolean functions that test if a team is in a conference
		// var isInUEFA = confUEFA.includes(array[i]);
		// var isInCAF = confCAF.includes(array[i]);
		// var isInAFC = confAFC.includes(array[i]);
		// var isInCONCACAF = confCONCACAF.includes(array[i]);
		// var isInCONMEBOL = confCONMEBOL.includes(array[i]);
		if (confUEFA.includes(array[i]) === true) {
			UEFA = UEFA + 1;

		} else if (confAFC.includes(array[i]) === true) {
			AFC = AFC + 1;

		} else if (confCAF.includes(array[i]) === true) {
			CAF = CAF + 1;

		} else if (confCONCACAF.includes(array[i]) === true) {
			CONCACAF = CONCACAF + 1;;

		} else if (confCONMEBOL.includes(array[i]) === true) {
			CONMEBOL = CONMEBOL + 1;

		}
	}
	while ((UEFA > 2) || (AFC > 1) || (CAF > 1) || (CONCACAF > 1) || (CONMEBOL > 1)) {
			console.log("CAF: " + CAF);
			console.log("CONMEBOL: " + CONMEBOL);
			console.log("AFC: " + AFC);
			console.log("CONCACAF: " + CONCACAF);
			console.log("UEFA: " + UEFA);
			console.log('rules not met');
			randomizeCountries();
			// if (isInUEFA === true){
			// 	UEFA = UEFA + 1;
			// 	console.log(UEFA);
			// } else if (isInAFC === true){
			// 	AFC = AFC + 1;
			//
			// } else if (isInCAF === true){
			// 	CAF = CAF + 1;
			//
			// } else if (isInCONCACAF === true){
			// 	CONCACAF = CONCACAF + 1;
			// 	;
			//
			// } else if (isInCONMEBOL === true){
			// 	CONMEBOL = CONMEBOL + 1;
			// }
		}

		// console.log("UEFA: " + UEFA)


	// 	clearConf();
	// 	shuffle(targets2);
	// 	shuffle(targets3);
	// 	shuffle(targets4);
	// randomizeCountries();

};

function check() {

	confVerify(groupA);
	clearConf();
	confVerify(groupB);
	clearConf();
	confVerify(groupC);
	clearConf();
	confVerify(groupD);
	clearConf();
	confVerify(groupE);
	clearConf();
	confVerify(groupF);
	clearConf();
	confVerify(groupG);
	clearConf();
	confVerify(groupH);
	clearConf();
	// animatesFlags();
}

// var country;
// $('.flag').each( function() {
// 	if ($(this).css('left')==='10px'){
// 		country = $(this).data('country');
// 		groupA.push(country);
//
// 	} else if ($(this).css('left')==='100px'){
// 		country = $(this).data('country');
// 		groupB.push(country);
//
// 	} else if ($(this).css('left')==='190px'){
// 		country = $(this).data('country');
// 		groupC.push(country);
//
// 	} else if ($(this).css('left')==='280px'){
// 		country = $(this).data('country');
// 		groupD.push(country);
//
// 	} else if ($(this).css('left')==='370px'){
// 		country = $(this).data('country');
// 		groupE.push(country);
//
// 	} else if ($(this).css('left')==='460px'){
// 		country = $(this).data('country');
// 		groupF.push(country);
//
// 	} else if ($(this).css('left')==='550px'){
// 		country = $(this).data('country');
// 		groupG.push(country);
//
// 	} else if ($(this).css('left')==='640px'){
// 		country = $(this).data('country');
// 		groupH.push(country);
//
// 	}
//
//
// 	console.log('here to check group A: ' + groupA);
// 	console.log('here to check group B: ' + groupB);
// 	console.log('here to check group C: ' + groupC);
// 	console.log('here to check group D: ' + groupD);
// 	console.log('here to check group E: ' + groupE);
// 	console.log('here to check group F: ' + groupF);
// 	console.log('here to check group G: ' + groupG);
// 	console.log('here to check group H: ' + groupH);

// console.log('This is Group A: '+ groupA);







function init() {
	//console.log("ready");
	// console.log('test '+ $('#c0').data('country'));
	docWidth = $(document).width();

	if (docWidth > 450) {
		//SET INITAL POSITIONS
		for (var j = 0; j < 32; j++) {
			//$("#c" + j).css("left", $("#g" + j).position().left);
			//$("#c" + j).css("top", $("#g" + j).position().top);

			$("#c" + j).animate({
				left: $("#g" + j).position().left,
				top: $("#g" + j).position().top,
				opacity: 1
			}, 500);
		}
	} else {
		//MOBILE STUFF
		$(".inits").hide();
		mInt = setInterval(mobileAnimIn, 100);
	}

	//CLICK FUNCTION TO START RANDOMIZATION
	$("#randomize").click(function () {
		// targets1 = shuffle(targets1);
		// targets2 = shuffle(targets2);
		// targets3 = shuffle(targets3);
		// targets4 = shuffle(targets4);
		// console.log(targets1);
		// for (var i=0; i<8; i++) {
		// 	// row0[i] =
		// }
		// animatesFlags();

		clearConf();
		randomizeCountries();
		animatesFlags();
		// $(function () {
		// 	$('.mCon').sortable({ tolerance: "pointer", axis: "x", opacity: 0.75, helper: 'clone', items: "> div" });
		// 	$('#c0').sortable({
		// 		disabled: true
		//
		// 	});
		// 	var disabled = $("#c0").sortable("option", "disabled");
		//
		// 	// Setter
		// 	$("#c0").sortable("option", "disabled", true);
		// 	// $(".mCon").disableSelection();
		// });
		//
		//
		// $('.flag').css('cursor', 'pointer');

//var draw = document.getElementsByClassName('flag');

});
$("#screenshot").on('click', function() {
	var whatIwant = document.getElementsByClassName('slide4');
	html2canvas(whatIwant, {
	// html2canvas(document.getElementsByClassName('flag').each, {
		onrendered: function(canvas){
			document.body.appendChild(canvas);
		},
		allowTaint:true,
		width: 750,
		height: 350
	});
});
}

function randomizeCountries() {
	clearConf();
	targets1 = shuffle(targets1);
	var rus;
	for (var j = 0; j < targets1.length; j++) {
		if (targets1[j] == "0") {
			// console.log(j);
			rus = j;

		}

	}
	targets1.splice(rus, 1);
	targets1.unshift("0");
	// console.log(targets1);
	targets2 = shuffle(targets2);
	targets3 = shuffle(targets3);
	targets4 = shuffle(targets4);


	//ASSIGN DATA TO SLOTS
	for (var i = 0; i < 8; i++) {
		$("#s" + targets1[i]).attr("data-country", $("#c" + i).attr("data-cname"));
	}
	for (var i = 8; i < 16; i++) {
		$("#s" + targets2[i - 8]).attr("data-country", $("#c" + i).attr("data-cname"));
	}
	for (var i = 16; i < 24; i++) {
		$("#s" + targets3[i - 16]).attr("data-country", $("#c" + i).attr("data-cname"));
	}
	for (var i = 24; i < 32; i++) {
		$("#s" + targets4[i - 24]).attr("data-country", $("#c" + i).attr("data-cname"));
	}

	//DEFINE ARRAYS BASED ON SLOT DATA
	groupA[0] = $("#s0").attr("data-country");
	groupA[1] = $("#s1").attr("data-country");
	groupA[2] = $("#s2").attr("data-country");
	groupA[3] = $("#s3").attr("data-country");

	console.log("Group A: " + groupA);

	groupB[0] = $("#s4").attr("data-country");
	groupB[1] = $("#s5").attr("data-country");
	groupB[2] = $("#s6").attr("data-country");
	groupB[3] = $("#s7").attr("data-country");

	console.log("Group B: " + groupB);

	groupC[0] = $("#s8").attr("data-country");
	groupC[1] = $("#s9").attr("data-country");
	groupC[2] = $("#s10").attr("data-country");
	groupC[3] = $("#s11").attr("data-country");

	console.log("Group C: " + groupC);

	groupD[0] = $("#s12").attr("data-country");
	groupD[1] = $("#s13").attr("data-country");
	groupD[2] = $("#s14").attr("data-country");
	groupD[3] = $("#s15").attr("data-country");

	console.log("Group D: " + groupD);

	groupE[0] = $("#s16").attr("data-country");
	groupE[1] = $("#s17").attr("data-country");
	groupE[2] = $("#s18").attr("data-country");
	groupE[3] = $("#s19").attr("data-country");

	console.log("Group E: " + groupE);

	groupF[0] = $("#s20").attr("data-country");
	groupF[1] = $("#s21").attr("data-country");
	groupF[2] = $("#s22").attr("data-country");
	groupF[3] = $("#s23").attr("data-country");

	console.log("Group F: " + groupF);

	groupG[0] = $("#s24").attr("data-country");
	groupG[1] = $("#s25").attr("data-country");
	groupG[2] = $("#s26").attr("data-country");
	groupG[3] = $("#s27").attr("data-country");

	console.log("Group G: " + groupG);

	groupH[0] = $("#s28").attr("data-country");
	groupH[1] = $("#s29").attr("data-country");
	groupH[2] = $("#s30").attr("data-country");
	groupH[3] = $("#s31").attr("data-country");

	console.log("Group H: " + groupH);


	//CHECK RULES
	//if conditions are not met
	//randomizeCountries();

	//else
	//checks if conference are okay
	check();





}

function animatesFlags() {
	console.log('animate');
	//MOVE TO NEW POSITIONS 1 SEEDS
	for (var i = 0; i < 8; i++) {
		$("#c" + i).animate({
			left: $("#s" + targets1[i]).position().left,
			top: $("#s" + targets1[i]).position().top
		}, 1000);
		// if (i == 0){
		// groupA[i] = targets1[i];

		// }
	}
	//MOVE TO NEW POSITIONS 2 SEEDS
	for (var i = 8; i < 16; i++) {
		$("#c" + i).animate({
			left: $("#s" + targets2[i - 8]).position().left,
			top: $("#s" + targets2[i - 8]).position().top
		}, 1000);
		// groupB[i-8] = targets2[i-8];
	}
	//MOVE TO NEW POSITIONS 3 SEEDS
	for (var i = 16; i < 24; i++) {
		$("#c" + i).animate({
			left: $("#s" + targets3[i - 16]).position().left,
			top: $("#s" + targets3[i - 16]).position().top
		}, 1000);
	}
	//MOVE TO NEW POSITIONS 4 SEEDS
	for (var i = 24; i < 32; i++) {
		$("#c" + i).animate({
			left: $("#s" + targets4[i - 24]).position().left,
			top: $("#s" + targets4[i - 24]).position().top
		}, 1000);
	}
	// console.log(container1);
	// console.log(targets1);
	//
	// console.log('row 1 is = ' + groupA);
	// console.log('row 2 is = ' + groupB);
	// setTimeout(check(), 1000);

}

//FISHER YATES SHUFFLE
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

}




function mobileAnimIn() {
	$("#c" + mCount).animate({
		opacity: 1
	}, 100);

	mCount++;
	console.log(mCount);
	if (mCount > 32) {
		clearInterval(mInt);
	}

}


var container8 = document.getElementById('group-8');


//so this should set the container as each thing with class 'pot'
// var teams1 = [];
// var teams2 = [];
// var teams3 = [];
// var teams4 = [];
// for(var i = 0, c = container1.getElementsByTagName('li'); i < c.length; i++){
// 	teams1[i] = c[i];
// }
// for(var i = 0, c = container2.getElementsByTagName('li'); i < c.length; i++){
// 	teams2[i] = c[i];
// }
// for(var i = 0, c = container3.getElementsByTagName('li'); i < c.length; i++){
// 	teams3[i] = c[i];
// }
// for(var i = 0, c = container4.getElementsByTagName('li'); i < c.length; i++){
// 	teams4[i] = c[i];
// }
//
// function confVerify() {
// 	a1 = container1.getElementsByTagName('li')[0].getAttribute('id');
// 	a2 = container2.getElementsByTagName('li')[0].getAttribute('id');
// 	a3 = container3.getElementsByTagName('li')[0].getAttribute('id');
// 	a4 = container4.getElementsByTagName('li')[0].getAttribute('id');
// 	groupA.push(a1, a2, a3, a4);
// 	for (i = 0; i < groupA.length; i++){
// 		var isInUEFA = confUEFA.includes(groupA[i]);
// 		var isInCAF = confCAF.includes(groupA[i]);
// 		var isInAFC = confAFC.includes(groupA[i]);
// 		var isInCONCACAF = confCONCACAF.includes(groupA[i]);
// 		var isInCONMEBOL = confCONMEBOL.includes(groupA[i]);
// 		if (isInUEFA === true){
// 			UEFA = UEFA + 1;
// 			console.log("UEFA = " + UEFA);
// 		} else if (isInAFC === true){
// 			AFC = AFC + 1;
// 			console.log("AFC = " + AFC)
// 		} else if (isInCAF === true){
// 			CAF = CAF + 1;
// 			console.log("CAF = " + CAF)
// 		} else if (isInCONCACAF === true){
// 			CONCACAF = CONCACAF + 1;
// 			console.log('CONCACAF = '+ CONCACAF);
//
// 		} else if (isInCONMEBOL === true){
// 			CONMEBOL = CONMEBOL + 1;
// 			console.log("CONMEBOL = " + CONMEBOL);
// 		}
//
// 		}
// };


$(document).ready(function () {
	init();
});
