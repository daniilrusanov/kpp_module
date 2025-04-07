# Розробка сервісу для формування унікальних комбінацій елементів

**Виконав:** студент групи КН-31 Русанов Данііл  
**Варіант 23**

## Хостинг 
```bash
https://formation-of-combinations.web.app/home
```

## Опис проекту
Цей проект реалізує сервіс для генерації унікальних комбінацій елементів з заданого набору. Користувач може вводити набір елементів та визначати довжину комбінацій, після чого система генерує всі можливі варіанти комбінацій елементів.

## Сервіс
Сервіс обчислює всі можливі унікальні перестановки елементів з заданою довжиною. Для цього використовується рекурсивний підхід, що дозволяє знаходити всі варіанти без повторів.

## Команди для запуску Cypress

### Запуск тестів у візуальному режимі
Щоб запустити тести з візуальним інтерфейсом, використовуйте команду:
```bash
npx cypress open
```

### Запуск тестів без візуального інтерфейсу (headless режим)
Для запуску тестів без візуального інтерфейсу використовуйте команду:
```bash
npx cypress run
```

### Де шукати тести?
Тести Cypress розташовані в директорії:
```bash
cypress/e2e/
```