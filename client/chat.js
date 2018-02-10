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

});
