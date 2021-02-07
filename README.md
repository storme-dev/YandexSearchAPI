# YandexSearchAPI

API для получения результатов поиска по указанному запросу

### Установка

* Скачиваем файл search.js из репозитория
* Размещаем файл в папке вашего проекта
* Устанавливаем пакеты puppeteer и cheerio
```js
npm install puppeteer
npm install cheerio
```
* Подключаем модуль
```js
const YandexSearch = require('./search')
```

### Использование

#### Обычный поиск

На примере ниже мы выполняем поиск по запросу 'котики'

```js
YandexSearch('котики').then(results => {
    console.log(results)
})
```

Результат:
```js
[
    {
        title: 'Смешные и просто красивые фотографии кошек (136 фото)',
        url: 'https://fishki.net/33751-smeshnye-i-prosto-krasivye-fotografii-koshek-136-foto.html',
        description: 'Экс-супруга Аршавина впервые показала, что стало с ее носом (5 фото) Подборка сидящих котов (22 фото) Сверх толстые коты (48 Фото) Котики, замотанные в полотенце (20 Фото) Смешные коты-домохозяйки (12 Фото) Котоматрица'
    },
    ...
]
```

#### Поиск по картинкам

На примере ниже мы выполняем поиск картинок по запросу 'котики'

```js
YandexSearch('котики', 'images').then(results => {
    console.log(results)
})
```

Результат:
```js
[
    'http://im0-tub-by.yandex.net/i?id=3eb42ac56ce190c393f766f0b0a1f51c&n=13',
    'http://im0-tub-by.yandex.net/i?id=bd8daeb01494132937049abc573b73fc&n=13',
    ...
]
```
