
// Manejo del botón "Ver Productos"
document.addEventListener('DOMContentLoaded', function() {
    // Botón Ver Productos en la sección hero
    const verProductosBtn = document.getElementById('ver-productos-btn');
    if (verProductosBtn) {
        verProductosBtn.addEventListener('click', function() {
            window.location.href = 'categorias.html';
        });
    }
    
    // Funcionalidad de búsqueda
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" class="search-input" placeholder="Buscar productos...">
        <button class="search-btn"><i class="fas fa-search"></i></button>
    `;
    searchContainer.style.display = 'none';
    
    // Insertar el contenedor de búsqueda después del div .nav-icons
    const navIcons = document.querySelector('.nav-icons');
    if (navIcons) {
        navIcons.parentNode.insertBefore(searchContainer, navIcons.nextSibling);
    }
    
    // Mostrar/ocultar barra de búsqueda al hacer clic en el icono
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            if (searchContainer.style.display === 'none') {
                searchContainer.style.display = 'flex';
                searchContainer.querySelector('input').focus();
            } else {
                searchContainer.style.display = 'none';
            }
        });
    }
    
    // Manejar la acción de búsqueda
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', realizarBusqueda);
    }
    
    // También permitir búsqueda con la tecla Enter
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                realizarBusqueda();
            }
        });
    }
    
    function realizarBusqueda() {
        const query = document.querySelector('.search-input').value.trim();
        if (query !== '') {
            // Aquí puedes redirigir a una página de resultados con el término de búsqueda
            // Por ahora, simplemente alertamos, pero lo ideal sería redirigir a una página de resultados
            alert(`Buscando: ${query}`);
            // window.location.href = `resultados.html?q=${encodeURIComponent(query)}`;
        }
    }
    
    // Ocultar la barra de búsqueda cuando se hace clic fuera de ella
    document.addEventListener('click', function(event) {
        const isClickInsideSearchContainer = searchContainer.contains(event.target);
        const isClickOnSearchIcon = searchIcon.contains(event.target);
        
        if (!isClickInsideSearchContainer && !isClickOnSearchIcon && searchContainer.style.display !== 'none') {
            searchContainer.style.display = 'none';
        }
    });
});