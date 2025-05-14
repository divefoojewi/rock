document.addEventListener('DOMContentLoaded', function() {
    const coyImage = document.getElementById('coy');
    
    coyImage.addEventListener('mouseover', function() {
      // Добавляем класс opacity для изображений kis и tdd
      document.getElementById('kis').classList.add('opacity');
      document.getElementById('tdd').classList.add('opacity');
      
      // Меняем цвет текста элемента с id rock-word на желтый
      document.getElementById('rock-word').classList.add('yellow-text');
    });
    
    coyImage.addEventListener('mouseout', function() {
      // Убираем класс opacity при уходе курсора
      document.getElementById('kis').classList.remove('opacity');
      document.getElementById('tdd').classList.remove('opacity');
      
      // Возвращаем исходный цвет текста
      document.getElementById('rock-word').classList.remove('yellow-text');
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const kisImage = document.getElementById('kis');
    
    kisImage.addEventListener('mouseover', function() {
      // Добавляем класс opacity для изображений kis и tdd
      document.getElementById('coy').classList.add('opacity');
      document.getElementById('tdd').classList.add('opacity');
      
      // Меняем цвет текста элемента с id rock-word на желтый
      document.getElementById('rock-word').classList.add('red-text');
    });
    
    kisImage.addEventListener('mouseout', function() {
      // Убираем класс opacity при уходе курсора
      document.getElementById('coy').classList.remove('opacity');
      document.getElementById('tdd').classList.remove('opacity');
      
      // Возвращаем исходный цвет текста
      document.getElementById('rock-word').classList.remove('red-text');
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const tddImage = document.getElementById('tdd');
    
    tddImage.addEventListener('mouseover', function() {
      // Добавляем класс opacity для изображений kis и tdd
      document.getElementById('coy').classList.add('opacity');
      document.getElementById('kis').classList.add('opacity');
      
      // Меняем цвет текста элемента с id rock-word на желтый
      document.getElementById('rock-word').classList.add('blue-text');
    });
    
    tddImage.addEventListener('mouseout', function() {
      // Убираем класс opacity при уходе курсора
      document.getElementById('coy').classList.remove('opacity');
      document.getElementById('kis').classList.remove('opacity');
      
      // Возвращаем исходный цвет текста
      document.getElementById('rock-word').classList.remove('blue-text');
    });
  });