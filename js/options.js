async function manipulateAnkiDesk(options){
  const ankiApi = new Ankiconnect();
  $('#listDeck').empty();
  const listDecks = await ankiApi.getDeckNames();
  if (listDecks.length) {
    listDecks.forEach(name => $('#listDeck').append($('<option>', { value: name, text: name })));
  }
  // document.getElementById('deckName').innerText = JSON.stringify(listDecks);
}
manipulateAnkiDesk();