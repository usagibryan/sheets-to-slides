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
