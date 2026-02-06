

# План: Логотипы компаний вместо текста в шапке

## Что будет сделано

Заменить текст «VOLLMER · GÖCKEL · LOROCH» на три маленьких логотипа компаний в правом верхнем углу шапки.

## Текущее состояние

```text
┌─────────────────────────────────────────────────────────────┐
│  ЗИП-Центр    Оборудование  Запасные части  ...   [VOLLMER · GÖCKEL · LOROCH]  │
└─────────────────────────────────────────────────────────────┘
```

## После изменений

```text
┌─────────────────────────────────────────────────────────────┐
│  ЗИП-Центр    Оборудование  Запасные части  ...   [🔲] [🔲] [🔲]  │
└─────────────────────────────────────────────────────────────┘
                                                     ↑    ↑    ↑
                                               Vollmer Göckel Loroch
                                               (логотипы)
```

## Необходимые файлы

Загрузите 3 логотипа:
- Логотип Vollmer
- Логотип Göckel  
- Логотип Loroch

## Технические детали

### 1. Сохранение логотипов
Загруженные изображения будут сохранены в `src/assets/`:
- `vollmer-logo.png` (или .jpg/.svg)
- `gockel-logo.png`
- `loroch-logo.png`

### 2. Изменения в Header.tsx

**Добавить импорты:**
```tsx
import vollmerLogo from '@/assets/vollmer-logo.png';
import gockelLogo from '@/assets/gockel-logo.png';
import lorochLogo from '@/assets/loroch-logo.png';
```

**Заменить текстовый badge на контейнер с логотипами:**
```tsx
// Было:
<span className="badge-pill">VOLLMER · GÖCKEL · LOROCH</span>

// Станет:
<div className="flex items-center gap-4">
  <img src={vollmerLogo} alt="Vollmer" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
  <img src={gockelLogo} alt="Göckel" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
  <img src={lorochLogo} alt="Loroch" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
</div>
```

### 3. Стилизация логотипов
- Высота: `h-6` (24px) — маленький размер
- Ширина: автоматическая для сохранения пространства
- Приглушённая непрозрачность по умолчанию (`opacity-60`)
- Полная непрозрачность при наведении (`hover:opacity-100`)
- Плавный переход (`transition-opacity`)

### 4. Обновление для мобильной версии
Аналогичные изменения в мобильном меню (строка 74)

