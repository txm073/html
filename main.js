function showDropdown(id) {
    document.getElementById(id).style.display = "block";
}
 
function hideDropdowns() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display == "block") {
            openDropdown.style.display = "none";
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        hideDropdowns();
    } else {
        if (event.target.id.endsWith("-lbl")) {
            hideDropdowns();
            showDropdown(event.target.id.replace("-lbl", ""));
        } else if (event.target.id.endsWith("dropdown")) {
            hideDropdowns();
            showDropdown(event.target.id);
        }
    }
}


window.onload = function() {
    var textarea = document.querySelector(".workspace .codemirror-textarea")
    var editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true, tabSize: 4, theme: "monokai", autocorrect: false, 
        spellcheck: false, mode: "python", matchBrackets: true, styleActiveLine: {nonEmpty: true},
        fixedGutter: true, coverGutterNextToScrollbar: true, indentUnit: 4, 
    })
    editor.setSize(null, document.getElementById("text-edit").offsetHeight);                                                                                                                                                                                                                                                                                                                                                
    //editor.setOption("scrollbarStyle", "overlay");
}