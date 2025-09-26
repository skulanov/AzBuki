// Главная логика приложения для изучения церковно-славянской азбуки

class ChurchSlavonicApp {
    constructor() {
        this.letters = churchSlavonicAlphabet;
        this.currentIndex = 0;
        this.isNameVisible = false;
        this.shuffledLetters = [];
        
        // Элементы DOM
        this.letterElement = document.getElementById('letter');
        this.letterNameElement = document.getElementById('letterName');
        this.flashcard = document.getElementById('flashcard');
        this.nextCardBtn = document.getElementById('nextCardBtn');
        this.prevCardBtn = document.getElementById('prevCardBtn');
        this.showNameBtn = document.getElementById('showNameBtn');
        
        this.init();
    }
    
    init() {
        // Проверяем, что элементы DOM найдены
        if (!this.letterElement || !this.letterNameElement || !this.flashcard) {
            console.error('Не удалось найти необходимые элементы DOM');
            return;
        }
        
        // Перемешиваем массив букв для случайного порядка
        this.shuffleLetters();
        
        // Отображаем первую букву
        this.displayCurrentLetter();
        
        // Добавляем обработчики событий
        this.addEventListeners();
        
        console.log('Приложение инициализировано. Букв в азбуке:', this.letters.length);
        console.log('Первая буква:', this.shuffledLetters[0]);
    }
    
    shuffleLetters() {
        // Создаем копию массива и перемешиваем его
        this.shuffledLetters = [...this.letters];
        for (let i = this.shuffledLetters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.shuffledLetters[i], this.shuffledLetters[j]] = [this.shuffledLetters[j], this.shuffledLetters[i]];
        }
        console.log('Буквы перемешаны');
    }
    
    displayCurrentLetter() {
        const currentLetter = this.shuffledLetters[this.currentIndex];
        
        // Показываем букву
        this.letterElement.textContent = currentLetter.letter;
        
        // Скрываем название
        this.hideLetterName();
        
        // Анимация появления карточки
        this.animateCardAppearance();
        
        console.log(`Показана буква: ${currentLetter.letter} (${currentLetter.name})`);
    }
    
    showLetterName() {
        if (!this.isNameVisible) {
            const currentLetter = this.shuffledLetters[this.currentIndex];
            this.letterNameElement.textContent = currentLetter.name;
            this.letterNameElement.style.display = 'block';
            this.letterNameElement.classList.add('show');
            this.isNameVisible = true;
            
            console.log(`Показано название: ${currentLetter.name}`);
        } else {
            this.nextCard();
        }
    }
    
    hideLetterName() {
        this.letterNameElement.style.display = 'none';
        this.letterNameElement.classList.remove('show');
        this.isNameVisible = false;
    }
    
    nextCard() {
        this.currentIndex = (this.currentIndex + 1) % this.shuffledLetters.length;
        
        // Если прошли все буквы, перемешиваем снова
        if (this.currentIndex === 0) {
            this.shuffleLetters();
            console.log('Цикл завершен, буквы перемешаны заново');
        }
        
        this.displayCurrentLetter();
    }
    
    prevCard() {
        this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.letters.length - 1;
        this.displayCurrentLetter();
    }
    

    
    animateCardAppearance() {
        this.flashcard.style.transform = 'scale(0.95)';
        this.flashcard.style.opacity = '0.8';
        
        setTimeout(() => {
            this.flashcard.style.transform = 'scale(1)';
            this.flashcard.style.opacity = '1';
        }, 100);
    }
    
    addEventListeners() {
        // Клик по карточке
        this.flashcard.addEventListener('click', () => {
            this.showLetterName();
        });
        
        // Кнопка "Следующая карточка"
        this.nextCardBtn.addEventListener('click', () => {
            this.nextCard();
        });
        
        // Кнопка "Предыдущая карточка"
        this.prevCardBtn.addEventListener('click', () => {
            this.prevCard();
        });
        
        // Кнопка "Показать название"
        this.showNameBtn.addEventListener('click', () => {
            if (!this.isNameVisible) {
                this.showLetterName();
            }
        });
        
        // Обработка клавиш клавиатуры
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case ' ':
                case 'Enter':
                    event.preventDefault();
                    this.showLetterName();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                    event.preventDefault();
                    this.nextCard();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    event.preventDefault();
                    this.prevCard();
                    break;
            }
        });
        
        console.log('Обработчики событий добавлены');
    }
}

// Инициализация приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const app = new ChurchSlavonicApp();
    
    // Добавляем информацию о горячих клавишах в консоль
    console.log('Горячие клавиши:');
    console.log('- Пробел/Enter: показать название буквы');
    console.log('- Стрелка вправо/вниз: следующая карточка');
    console.log('- Стрелка влево/вверх: предыдущая карточка');
});