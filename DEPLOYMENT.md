# Deployment Guide / Руководство по развертыванию

## Quick Start / Быстрый старт

### 1. Install Dependencies / Установка зависимостей
```bash
npm install --legacy-peer-deps
```

### 2. Build for Production / Сборка для продакшена
```bash
npm run build
```

The build output will be in the `dist/` directory.
Результат сборки будет в папке `dist/`.

### 3. Preview Locally / Локальный предпросмотр
```bash
npm run preview
```

## Deployment Options / Варианты развертывания

### Vercel
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy:
   ```bash
   vercel --prod
   ```

### Netlify
1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```
2. Deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/ingopout"
   }
   ```
2. Build and deploy:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

### Cloudflare Pages
1. Push to GitHub
2. Connect repository in Cloudflare Pages dashboard
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `18` or higher

### Static File Server
Simply upload the contents of `dist/` directory to any web server.
Просто загрузите содержимое папки `dist/` на любой веб-сервер.

## Environment / Окружение

- Node.js: 18+ (LTS recommended)
- npm: 9+ or use `--legacy-peer-deps` flag

## Performance Optimization / Оптимизация производительности

### Current Status / Текущий статус
- ✅ JavaScript bundle: 301.22 kB (83.69 kB gzipped)
- ✅ CSS bundle: 39.98 kB (9.67 kB gzipped)
- ⚠️ Images: Some large PNG files (up to 9.8 MB)

### Recommendations / Рекомендации
1. **Image Optimization / Оптимизация изображений:**
   - Consider converting large PNGs to WebP format
   - Use lazy loading for images below the fold
   - Implement responsive images with different sizes

2. **CDN / CDN:**
   - Serve static assets through a CDN for faster global delivery
   - Most hosting providers (Vercel, Netlify, Cloudflare) include CDN by default

3. **Caching / Кеширование:**
   - Build output includes content hashes in filenames for optimal caching
   - Configure appropriate cache headers on your server

## Troubleshooting / Решение проблем

### Build Errors / Ошибки сборки
If you encounter peer dependency errors, use:
При ошибках с зависимостями используйте:
```bash
npm install --legacy-peer-deps
```

### Port Already in Use / Порт занят
If port 5173 is in use, Vite will automatically try the next available port.
Если порт 5173 занят, Vite автоматически выберет следующий доступный.

### TypeScript Errors / Ошибки TypeScript
Run type check:
```bash
npx tsc --noEmit
```

## Post-Deployment Checklist / Чеклист после развертывания

- [ ] Test all navigation links
- [ ] Verify smooth scroll behavior works
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify all images load correctly
- [ ] Check page load performance (use Lighthouse)
- [ ] Verify SEO meta tags
- [ ] Test anchor links (#vozmozhnosti, #poleznosti, etc.)

## Support / Поддержка

For issues or questions, please refer to:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
