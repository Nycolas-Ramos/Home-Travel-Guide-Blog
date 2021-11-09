// Animacao do cabecalho
const header = document.getElementById('header')

function scrollHeader(){
  const windowTop =window.innerHeight * 0.95 - 60
  const headerTop = window.scrollY + 80
  
  if (windowTop < headerTop){
    if(!header.classList.contains('hide')){
      header.classList.add('hide')
      header.classList.remove('show')
    }
  }else if (windowTop > headerTop){
    if(header.classList.contains('hide')){
      header.classList.add('show')
      header.classList.remove('hide')
    }
  }
}
window.addEventListener('scroll', scrollHeader)
// Animacao do cabecalho

