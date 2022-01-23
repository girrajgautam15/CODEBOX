window.onload=function(){
    let htmleditor=ace.edit("html");
    htmleditor.session.setMode("ace/mode/html");
    htmleditor.setTheme("ace/theme/monokai");
    htmleditor.session.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`);
    htmleditor.session.setUseWrapMode(true);
    htmleditor.setShowPrintMargin(false);
    htmleditor.session.on('change', function(delta) {
        console.log(htmleditor.getValue())
        update();
    });

    let csseditor=ace.edit("css");
    csseditor.session.setMode("ace/mode/css");
    csseditor.setTheme("ace/theme/monokai");
    csseditor.session.setValue(`/*Type your CSS here*/
body{

}`);
    csseditor.session.setUseWrapMode(true);
    csseditor.setShowPrintMargin(false);
    csseditor.session.on('change', function(delta) {
        console.log(csseditor.getValue())
        update();
    });

    let jseditor=ace.edit("javascript");
    jseditor.session.setMode("ace/mode/javascript");
    jseditor.setTheme("ace/theme/monokai");
    jseditor.session.setValue(`//Type your Javascript here`);
    jseditor.session.setUseWrapMode(true);
    jseditor.setShowPrintMargin(false);
    jseditor.session.on('change', function(delta) {
        console.log(jseditor.getValue())
        update();
    });

    function update(){
        let output=document.querySelector(".output .output-iframe").contentWindow.document;
        output.open();
        output.write("<style>"+csseditor.getValue()+"</style>" + htmleditor .getValue() + "<script>"+jseditor.getValue()+"</script>");
        output.close();
    }
}

