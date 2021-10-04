async function addCard() {
  const ankiCn = new Ankiconnect();

  $('#btnAdd').click(async function () {
    const phrase = $("#inputEn").val();
    const definitions = $("#inputVn").val();
    alert(phrase + definitions);
    // alert(phrase + definitions);
    await ankiCn.addNote({
      "deckName": "test1",
      "modelName": "Basic",
      "fields": {
        "Front": phrase || "NULL",
        "Back": definitions || "NULL",
      }
    });
  })
}