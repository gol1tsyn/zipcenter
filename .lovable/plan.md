

## Исправление эффекта прозрачности шапки в Chrome и Firefox

### Проблема
Свойство `backdropFilter` задаётся через `useTransform` из framer-motion, который возвращает `MotionValue<string>`. Safari умеет применять такие значения, а Chrome и Firefox -- нет. В итоге в этих браузерах `backdrop-filter` просто игнорируется и шапка остаётся полностью прозрачной.

### Решение
Отказаться от анимации `backdrop-filter` через MotionValue. Вместо этого:

1. **Применить `backdrop-filter` через обычный CSS-стиль** (статическая строка), что гарантирует работу во всех браузерах
2. **Сохранить динамическую осцилляцию blur** через `useMotionValueEvent` -- подписаться на изменения `blurValue` и обновлять inline-стиль элемента напрямую через `ref`
3. **Немного увеличить `backgroundColor`** с `rgba(255,255,255,0.06)` до `rgba(255,255,255,0.12)`, чтобы эффект стекла был заметнее на светлом фоне

### Технические детали

**Файл: `src/components/Header.tsx`**

- Добавить `useRef` для div-элемента с backdrop-filter
- Заменить `useTransform` для `backdropFilter` на `useMotionValueEvent`, который будет напрямую обновлять `style.backdropFilter` и `style.webkitBackdropFilter` на DOM-элементе через ref
- Убрать `motion.div` для glass-слоя -- заменить на обычный `div` с ref
- Установить начальное значение `backdrop-filter` как обычную CSS-строку

```text
// Было (не работает в Chrome/Firefox):
<motion.div style={{
  backdropFilter: useTransform(blurValue, (v) => `blur(${v}px) ...`),
}} />

// Станет (работает везде):
const glassRef = useRef<HTMLDivElement>(null);

useMotionValueEvent(blurValue, "change", (v) => {
  if (glassRef.current) {
    const filter = `blur(${v}px) saturate(200%) contrast(110%)`;
    glassRef.current.style.backdropFilter = filter;
    glassRef.current.style.webkitBackdropFilter = filter;
  }
});

<div ref={glassRef} style={{
  backdropFilter: 'blur(20px) saturate(200%) contrast(110%)',
  WebkitBackdropFilter: 'blur(20px) saturate(200%) contrast(110%)',
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
}} />
```

Это единственное изменение -- остальные слои шапки (displacement filter, specular highlights, noise texture, borders) остаются без изменений.

