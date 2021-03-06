;(function() {
  var flippedCharacterSet = {
    a: "\u0250",
    b: "q",
    c: "\u0254",
    d: "p",
    e: "\u01DD",
    f: "\u025F",
    g: "\u0183",
    h: "\u0265",
    i: "\u0131",
    j: "\u027E",
    k: "\u029E",
    l: "l",
    m: "\u026F",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "\u0279",
    s: "s",
    t: "\u0287",
    u: "n",
    v: "\u028C",
    w: "\u028D",
    y: "\u028E",
    z: "z",
    1: "\u21C2",
    2: "\u1105",
    3: "\u1110",
    4: "\u3123",
    5: "\u03DB",
    6: "9",
    7: "\u3125",
    8: "8",
    9: "6",
    0: "0",
    ".": "\u02D9",
    ",": "'",
    "'": ",",
    '"': ",,",
    "Ã‚Â´": ",",
    "`": ",",
    ";": "\u061B",
    "!": "\u00A1",
    "\u00A1": "!",
    "?": "\u00BF",
    "\u00BF": "?",
    "[": "]",
    "]": "[",
    "(": ")",
    ")": "(",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    _: "\u203E",
    "\r": "\n"
  };

  /**
   * Flip `textToBeFlipped`
   *
   * @param  {String} textToBeFlipped Text to be flipped
   * @param  {Boolean} emoji Add emoji to flipped text
   * @return {String} flipped text
   */

  var flipText = function(textToBeFlipped, emoji) {
    var flipperDude = "(╯°□°)╯︵ ", flippedText = "";
    emoji = emoji || false;
    for (var i = textToBeFlipped.length - 1; i >= 0; i--) {
      flippedText += flippedCharacterSet[textToBeFlipped.charAt(i)] || textToBeFlipped.charAt(i);
    };

    if (emoji) flippedText = flipperDude + flippedText;

    return flippedText;
  }

  window.flipText = flipText;
})();
