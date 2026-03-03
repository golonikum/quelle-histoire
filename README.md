# quelle-histoire

### Детальный План Подготовки с Ресурсами:

## 1. Изучение Вакансии и Компании

- Цель: Понять, какие именно технологии и задачи для них важны, какой у них стек, культура.
- Действия:
  - Прочитать вакансию несколько раз, выписать все ключевые слова и технологии.
  - Зайти на сайт компании, изучить их продукты/сервисы.
  - Поискать информацию о компании на LinkedIn, посмотреть профили разработчиков, которые там работают.
  - Почитать отзывы о компании на Glassdoor (если есть).
- Результат: Список вопросов к интервьюеру, понимание контекста.

## 2. JavaScript (Core) - Фундамент

- Цель: Уверенное владение основными концепциями JS, которые используются в React.
- Темы:
  - [Типы данных: Примитивы и объекты, особенности сравнения (== vs ===).](<https://github.com/golonikum/quelle-histoire/blob/main/02.%20JavaScript%20(Core)/01.%20%D0%A2%D0%B8%D0%BF%D1%8B%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.MD>)
  - [Области видимости: var, let, const, scope, hoisting.](<https://github.com/golonikum/quelle-histoire/blob/main/02.%20JavaScript%20(Core)/02.%20%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8.md>)
  - [Замыкания (Closures): Принцип работы, примеры использования.](<https://github.com/golonikum/quelle-histoire/blob/main/02.%20JavaScript%20(Core)/03.%20%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F%20(Closures).md>)
  - [this: Как определяется this в разных контекстах (глобальный, объектный метод, конструктор, стрелочные функции, bind, call, apply).](<https://github.com/golonikum/quelle-histoire/blob/main/02.%20JavaScript%20(Core)/04.%20this%20-%20%D0%9A%D0%B0%D0%BA%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D0%B5%D1%82%D1%81%D1%8F%20this%20%D0%B2%20%D1%80%D0%B0%D0%B7%D0%BD%D1%8B%D1%85%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0%D1%85.md>)
  - [Прототипы и Прототипное наследование: Как работают объекты в JS.](<https://github.com/golonikum/quelle-histoire/blob/main/02.%20JavaScript%20(Core)/05.%20%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D1%8B%20%D0%B8%20%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D0%BD%D0%BE%D0%B5%20%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.md>)
  - [Асинхронность: callbacks, Promises, async/await.](<https://github.com/golonikum/quelle-histoire/blob/main/02.%20JavaScript%20(Core)/06.%20%D0%90%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20-%20callbacks%2C%20Promises%2C%20async%2C%20await.md>)
  - Event Loop: Цикл событий, очередь задач, микрозадачи.
  - ES6+ фичи: Стрелочные функции, деструктуризация, spread/rest операторы, классы, модули.
- Ресурсы:
  - MDN Web Docs (JavaScript Guide): [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (самый надежный источник).
  - You Don't Know JS Yet (книги): [https://github.com/getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS) (глубокое понимание JS).
  - JavaScript.info: [https://javascript.info/](https://javascript.info/) (отличная структурированная информация).
  - LeetCode/Codewars: Задачи на алгоритмы и JS-концепции.

## 3. React (Core & Advanced)

- Цель: Понимать, как работает React "под капотом", уметь применять продвинутые концепции.
- Темы:
  - JSX: Синтаксис, как компилируется.
  - Components: Функциональные и классовые (хотя фокус на функциональных).
  - Props & State: Разница, как обновлять state.
  - Lifecycle Methods / Hooks: useEffect, useState, useContext, useReducer, useMemo, useCallback, useRef.
  - Hooks Rules: Почему важно соблюдать.
  - Context API: Как передавать данные без пропсов.
  - Memoization: React.memo, useMemo, useCallback — когда и зачем использовать.
  - Virtual DOM & Reconciliation: Как React обновляет UI.
  - Error Boundaries.
  - Keys: Зачем они нужны при рендере списков.
  - Higher-Order Components (HOC) vs Hooks: Эволюция паттернов.
- Ресурсы:
  - React Docs: [https://react.dev/](https://react.dev/) (обязательно перечитать, особенно "Thinking in React").
  - "Fullstack React" (книга, если есть возможность).
  - Frontend Masters: Курсы по React (часто платные, но очень качественные).
  - Medium/Dev.to: Статьи на темы, где возникают вопросы.

## 4. TypeScript

- Цель: Уверенное использование TypeScript для повышения надежности кода.
- Темы:
  - Базовые типы: string, number, boolean, null, undefined, symbol, bigint.
  - Сложные типы: Array, Tuple, Enum, Any, Void, Never.
  - Интерфейсы (interface) vs Типы (type): Когда что использовать, отличия.
  - Объединения (|) и пересечения (&) типов.
  - Generic Types: Для создания переиспользуемых компонентов и функций.
  - Type Guards: Проверка типов в рантайме (typeof, instanceof, пользовательские).
  - Utility Types: Partial, Required, Readonly, Pick, Omit, Exclude, Extract.
  - tsconfig.json: Основные настройки.
- Ресурсы:
  - TypeScript Handbook: [https://www.typescriptlang.org/docs/handbook/intro.html](https://www.typescriptlang.org/docs/handbook/intro.html) (официальная документация — лучший друг).
  - TypeScript Deep Dive: [https://basarat.gitbooks.io/typescript-book/content/](https://basarat.gitbooks.io/typescript-book/content/) (очень подробное руководство).

## 5. Next.js

- Цель: Понимать основы Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR) и клиентского рендеринга (CSR) в Next.js.
- Темы:
  - App Router vs Pages Router: Основные отличия и когда что использовать.
  - SSR: getServerSideProps (Pages Router), Server Components (App Router).
  - SSG: getStaticProps, getStaticPaths (Pages Router), Static Rendering (App Router).
  - ISR: Incremental Static Regeneration.
  - API Routes: Создание бэкенда на Next.js.
  - Image Optimization: Компонент next/image.
  - Code Splitting & Lazy Loading.
  - Data Fetching Strategies.
- Ресурсы:
  - Next.js Official Documentation: [https://nextjs.org/docs](https://nextjs.org/docs) (пройти туториалы, особенно по App Router).
  - Vercel Docs: [https://vercel.com/docs/nextjs](https://vercel.com/docs/nextjs) (Vercel — создатели Next.js, много полезной информации).

## 6. CSS & UI (TailwindCSS)

- Цель: Уверенное использование TailwindCSS, понимание принципов адаптивной верстки.
- Темы:
  - TailwindCSS:
    - Utility-first подход.
    - Конфигурация (tailwind.config.js).
    - Дизайн-токены (цвета, отступы, шрифты).
    - Адаптивность (sm:, md:, lg:).
    - Псевдоклассы (hover:, focus:).
    - @apply и @screen.
  - CSS:
    - Box Model.
    - Display Properties (flex, grid, block, inline).
    - Positioning (relative, absolute, fixed, sticky).
    - Specificity.
    - CSS Variables (Custom Properties).
    - Mobile-first vs Desktop-first.
    - Accessibility (A11y) — базовые принципы, семантика HTML.
- Ресурсы:
  - Tailwind CSS Documentation: [https://tailwindcss.com/docs](https://tailwindcss.com/docs) (пройти весь основной раздел).
  - Flexbox Froggy: [https://flexboxfroggy.com/](https://flexboxfroggy.com/) (для Flexbox).
  - Grid Garden: [https://cssgridgarden.com/](https://cssgridgarden.com/) (для CSS Grid).
  - MDN Web Docs (CSS): [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 7. State Management

- Цель: Понимать, когда нужен глобальный стейт, и уметь работать с Zustand и Tanstack Query.
- Zustand:
  - Принцип работы: Простой, минимумом бойлерплейта, основан на хуках.
  - Создание стора: create
  - Использование хука useStore: Чтение и обновление состояния.
  - Примеры: Как решить типичные задачи управления состоянием.
- Tanstack Query (React Query):
  - Принцип работы: Управление серверным состоянием (данными с API). Кэширование, фоновый рефетч, инвалидация, пагинация.
  - Ключевые хуки: useQuery, useMutation.
  - Ключевые концепции: Query Client, Query Cache, Mutation Cache.
  - Преимущества: Уменьшает количество ручного управления состоянием API.
- Ресурсы:
  - Zustand Documentation: [https://zustand-v3.pmnd.rs/](https://zustand-v3.pmnd.rs/)
  - Tanstack Query Documentation: [https://tanstack.com/query/latest](https://tanstack.com/query/latest) (обязательно изучить примеры и концепции).

## 8. Form Handling (React Hook Form & Zod)

- Цель: Эффективно работать с формами, включая валидацию.
- React Hook Form:
  - Принцип работы: Контролируемое состояние форм, но без лишнего ререндера.
  - Ключевые хуки: useForm.
  - Основные методы: handleSubmit, register, reset, formState: { errors }.
  - Валидация: С помощью register (встроенная) и с помощью схем валидации (Zod).
- Zod:
  - Принцип работы: Схема типизации и валидации данных.
  - Создание схем: Определение структуры данных и правил валидации.
  - Интеграция с React Hook Form: Как передавать схему Zod в useForm.
- Ресурсы:
  - React Hook Form Documentation: [https://reacthookform.com/](https://reacthookform.com/)
  - Zod Documentation: [https://zod.dev/](https://zod.dev/)

## 9. Testing (Unit & Integration)

- Цель: Понимать, зачем нужны тесты, и уметь писать базовые тесты для React-компонентов.
- Темы:
  - Jest: Фреймворк для тестирования (можно упомянуть, что часто идет "из коробки" с Create React App или Next.js).
  - React Testing Library (RTL): Философия тестирования (тестировать поведение, а не имплементацию).
  - Базовые запросы RTL: render, screen.getByRole, getByText, getByLabelText, waitFor.
  - Тестирование пользовательских взаимодействий: fireEvent, userEvent (из @testing-library/user-event).
  - Unit Tests vs Integration Tests: В чем разница.
  - Mocking: Как мокать API-запросы (например, с помощью jest.mock или msw).
- Ресурсы:
  - React Testing Library Docs: [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)
  - Jest Docs: [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)
  - Frontend Masters: Курсы по тестированию.

## 10. Performance Optimization

- Цель: Знать основные методы оптимизации производительности.
- Темы:
  - Code Splitting / Lazy Loading:
    - React.lazy() & Suspense.
    - Динамический импорт (import()).
    - В Next.js: автоматический code splitting.
  - Image Optimization:
    - Форматы (WebP, AVIF).
    - Ленивая загрузка (lazy loading) картинок.
    - Адаптивные изображения (responsive images).
    - В Next.js: <Image /> компонент.
  - Memoization: React.memo, useMemo, useCallback (повторение из React Core).
  - Virtualization / Windowing: Для длинных списков (например, react-window, react-virtualized).
  - Caching Strategies: Браузерный кэш, HTTP-заголовки, кэширование на стороне сервера.
  - Bundle Size Analysis: Инструменты типа Webpack Bundle Analyzer.
  - Browser DevTools (Performance Tab): Как анализировать узкие места.
- Ресурсы:
  - web.dev: [https://web.dev/](https://web.dev/) (отличные статьи про производительность).
  - React Docs (Performance): [https://react.dev/learn/performance](https://react.dev/learn/performance)
  - Next.js Docs (Performance): [https://nextjs.org/docs/pages/building-your-application/optimizing](https://nextjs.org/docs/pages/building-your-application/optimizing)

## 11. CI/CD & Docker (Basics)

- Цель: Иметь общее представление о процессах сборки, тестирования и развертывания, и о контейнеризации.
- CI/CD (Continuous Integration/Continuous Deployment):
  - Что это: Автоматизация сборки, тестирования и развертывания кода.
  - Этапы: Commit -> Build -> Test -> Deploy.
  - Инструменты: Jenkins, GitLab CI, GitHub Actions (важно знать хотя бы один, как пример).
  - Pipeline: Что такое пайплайн, как он работает.
- Docker:
  - Что это: Платформа для разработки, доставки и запуска приложений в контейнерах.
  - Контейнер vs Виртуальная машина: Ключевые отличия.
  - Dockerfile: Основы написания.
  - Docker Image / Container.
  - Docker Compose: Базовое понимание для запуска нескольких контейнеров.
- Ресурсы:
  - GitLab CI/CD Docs: [https://docs.gitlab.com/ee/ci/](https://docs.gitlab.com/ee/ci/)
  - GitHub Actions Docs: [https://github.com/features/actions](https://github.com/features/actions)
  - Docker Documentation: [https://docs.docker.com/](https://docs.docker.com/)
  - Docker Tutorial: [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)

## 12. Soft Skills & Architecture

- Цель: Продемонстрировать способность работать в команде и принимать решения.
- Темы:
  - Коммуникация:
    - Как задавать уточняющие вопросы.
    - Как объяснять свои идеи.
    - Как слушать и понимать чужие.
    - Как давать и получать обратную связь.
  - Принятие архитектурных решений (совместно с Backend):
    - Разделение ответственности между фронтом и бэком.
    - Выбор API (REST, GraphQL) — плюсы и минусы.
    - Обработка ошибок на стыке фронт-бэк.
    - Стратегии кэширования API.
    - Безопасность (CSRF, XSS) — базовое понимание.
  - Аналитическое мышление: Как подходишь к решению незнакомой задачи.
- Как подготовиться:
  - Продумать примеры из своего опыта, когда приходилось принимать архитектурные решения.
  - Быть готовым рассказать о своем подходе к решению проблем.
  - Практиковать ответы на поведенческие вопросы ("Расскажите о ситуации, когда...", "Как вы справляетесь с...").

## 13. Практика и Пробные Интервью

- Цель: Наработать уверенность, выявить слабые места.
- Действия:
  - Решать задачи: Кодинг-задачи на LeetCode/Codewars (особенно на JavaScript и алгоритмы).
  - Практика с RTL: Написать тесты для простых React-компонентов.
  - Пробные интервью:
    - Попросить друзей/коллег провести пробное интервью.
    - Использовать платформы для пробных интервью (например, Pramp, interviewing.io).
    - Записывать себя на видео, чтобы увидеть свои ошибки.
