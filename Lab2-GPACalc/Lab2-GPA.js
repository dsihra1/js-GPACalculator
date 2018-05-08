//Devon Sihra
function btnGPA_onclick()
{
	// get textboxes and assign to variables
	var aTextbox = document.getElementById("txtA");
	var bTextbox = document.getElementById("txtB");
	var cTextbox = document.getElementById("txtC");
	var dTextbox = document.getElementById("txtD");
	var fTextbox = document.getElementById("txtF");
	var gpaTextbox = document.getElementById("txtGPA");
	
	//get value from user 
	
	var a = aTextbox.value;
	a = parseFloat(a);
	
	var b = bTextbox.value;
	b = parseFloat(b);
	
	var c = cTextbox.value;
	c = parseFloat(c);
	
	var d = dTextbox.value;
	d = parseFloat(d);
	
	var f = fTextbox.value;
	f = parseFloat(f);
	
	var gpa = gpaTextbox.value;
	gpa = parseFloat(gpa);
	
	//calclations for gpa 
	
	var top = ((a * 4) + (b * 3) + (c * 2) + (d * 1));
	var bot = (a + b + c + d + f);
	var gpa = (top / bot);
	gpaTextbox.value = gpa;

}