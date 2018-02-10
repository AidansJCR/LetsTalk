$(function() {
  var socket = io();

  // First, we are going to GET an anonymous conversation
  // based on the conversation ID (that's not secure)
  let searchParams = new URLSearchParams(window.location.search);
  if(searchParams.has('convID')) {
    let convID = searchParams.get('convID');
    // TODO: make a request to get conns.
    // for chat history, load it.
  }

  function addChatMessage(isClient, messageStr) {
      let bgColour = isClient ? 'w3-teal' : 'w3-gray';
      let imgClass = isClient ? 'w3-right w3-circle w3-margin-left' : 'w3-left w3-circle w3-margin-right';
      let chatObject = $('<div>');
      chatObject.addClass('w3-panel w3-round w3-border');
      chatObject.addClass(bgColour);

      let subItem = $('<img>');
      subItem.addClass(imgClass);
      subItem.attr('src', 'https://picsum.photos/40/40');
      chatObject.appendChild(subItem);

      subItem = null;
      subItem = $('<span>');
      subitem.text(messageStr);
      chatObject.appendChild(subItem);
      
      // TODO: add item to DOM instead of returning
      return chatObject;
  }



});
