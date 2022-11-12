const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('Nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})
const sideNavLinks = document.querySelectorAll('.sidebar a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})

