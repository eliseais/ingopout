## ingopout

Одностраничное приложение на React + TypeScript. Стили — Tailwind CSS v4 (utility‑классы уже сгенерированы в `index.css`, базовые токены/переменные — в `styles/globals.css`). Точка входа — `main.tsx`, корневой компонент — `App.tsx`, главный экран — `imports/Landing.tsx`.

### Стек
- React (ReactDOM `createRoot`)
- TypeScript
- Tailwind CSS v4 (готовые utility‑классы из CSS)
- Набор UI‑компонентов в `components/ui/*`

### Структура
- `App.tsx` — корневой компонент, подключает `imports/Landing.tsx`
- `main.tsx` — монтирование в DOM (`#root`) и импорт стилей
- `imports/` — страницы/секции, в т.ч. `Landing.tsx`
- `components/` — переиспользуемые UI‑компоненты
- `assets/` — изображения и статические ресурсы
- `styles/` — глобальные стили (`globals.css`)

---

## Как запустить проект

Ниже два варианта, в зависимости от того, есть ли уже файл `package.json` (готовая Vite‑сборка) или нужно быстро развернуть окружение.

### Вариант A — у вас уже есть package.json (Vite/React‑TS)
1) Установите зависимости:
```bash
npm install
# или
pnpm install
# или
yarn
```
2) Запустите dev‑сервер:
```bash
npm run dev
# или
pnpm dev
# или
yarn dev
```
3) Откройте адрес dev‑сервера (обычно `http://localhost:5173`).

4) Сборка production:
```bash
npm run build
# или
pnpm build
# или
yarn build
```
Предпросмотр собранной версии:
```bash
npm run preview
# или
pnpm preview
# или
yarn preview
```

### Вариант B — package.json отсутствует (быстрый старт с нуля на Vite)
1) Создайте Vite‑проект React+TS в новую папку (чтобы не перезаписать текущие файлы):
```bash
npm create vite@latest ingopout-vite -- --template react-ts
cd ingopout-vite
npm install
```
2) Перенесите файлы из текущего репозитория в свежесозданный Vite‑проект:
- Скопируйте папки `components/`, `imports/`, `assets/`, `styles/` в `src/` (или оставьте в корне и поправьте импорты — проще положить всё в `src/`).
- Переместите `App.tsx` в `src/App.tsx`, `main.tsx` в `src/main.tsx`.
- Скопируйте `index.css` в `src/index.css` и убедитесь, что он импортируется из `src/main.tsx`:
  ```ts
  import './index.css';
  import './styles/globals.css';
  ```
- Проверьте, что в `index.html` есть контейнер `<div id="root"></div>`.

3) Запустите dev‑сервер:
```bash
npm run dev
```
Дальше сборка/preview как в варианте A.

## Переменные окружения
Специальные `.env` переменные не требуются.

## Частые проблемы
- Пустой экран: убедитесь, что в `index.html` есть `#root`, а в `main.tsx` используется `createRoot(document.getElementById('root')!)`.
- Utility‑классы Tailwind «не работают»: важно импортировать оба файла стилей — `index.css` и `styles/globals.css` — в `main.tsx`.
- Пути к ассетам: если перенесли `assets` в `src`, импортируйте их как модули (`import img from './assets/...';`). Если используете папку `public`, обращайтесь по пути `/имя-файла.png`.

## Атрибуции/лицензии
Источники и лицензии для ассетов — в `Attributions.md`.

## Полезные ссылки
- Tailwind CSS v4 — `https://tailwindcss.com`
- React — `https://react.dev`

## Стиль разработки
- По возможности используйте компоненты из `components/ui/*`.
- Кастомные стили — через utility‑классы и `styles/globals.css`.

