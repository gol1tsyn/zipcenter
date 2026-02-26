

# Убираем stagger-анимации, добавляем эффект металлического блеска на карточки

## Что меняется

### 1. Убираем stagger-появление карточек
Карточки в секциях «Направления» и «Каталог» больше не будут «мигать» при появлении. Они будут просто отображаться статично, без анимации opacity/translate при входе в viewport.

### 2. Эффект металлического блеска по краям карточек
На каждой карточке появятся два тонких градиентных блика -- в **нижнем левом** и **верхнем правом** углу. Блики будут имитировать отражение света на краях металлической пластины. При **hover** блики будут усиливаться и слегка смещаться, создавая ощущение поворота «металла» к источнику света.

Визуально:
```text
+---------------------------[ блик ]--+
|                                     |
|          содержимое карточки         |
|                                     |
+--[ блик ]---------------------------+
```

Реализация -- два псевдоэлемента (`::before` и `::after`) на `.card-glow`:
- `::before` -- верхний правый угол: диагональный линейный градиент от полупрозрачного белого к прозрачному
- `::after` -- нижний левый угол: аналогичный градиент с другого направления
- При hover оба блика увеличивают opacity и слегка расширяются

---

## Технические детали

### Файлы для изменения

| Файл | Что меняется |
|---|---|
| `src/components/Directions.tsx` | Убираем `motion.div` stagger-обёртку, `DirectionCard` становится обычным `<a>` без `variants` анимации появления |
| `src/components/Catalog.tsx` | Убираем `StaggerGrid` компонент, `ProductCard` становится обычным `<div>` без `variants` анимации появления |
| `src/index.css` | Добавляем `::before` и `::after` на `.card-glow` для градиентных бликов с hover-усилением |

### CSS-эффект блеска (примерная реализация)

```css
.card-glow::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 120px;
  background: linear-gradient(225deg, rgba(255,255,255,0.15) 0%, transparent 60%);
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.5s, width 0.5s, height 0.5s;
}

.card-glow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 60%);
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.5s, width 0.5s, height 0.5s;
}

.card-glow:hover::before {
  opacity: 1;
  width: 160px;
  height: 160px;
}

.card-glow:hover::after {
  opacity: 1;
  width: 160px;
  height: 160px;
}
```

### Зависимости
Новых зависимостей не требуется. Framer Motion остаётся для других анимаций (параллакс Hero, whileTap кнопок), но stagger-появление карточек полностью убирается.
