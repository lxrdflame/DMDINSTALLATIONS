document.addEventListener("DOMContentLoaded", function() {
    //Side Bar toggle
    const SideBarToggle = document.querySelector('.toggle-sidebar-btn');
    const sidebar = document.querySelector('.sidebar');
    let isSidebarOpen = false;
    let hamburgerMenu = "&#9776;";
    let closeMenu = "&times;";

    
    if (SideBarToggle) {
        // ensure there's a span inside the button to update the icon/text
        let buttonSpan = SideBarToggle.querySelector('span');
        if (!buttonSpan) {
            buttonSpan = document.createElement('span');
            // move any existing children into the span
            while (SideBarToggle.firstChild) {
                buttonSpan.appendChild(SideBarToggle.firstChild);
            }
            SideBarToggle.appendChild(buttonSpan);
        }

        SideBarToggle.addEventListener('click', () => {
           if (!isSidebarOpen)
           {
            console.log("Clicked");
                isSidebarOpen = true;
                gsap.to(".sidebar", {x: 0, duration: 1 });
           }
           else if (isSidebarOpen)
            {
               isSidebarOpen = false;
                gsap.to(".sidebar", {x: -200, duration: 1 });
           }
            buttonSpan.innerHTML = isSidebarOpen ? closeMenu : hamburgerMenu;
        });
    }

});
