// Главная логика приложения для изучения церковно-славянской азбуки

class ChurchSlavonicApp {
    constructor() {
        this.letters = churchSlavonicAlphabet;
        this.currentIndex = 0;
        this.isNameVisible = false;
        this.shuffledLetters = [];
        this.rememberedLetters = new Set(); // Множество для хранения ID запомненных букв
        
        // Элементы DOM
        this.letterElement = document.getElementById('letter');
        this.letterNameElement = document.getElementById('letterName');
        this.flashcard = document.getElementById('flashcard');
        this.rememberBtn = document.getElementById('rememberBtn');

        
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
        // Фильтруем буквы, исключая запомненные
        const availableLetters = this.letters.filter((letter, index) => 
            !this.rememberedLetters.has(index)
        );
        
        // Если все буквы запомнены, показываем сообщение
        if (availableLetters.length === 0) {
            this.showCompletionMessage();
            return;
        }
        
        // Создаем копию доступных букв и перемешиваем
        this.shuffledLetters = [...availableLetters];
        for (let i = this.shuffledLetters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.shuffledLetters[i], this.shuffledLetters[j]] = [this.shuffledLetters[j], this.shuffledLetters[i]];
        }
        
        console.log(`Буквы перемешаны. Доступно: ${availableLetters.length}, запомнено: ${this.rememberedLetters.size}`);
    }
    
    displayCurrentLetter() {
        const currentLetter = this.shuffledLetters[this.currentIndex];
        
        // Создаем HTML с разными размерами для прописной и строчной букв
        const upperSpan = `<span class="uppercase">${currentLetter.uppercase}</span>`;
        const lowerSpan = `<span class="lowercase">${currentLetter.lowercase}</span>`;
        this.letterElement.innerHTML = upperSpan + lowerSpan;
        
        // Скрываем название
        this.hideLetterName();
        
        // Анимация появления карточки
        this.animateCardAppearance();
        
        console.log(`Показана буква: ${currentLetter.uppercase}${currentLetter.lowercase} (${currentLetter.name})`);
    }
    
    showLetterName() {
        if (!this.isNameVisible) {
            const currentLetter = this.shuffledLetters[this.currentIndex];
            this.letterNameElement.textContent = currentLetter.name;
            this.letterNameElement.classList.add('show');
            this.isNameVisible = true;
            
            console.log(`Показано название: ${currentLetter.name}`);
        } else {
            this.nextCard();
        }
    }
    
    hideLetterName() {
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
    
    showCompletionMessage() {
        this.letterElement.innerHTML = '<span style="font-size: 0.4em; color: #48bb78;">🎉</span>';
        this.letterNameElement.textContent = 'Все буквы изучены!';
        this.letterNameElement.classList.add('show');
        this.rememberBtn.style.display = 'none';
        console.log('Все буквы изучены!');
    }
    
    rememberCurrentLetter() {
        if (this.shuffledLetters.length === 0) return;
        
        const currentLetter = this.shuffledLetters[this.currentIndex];
        
        // Находим индекс текущей буквы в исходном массиве
        const originalIndex = this.letters.findIndex(letter => 
            letter.uppercase === currentLetter.uppercase && 
            letter.lowercase === currentLetter.lowercase
        );
        
        if (originalIndex !== -1) {
            this.rememberedLetters.add(originalIndex);
            console.log(`Буква запомнена: ${currentLetter.uppercase}${currentLetter.lowercase} (${currentLetter.name})`);
            
            // Обновляем текст кнопки
            this.updateRememberButtonText();
            
            // Переходим к следующей букве
            this.nextCard();
        }
    }
    
    updateRememberButtonText() {
        const rememberedCount = this.rememberedLetters.size;
        if (rememberedCount > 0) {
            this.rememberBtn.textContent = `Помню ${rememberedCount} из 41`;
        } else {
            this.rememberBtn.textContent = 'Помню';
        }
    }
    
    addEventListeners() {
        // Клик по карточке
        this.flashcard.addEventListener('click', () => {
            this.showLetterName();
        });
        

        

        
        // Кнопка "Помню"
        this.rememberBtn.addEventListener('click', () => {
            this.rememberCurrentLetter();
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
                case 'r':
                case 'R':
                case 'к':
                case 'К':
                    event.preventDefault();
                    this.rememberCurrentLetter();
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