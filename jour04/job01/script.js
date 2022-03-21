document.addEventListener('DOMContentLoaded', function loaded() {

    var p = document.querySelector('p')
    var btn = document.querySelector('button')

    btn.addEventListener("click", function () {
        fetch('expression.txt')
            .then((response) => response.text())
            .then((response) => {
                console.log(response)
                p.innerHTML = response

            } )

                   
            .catch((error) => console.log(error))
    });
});