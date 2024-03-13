const topMenu = document.getElementById('top-menu');
const toggleTopMenu = document.getElementById('toggle-top-menu');

    document.addEventListener('click', (e) =>{
        if (toggleTopMenu.contains(e.target)) {
            //Click to toggle top menu
            topMenu.classList.toggle('top-menu-expanded')
            topMenu.classList.toggle('hidden')
        }else{
            // Click outside from toggle top menu
            if (topMenu.classList.contains('top-menu-expanded')){
                topMenu.classList.remove('top-menu-expanded')
                topMenu.classList.add('hidden')
            }
        }
    })