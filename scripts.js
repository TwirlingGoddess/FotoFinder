var $inputTitle = $('#input-title');
var $inputCaption = $('#input-caption');
var $chosenFile = $('#choose-file');
var $submitButton = $('#submit-button');
var $photoAlbumArea = $('main');
var $outputTitle = $('h2');
var $outputCaption = $('p');
var $uploadedPhoto = $('#new-photo');
var $hateButton = $('#hate-button');
var $loveButton = $('#love-button')


$inputTitle.on('keyup', appendButtonDisable);
$inputCaption.on('keyup', appendButtonDisable);
$chosenFile.on('change', appendButtonDisable)
$submitButton.on('click', uploadCard);

function appendButtonDisable() {
  if (($inputTitle.val() && $inputCaption.val()) && $chosenFile.val()) {
    $submitButton.prop('disabled', false);
  } else {
    $submitButton.prop('disabled', true);
  } 
}

function uploadCard(event) {
  event.preventDefault();
  $photoAlbumArea.append(`
    <article>
      <h2>${$inputTitle.val()}</h2>
      <div class="image-container" aria-label="image-container">
        <img src="file:///Users/butchqueenindrags/turing/mod1/projects/foto-finder/photos/${$chosenFile.val()}" alt="bookmarked photo" class="new-photo" id="new-photo">
      </div>
      <p>${$inputCaption.val()}</p>
      <aside>
        <button id="hate-button" type="submit" name="trash"></button>
        <button id="love-button" type="icon" name="love"></button>
      </aside>
    </article>
    `);
  clearInputs();
  appendButtonDisable();
}

function clearInputs() {
  $inputTitle.val() === "";
  $inputCaption.val() === "";
}

document.getElementById("yourFileInput").files[0].fileName;
