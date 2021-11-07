// Animacao do cabecalho
const header = document.getElementById('header')

function scrollHeader(){
  const windowTop =window.innerHeight * 0.95

  const headerTop = window.scrollY + 80
  if (windowTop < headerTop){
    console.log(windowTop)
  }
}
window.addEventListener('scroll', scrollHeader)

// Animacao do cabecalho