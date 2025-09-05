const absensi = document.querySelectorAll('.absensi');

absensi.forEach(item => {
    item.addEventListener('click', function(){
        absensi.forEach(i => i.classList.remove('active'));
    item.classList.add('active'); 
    })
})