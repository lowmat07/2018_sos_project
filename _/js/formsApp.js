/*
var whatsup = new app.singleForm({
	form: "what's up",
	inst: ["hello", "what's wrong", "what are you doing", "how are you"]
});

{"form":"what's up","inst":["hello","what's wrong","what are you doing","how are you"]}
*/
//whatsup.save();



var formsGroup = new app.FormsCollection();
/*
var formsGroup = new app.FormsCollection([
		whatsup
]);
*/

//Backbone.sync("create",formsGroup);

//formsGroup.add(whatsup);


formsGroup.on("add", function(it){
	it.save();
});

formsGroup.fetch();
//formsGroup.add(whatsup);
$.getJSON("js/forms.json", function(data){
	console.log("inside getJSON");
	$.each( data, function( key, val ){
		formsGroup.add(val);
	});
});
//], function(){console.log("error occurred");});

//whatsup.save();

//formsGroup.sync();


var formGroupView = new app.allFormsView({ collection: formsGroup });
//formsGroup.add(whatsup);
//formsGroup.fetch();
var selectView = new app.selectFormsView({ collection: formsGroup });
var newFormView = new app.newFormBttnView();


$("#allForms").html(formGroupView.render().el);
$("#formNav").html(selectView.render().el);
$("#addNew").html(newFormView.render().el);

