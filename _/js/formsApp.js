var whatsup = new app.singleForm({
	form: "what's up",
	inst: ["hello", "what's wrong", "what are you doing", "how are you"]
});

/*var formsGroup = new app.FormsCollection();
formsGroup.fetch();
formsGroup.add(whatsup);
whatsup.save();*/

var formsGroup = new app.FormsCollection([
		whatsup
]);

var formGroupView = new app.allFormsView({ collection: formsGroup });
var selectView = new app.selectFormsView({ collection: formsGroup });
var newFormView = new app.newFormBttnView();

$("#allForms").html(formGroupView.render().el);
$("#formNav").html(selectView.render().el);
$("#addNew").html(newFormView.render().el);

