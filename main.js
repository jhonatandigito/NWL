function onScroll() {
if(scrollY > 0) {
  navigation.classList.add('scroll')
 } else{
   navigation.classList.remove('scroll')
 }
}
function openMenu() {
  document.body.classList.add('menu-expended')
}
 function closeMenu() {
   console.log('ola')
   document.body.classList.remove('menu-expended')
 }
