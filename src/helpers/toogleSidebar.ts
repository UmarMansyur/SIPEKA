function toogleSidebar() {
  const width = window.innerWidth;
  const sidebar = document.body;
  if (width < 992) {
    handleToggle(sidebar);
  } else {
    if (sidebar.getAttribute('data-sidebar-size') === null) {
      sidebar.setAttribute('data-sidebar-size', 'lg');
    }
    handleToggle(sidebar);
  }
}

function handleToggle(sidebar: HTMLElement,) {
  if (sidebar.classList.contains('sidebar-enable')) {
    sidebar.classList.remove('sidebar-enable');
  } else {
    sidebar.classList.add('sidebar-enable');
  }
  if (sidebar.getAttribute('data-sidebar-size') === 'lg') {
    sidebar.setAttribute('data-sidebar-size', 'sm');
    document.getElementById('thumbnail')?.classList.add('d-none');
  } else {
    sidebar.setAttribute('data-sidebar-size', 'lg');
    document.getElementById('thumbnail')?.classList.remove('d-none');
  }
}

export { toogleSidebar };