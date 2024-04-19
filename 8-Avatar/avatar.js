// utils
const transformImageNames = (name) => {
  const withoutExtension = name.split('.').slice(0, -1).join('.');
  const fileName = withoutExtension.split('/').pop();
  const transformedName = fileName.split('-').slice(1).join(' ');
  return transformedName;
}
const makeImageNamesUserFriendly = (name) => {
  return transformImageNames(name).charAt(0).toUpperCase() + transformImageNames(name).slice(1);
}

// options when screen is loaded
const hairOptions = () => {
  const hairImgs = [
    'imgs/cabelo-careca.png',
    'imgs/cabelo-alaranjado-curto.png',
    'imgs/cabelo-azul-longo.png',
    'imgs/cabelo-marrom-curto.png',
    'imgs/cabelo-preto-medio.png',
    'imgs/cabelo-roxo-curto.png',
    'imgs/cabelo-verde-medio.png'
  ]
  $('#avatar-cor-cabelo-select')
    .html(
      hairImgs.map(img => `<option value="${img}">${makeImageNamesUserFriendly(img)}</option>`).join('')
    );
}

const accessoriesOptions = () => {
  const accessoriesImgs = [
    'imgs/acessorio-oculos.png',
    'imgs/acessorio-lacinhos.png',
    'imgs/acessorio-bandana.png'
  ]
  $('.input-checkbox-with-label')
    .append(
      accessoriesImgs.map(img =>
        `<div class="input-checkbox">
          <input type="checkbox" id="avatar-${transformImageNames(img)}-checkbox" class="input-checkbox">
          <label for="avatar-${transformImageNames(img)}-checkbox">${makeImageNamesUserFriendly(img)}</label>
        </div>`)
    );
}

hairOptions();
accessoriesOptions();


// input changes
const inputNameChange = (e) => {
  const name = e.target.value;
  $('#avatar-nome').html(name);
}
$('#avatar-nome-input').on('change', inputNameChange);

const inputBodyColorChange = (e) => {
  const color = e.target.value;
  $('#avatar-corpo').css('background-color', color);
  $('#avatar-cabeca').css('background-color', color);
}
$('#avatar-cor-pele-input').on('change', inputBodyColorChange);

const inputHairOptionsChange = (e) => {
  const hair = e.target.value;
  $('#avatar-cabelo').attr("src", hair);
}
$('#avatar-cor-cabelo-select').on('change', inputHairOptionsChange);

const inputAccessoriesChange = (e) => {
  let id = e.target.id.split('-');
  id.pop();
  id = id.join('-');
  const isChecked = e.target.checked;
  isChecked ?
    $(`#${id}`).css('visibility', 'visible')
    :
    $(`#${id}`).css('visibility', 'hidden');
}
$('.input-checkbox').on('change', inputAccessoriesChange);

const downloadAvatar = () => {
  const avatar = $('#avatar-preview');
  html2canvas(avatar[0], {useCORS: true}).then(canvas => {
    const link = document.createElement('a');
    link.download = 'avatar.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
$('#baixar').on('click', downloadAvatar);


