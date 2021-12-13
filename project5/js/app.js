baguetteBox.run('.gallery');


 function searchBar() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
        let main = document.getElementsByTagName('a');
     for (i = 0; i < main.length; i++) { 
        let caption = main[i].getAttribute('data-caption');
        caption = caption.toLowerCase();
         if (caption.includes(input)) {
            main[i].style.display = "block";
         } else {
            main[i].style.display = "none";                 
        }
     }
}