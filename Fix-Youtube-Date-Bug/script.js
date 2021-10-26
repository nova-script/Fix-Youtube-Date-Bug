window.onload = function() {
  /*
   * [HOW IT WORKS:]
   * The easiest trick to solve the youtube hidden date bug is simply by
   * taking the date off the origin position and repositionating it in another
   * visible position.
   * 
   * That's all what the code below is going to do.
  */

  // Get the text from the date element:
  var date_element = document.getElementById('info-strings')
  var date_element_text = date_element.innerText || date_element.textContent
  // Create a new element (sure, containing our date and a beautifier YT CSS class):
  var new_element = document.createElement("p")
  new_element.setAttribute("class", "ytd-video-owner-renderer");
  new_element.textContent = date_element_text
  // Get the element where we want to put the new element after and append it:
  var after_element = document.getElementById('owner-sub-count')
  after_element.appendChild(new_element);
  // Cleans the page by removing the old date element from where it was.
  date_element.remove()

  /* ------------------------------ ENJOYED IT? <3 ----------------------------------- */
  /* You can help me pay my bills and stay alive by just starring this project at my   */
  /* github profile:                                                                   */
  /*                                                                                   */
  /* REPO: https://github.com/joseguilherme-dev/Fix-Youtube-Date-Bug                   */
  /* -------------------------- ************************** --------------------------- */
};
