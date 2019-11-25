/* JSFiddle for https://medium.com/@mew/responsive-gallery-tiles-with-pure-css-b24e1ae5068 */

  // scripted html generator to ease the demo creation
  // note that it generates only html, no sizes or anything else
  
  var data = [
   {type: "img", src: "https://i.imgur.com/pXpH4tem.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
   {type: "img", src: "https://i.imgur.com/LbrZV1fm.jpg", href: "#somelink", title: "White doge eyes", text: "by me"},
   {type: "img", src: "https://i.imgur.com/PwaC6O4m.jpg", href: "#somelink", title: "Three doges", text: "by me"},
   {type: "img", src: "https://i.imgur.com/gUbHmiFm.jpg", href: "#somelink", title: "Doge", text: "by me"},
   {type: "img", src: "https://i.imgur.com/siIy4H8m.jpg", href: "#somelink", title: "White doge", text: "by me"},
   {type: "img", src: "https://i.imgur.com/q3G3OTSm.jpg", href: "#somelink", title: "Two doges", text: "by me"},
   {type: "img", src: "https://i.imgur.com/ZR6LWClm.jpg", href: "#somelink", title: "Graffiti", text: "by me"},
   {type: "img", src: "https://i.imgur.com/B73Q1pWm.jpg", href: "#somelink", title: "High-rise", text: "by me"},
   {type: "img", src: "https://i.imgur.com/mljsP5Um.jpg", href: "#somelink", title: "High-rise with bird", text: "by me"},
   {type: "img", src: "https://i.imgur.com/SVPCKnmm.jpg", href: "#somelink", title: "WoW", text: "by me"},
   {type: "img", src: "https://i.imgur.com/27BQP5Om.jpg", href: "#somelink", title: "WoW", text: "by me"},
   {type: "txt", href: "#somelink", title: "Moo!", text: "Says cow. They also known to have a milk for everyone. Fun fact: you can feed a cow with chocolate to have a chocolate milk!"},
   {type: "img", src: "https://i.imgur.com/WrLXGvem.jpg", href: "#somelink", title: "Sergals", text: "by me"},
   {type: "img", src: "https://i.imgur.com/abGV4R8m.jpg", href: "#somelink", title: "Sergals", text: "by me"},
   {type: "txt", href: "#somelink", title: "Merp!", text: "Says sergal."}
  ];
  
  // html templates
  var tplimg = '<a href="%href%" class="thumb thumb-img" style="background-image: url(%src%)">'
             + '<img src="%src%" alt="%title%"/>'
             + '<div><span>%title%</span><span>%text%</span></div>'
             + '</a>';
  var tpltxt = '<a href="%href%" class="thumb thumb-txt">'
             + '<div><span>%title%</span><span>%text%</span></div>'
             + '</a>';
  
  var cnt = document.getElementById("thumbs");
  var cs = "";
  for (var i=0; i<data.length; i++) {
   // choose a template to use
   var tpl = data[i].type == "img" ? tplimg : tpltxt;
   // replace strings
   for (var k in data[i])
    tpl = tpl.replace(eval("/%"+k+"%/g"), data[i][k]);
   // save the result
   cs += tpl;
  }
  cnt.innerHTML = cs;
