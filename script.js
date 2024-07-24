function shuffleCards() {
  var container = document.querySelector('.flip-card-container');
  for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[(Math.random() * i) | 0]);
  }
}

function flipCard(card) {
  card.classList.toggle('flipped');
}
