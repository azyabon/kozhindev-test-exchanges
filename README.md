### Информация:
Затраченное время:

### Cсылка на задеплоиный [проект](http://google.com) .

### Запуск:

Установите зависимости: `npm install`\
Запустите локально: `npm start`\

Откройте [ app ](http://localhost:3000) в своем браузере.

### Структура проекта:

`/src`:
* `/components` **набор компонентов для приложения**
    * `/ui` **глупые компоненты (shared)**
    * `/icons` **svg icons**
    * `/containers` **компоненты которые подключены к stores которые передают состояния в компоненты ui**
    * `/pages` **композиция контента страниц**
    * `/app` **инициализация приложения, stores и дополнительных модулей**
* `/libs` **модули и библиотеки для работы с разными кейсами.**
    * `/axios` - например.
    * ... прочие модули для работы приложения.
* `/config` - **конфиги для приложения.**
    * aoi.ts
    * urls.ts.
    * ... прочие конфиги для приложения.
* `/hooks`  **свои хуки**
* `/stores` **для работы с redux**
* `/assets` **статические файлы. стили, картинки**


