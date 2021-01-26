function triggerSideBar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("sidebar-overlay");

    if (sidebar.classList.contains("out")) {
        sidebar.classList.remove("out");
        overlay.classList.remove("active");
        overlay.classList.add("semiactive");
        document.body.style.overflow = "visible";
        setTimeout(function(){
            overlay.classList.remove("semiactive");
        },200);
    }
    else if (!overlay.classList.contains("semiactive")) {
        sidebar.classList.add("out");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

}