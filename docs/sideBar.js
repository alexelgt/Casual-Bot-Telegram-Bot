function triggerSideBar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("sidebar-overlay");

    if (sidebar.classList.contains("out")) {
        sidebar.classList.remove("out");
        overlay.classList.remove("active");
        document.body.style.overflow = "visible";
    }
    else {
        sidebar.classList.add("out");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

}