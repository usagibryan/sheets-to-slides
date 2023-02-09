function createSlidesFromSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var names = sheet.getDataRange().getValues();

  var presentation = SlidesApp.create('My Google Slides Presentation');
  var slide = presentation.getSlides()[0];

  var slideWidth = presentation.getPageWidth();
  var slideHeight = presentation.getPageHeight();

  for (var i = 0; i < names.length; i++) {
    var newSlide = slide.duplicate();
    var title = newSlide.getPageElements()[0].asShape();
    title.getText().setText(names[i][0]);
    title.getText().getTextStyle().setFontSize(52);
    title.setLeft((slideWidth - title.getWidth()) / 2);
    title.setTop((slideHeight - title.getHeight()) / 2);
  }
}

/*
function fillTemplate() {
  var Presentation_ID= "?"; // Replace "?" with the id found in the URL of your Google Slides presentation

  var Presentation=SlidesApp.openById(Presentation_ID);
  var values = SpreadsheetApp.getActive().getDataRange().getValues();

  values.forEach(function(row){
    var templateVariable = row[0];
    var templateValue = row[1];
    Presentation.replaceAllText(templateVariable, templateValue)
  });
}
*/
