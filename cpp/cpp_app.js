window.onload=function(){
    let cppeditor=ace.edit("cpp");
    cppeditor.session.setMode("ace/mode/c_cpp");
    cppeditor.setTheme("ace/theme/monokai");
    cppeditor.session.setValue(`//Type your C/C++ code here`);
    cppeditor.session.setUseWrapMode(true);
    cppeditor.setShowPrintMargin(false);
    cppeditor.session.on('change', function(delta) {
        console.log(cppeditor.getValue())
        update();
    });

    function update(){
        let output=document.querySelector(".output .output-iframe").contentWindow.document;
        output.open();
        var code=cppeditor.getValue();
        //output.write(eval(code));
        // eval(code)
        try {
            var result = eval(code)
        }catch(e) {
            // report error...
        }
        output.write(result);
        output.close();
    }
}

