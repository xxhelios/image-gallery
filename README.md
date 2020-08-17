# image-gallery

## See demo page here:

https://xxhelios.github.io/image-gallery/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
or, if prefer to use vue ui, run
```
vue ui
```
then click "Task" -> "serve" -> "Run task" -> "Open app"

### Run unit tests
```
npm test
```
Or through "vui ui", go to "Task" -> "test" -> "Run task"

### Feature stories
- Image Grid
  - Display images and title in grid view on home page. ✓
- Pagination
  - Click on ">" button to go to next page, button should be disabled on last page. ✓
  - Click on "►" button to go to last page, button should be disabled on last page. ✓
  - Click on "<" button to go to previous page, button should be disabled on first page. ✓
  - Click on "◄ " button to go to first page, button should be disabled on first page. ✓
- Search
  - Input keywords updates the image list based on the keywords. ✓
  - Display number of listed images out of total available images. ✓
- Image Modal
  - Click on one image item opens a modal to show additional infomation. ✓
  - Click "Cancel" button to exit image modal. ✓
  - Image title is editable. ✓
  - Description filed is editable based on if there is a pre-set description content. ✓
  - Public domain value can be changed by toggling the checkbox. ✓
  - Click "Save" button to save to changes. ✓
- Additional Features
  - Image grid responsive based on screen size. ✓
  - Click on any area outside the "Image modal" will close the modal. ✓
  - Display default image when get image by url is on error. ✓
  - Unit tests for components. ✓
- TODO:
  - Currently showing 8 images per page, make the number dynamic.
  - Add "Go to page" feature, user can type in page number and go to that page directly.
  - Make description field always editable and clickable if it contains link.

