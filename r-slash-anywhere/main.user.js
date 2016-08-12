var reg = new RegExp(/((\B|\b)\/?r\/[\w\d][\w\d_]{0,20}\b)/g);
$("body").find("*").not("script, style, a").each(function() {
  var elem = this;
  $(this).contents().filter(function() {
    return this.nodeType === 3;
  }).each(function() {
    var nodes = $(this).text().split(reg);
    console.log(nodes);
    var frag = document.createDocumentFragment();
    $.each(nodes, function(i, v) {
      if (v === "") {
        void(0);
      } else if (v.match(reg)) {
      	var s = document.createElement("span");
        $(s).click(function() {
          var url = "https://www.reddit.com";
          url += $(this).text().charAt(0) == "r" ? "/" + $(this).text() : $(this).text();
          window.open(url, "_blank");
        }).text(v).css({
          "text-decoration": "underline",
          "color": "blue",
          "cursor": "pointer",
          "background": "white"
        });
        frag.appendChild(s);
      } else {
        frag.appendChild(document.createTextNode(v));
      }
    });
    console.log(frag);
    $(this).replaceWith($(frag));
  });
});
