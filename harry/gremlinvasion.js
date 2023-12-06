class GameModal {
  constructor() {
    this.modal = null;
  }

  closePopup() {
    this.style.display = "none";
}

  openModal() {
    // Créer un élément de modal
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');

    // Charger le contenu de "index.html" dans la modale
    fetch('harry/game1/index.html')
      .then(response => response.text())
      .then(html => {
        this.modal.innerHTML = html;
      });

    // Ajouter la modal à la page
    document.body.appendChild(this.modal);
  }

  closeModal() {
    // Supprimer la modal de la page
    if (this.modal) {
      document.body.removeChild(this.modal);
      this.modal = null;
    }
  }
}