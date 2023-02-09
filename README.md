# Create Slideshow from Spreadsheet

The function `createSlidesFromSheet()` is a Google Apps Script function that creates a Google Slides presentation based on data from a Google Sheet. I was tasked by my school to come up with a solution to the request to create a slideshow of over 100 student names for an event. This script takes a list of names, or any information you want, in a Google Spreadsheet and generates a Google Slides presentation from it. This way I didn't have to type over 100 names into each slide.

To try this yourself, create a Google Sheet, navigate to "Extensions" in the menu and click "Apps Script." Copy and paste this script and then click "Run." In your Google Drive you should see a new Google Slides presentation named 'My Google Slides Presentation' or whatever string you passed to `SlidesApp.create()`

I was very excited to discover Google Apps Script.

## Alternative

The second function that is commented out, `fillTemplate()`, was the first script I tried to solve this problem. Instead of generating a new Google Slides presentation, it fills in data into an existing one based on data in a Google Sheet. The cells in each row of the first column can have, for example: {{title}}, {{subtitle}}, {{slide1_title}}, {{slide1_body}}, etc. And the slides in your presentation must have this text as well. The cells in each row of the second column will have the data you want to replace that with once you run the script. You don't actually have to follow the format {{title}}, etc. If you have "apples" in row 1, column 1, and "bananas" row 1, column 2, and "apples" in the title of your first slide, when you run the script "apples" in the slide will be replaced with "bananas."

While this script didn't solve my problem, because it meant I would still have to do a lot of typing in the presentation itself ({{student_name1}}, {{student_name2}}, etc), it is an interesting way to create a presentation. You can have all the text you want ready in an excel, run the script and then just apply the theme or any images you want later. I hope someone can find it useful.
