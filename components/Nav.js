export default links => `
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
    ${links.map(el => `<li><a href="${el.title}">${el.title}</a></li>`).join()}
    </ul>
  </nav>
`;
