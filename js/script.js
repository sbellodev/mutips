document.addEventListener('DOMContentLoaded', () => {

    fetch('../data/incineroarENGData.json')
    .then(response => response.json())
    .then(characterInfo => {
        document.querySelector('header h1').textContent = characterInfo.name;
        const categoryOrder = ['offensive', 'defensive', 'midrange', 'bigboi', 'trickster'];
        const characterFilterInput = document.getElementById('character-filter');
        characterFilterInput.addEventListener('input', () => {
            const filterValue = characterFilterInput.value.toLowerCase();
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = name.includes(filterValue) ? 'block' : 'none';
            });
        });

        function toggleFavorite(card) {
            const opponent = card.querySelector('h3').textContent;
            const index = characterInfo.matchups.findIndex(matchup => matchup.opponent === opponent);
            const isFavorite = !characterInfo.matchups[index].favorite;
            characterInfo.matchups[index].favorite = isFavorite;

            updateAllCards(); 
            saveFavoritesToCookies(); 
        }

        function updateFavorites() {
            const favoritesContainer = document.getElementById('favorites-container-big');
            favoritesContainer.innerHTML = '';

            const allCardsContainer = document.createElement('div');
            allCardsContainer.className = 'favorites-container';

            const favoriteMatchups = characterInfo.matchups.filter(matchup => matchup.favorite);
            favoriteMatchups.forEach(matchup => {
                createCard(matchup, allCardsContainer, 'favorites');
            });

            favoritesContainer.appendChild(allCardsContainer);
        }

        function createCard(matchup, container, section) {
            const card = createCardElement(matchup);
            cardAddEventListeners(card, matchup, section);
            container.appendChild(card);
        }

        function createCardElement(matchup) {
            const card = document.createElement('div');
            card.className = `card category-${matchup.category}`;
            card.innerHTML = `
                <picture>
                    <source type='image/webp' srcSet='${matchup.image}.webp' />
                    <img src='${matchup.image}.png' alt='${matchup.opponent}' />
                </picture>
                <h3 style="display:none">${matchup.opponent}</h3>
            `;
            return card;
        }

        function speakText(text) {
            let voices = window.speechSynthesis.getVoices();

            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel(); 
            } else {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.voice = voices[6]
                utterance.rate = 1.2
                utterance.pitch = 0.4
                window.speechSynthesis.speak(utterance);
            }
        }

        function cardAddEventListeners(card, matchup, section) {
            let timer;

            card.addEventListener('mousedown', () => {
                timer = setTimeout(() => {
                    toggleFavorite(card);
                }, 2000);
            });

            card.addEventListener('mouseup', () => {
                clearTimeout(timer);
            });

            card.addEventListener('click', () => {
                updateDescription(matchup, section);

                const currentDescription = document.getElementById(`${section}-description`);
                const heartIcon = currentDescription.querySelector('.favorite-heart');

                heartIcon.addEventListener('click', () => {
                    toggleFavorite(card); 
                    heartIcon.innerHTML = matchup.favorite ? '❤️' : '🤍';
                });

                const description = document.getElementById(`${section}-description`);
                const yOffset = -120;
                const y = description.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            });

        }
        
        function updateDescription(matchup, section) {
            const currentDescription = document.getElementById(`${section}-description`);
            const descriptionHeader = document.createElement('h2');
            const favoriteIcon = matchup.favorite ? '❤️' : '🤍';
            currentDescription.innerHTML = '';
            descriptionHeader.innerHTML = `Description <button class="tts-button">🔊</button><span class="favorite-heart">${favoriteIcon}</span>`;
            const descriptionText = document.createElement('div');
            descriptionText.innerHTML = `${matchup.description}`;
            currentDescription.appendChild(descriptionHeader);
            currentDescription.appendChild(descriptionText);
            currentDescription.style.display = 'block';

            const ttsButton = currentDescription.querySelector('.tts-button');
            ttsButton.addEventListener('click', (event) => {
                event.stopPropagation();
                speakText(matchup.description);
            });
        }

        function updateAllCards() {
            const categoriesContainer = document.getElementById('allcards-container-big');
            categoriesContainer.innerHTML = '';
            const allCardsContainer = document.createElement('div');
            allCardsContainer.className = 'allcards-container';

            const categories = groupMatchupsByCategory(characterInfo.matchups);

            categoryOrder.forEach(category => {
                if (categories[category]) {
                    categories[category].forEach(character => {
                        createCard(character, allCardsContainer, 'allcards');
                    });
                }
            })

            categoriesContainer.appendChild(allCardsContainer);
            updateFavorites();
        }

        function groupMatchupsByCategory(matchups) {
            const categories = {};
            matchups.forEach(matchup => {
                if (!categories[matchup.category]) {
                    categories[matchup.category] = [];
                }
                categories[matchup.category].push(matchup);
            });
            return categories;
        }

        function saveFavoritesToCookies() {
            const favorites = characterInfo.matchups.filter(matchup => matchup.favorite).map(matchup => matchup.opponent);
            const order = characterInfo.matchups.map(matchup => matchup.opponent);
            document.cookie = `favorites=${JSON.stringify(favorites)}; order=${JSON.stringify(order)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`; 
        }

        function loadFavoritesFromCookies() {
            const favoritesCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('favorites='));
            if (favoritesCookie) {
                const favorites = JSON.parse(favoritesCookie.split('=')[1]);
                favorites.forEach(favorite => {
                    const matchup = characterInfo.matchups.find(matchup => matchup.opponent === favorite);
                    if (matchup) {
                        matchup.favorite = true;
                    }
                });
                updateAllCards();
            }
        }

        loadFavoritesFromCookies();
        updateAllCards();
    });
})