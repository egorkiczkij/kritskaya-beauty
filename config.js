// Все тексты, цены и фото приложения. Меняйте только этот файл.
// Строки пишутся в кавычках. После правки сохраните файл и закоммитьте.

window.SITE = {
  // Шапка
  name: "Мария Крицкая",
  role: "Визажист · стилист по причёскам",
  city: "Омск",
  tagline: "Макияж и причёски для праздников и фотосессий",

  // Telegram жены без @. На этот аккаунт клиентки будут писать с кнопки «Записаться».
  telegram: "kkkritskaya",
  phone: "",                   // например "+7 900 000-00-00". Пусто: кнопки «Позвонить» нет
  instagram: "kritskaya.beauty", // ник без @, можно пустым. Появится кнопка «Написать в Direct»
  whatsapp: "",                // номер, например "+7 900 000-00-00", можно пустым
  address: "Студия в центре или выезд к вам",

  // Фото в круге наверху. Положите файл в папку photos.
  avatar: "photos/avatar.jpg",

  // Цифры под именем, например { value: "50+", label: "образов" }. Пусто: блок скрыт.
  stats: [],

  about:
    "Я начинающий визажист и стилист по причёскам. Делаю макияж и причёски " +
    "для праздников, фотосессий и выпускных. Подбираю образ под вас и под событие, " +
    "заранее обсуждаем референсы, чтобы результат совпал с ожиданиями.",

  // Как проходит запись
  steps: [
    "Пишете в Telegram или Direct: дата, время и какой образ нужен",
    "Обсуждаем референсы и детали, бронирую время",
    "В назначенный день создаём ваш образ"
  ],

  // Мелкий шрифт под услугами, например "Выезд по городу: +500 ₽". Пусто: блок скрыт.
  notes: [],

  // Разделы портфолио и услуг
  categories: [
    { id: "makeup", title: "Макияж" },
    { id: "hair", title: "Причёски" },
    { id: "look", title: "Полный образ" }
  ],

  // Портфолио. Файлы кладите в папку photos, имя пишите в src.
  // Новые работы добавляйте сверху списка: они показываются первыми.
  // Видео: { video: "photos/video-01.mp4", poster: "photos/video-01.jpg", badge: "до / после", ... }
  works: [
    { src: "photos/work-11.jpg", category: "makeup", title: "Голливудский макияж" },
    { src: "photos/work-12.jpg", category: "makeup", title: "Растушёванная стрелка" },
    { src: "photos/work-13.jpg", category: "makeup", title: "Растушёванная стрелка" },
    { src: "photos/work-10.jpg", category: "makeup", title: "Нюдовый макияж" },
    { src: "photos/work-07.jpg", category: "makeup", title: "Смоки" },
    { src: "photos/work-08.jpg", category: "makeup", title: "Смоки" },
    { src: "photos/work-09.jpg", category: "makeup", title: "Смоки, до и после" },
    { src: "photos/work-06.jpg", category: "makeup", title: "Лифтинг-макияж, до и после" },
    { video: "photos/video-01.mp4", poster: "photos/video-01.jpg", category: "makeup", title: "Смоки лифтинг-макияж", badge: "до / после" },
    { src: "photos/work-05.jpg", category: "hair", title: "Голливудская волна" },
    { src: "photos/work-04.jpg", category: "hair", title: "Объёмные локоны" },
    { src: "photos/work-03.jpg", category: "hair", title: "Серф-локоны" },
    { src: "photos/work-02.jpg", category: "hair", title: "Низкий текстурный пучок" },
    { src: "photos/work-01.jpg", category: "hair", title: "Высокий текстурный пучок" }
  ],

  // Услуги. category берётся из списка categories выше.
  services: [
    {
      category: "makeup",
      title: "Макияж",
      description: "Дневной или вечерний, под ваше событие и образ",
      duration: "около 1 ч",
      price: "2 500 ₽"
    },
    {
      category: "look",
      title: "Полный образ",
      description: "Макияж и причёска вместе",
      duration: "около 2 ч",
      price: "5 000 ₽"
    }
  ]
};
