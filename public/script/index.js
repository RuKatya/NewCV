const button = document.getElementById('menu');

        button.addEventListener('click', function (event) {
            event.preventDefault();

            const menu = document.getElementById('navbar__menu');
            menu.classList.toggle('isopen')
        })