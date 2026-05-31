// ========== ДАННЫЕ ДЛЯ ГЛАВНОЙ СТРАНИЦЫ ==========
const popularBouquets = [
    { id: 1, name: "Букет с голубой гортензией", nameEn: "Blue Hydrangea Bouquet", price: 2450, img: "img/popular_1.png", hit: true },
    { id: 2, name: "Букет из 51 розы", nameEn: "51 Roses Bouquet", price: 3450, img: "img/popular_2.png", hit: false },
    { id: 3, name: "Букет из хризантем", nameEn: "Chrysanthemum Bouquet", price: 2345, img: "img/popular_3.png", hit: false }
];

const florists = [
    { name: "Мария", nameEn: "Maria", quote: "«В радости или печали цветы — наши постоянные друзья».", quoteEn: "“In joy or sorrow, flowers are our constant friends.”", img: "img/floristic_1.png" },
    { name: "Евгения", nameEn: "Evgenia", quote: "«Цветы поют. Они всегда поют».", quoteEn: "“Flowers sing. They always sing.”", img: "img/floristic_2.png" },
    { name: "Оксана", nameEn: "Oksana", quote: "«Цветы — остатки рая на Земле».", quoteEn: "“Flowers are the remnants of heaven on Earth.”", img: "img/floristic_3.png" },
    { name: "Екатерина", nameEn: "Ekaterina", quote: "«Цветы — моя жизнь».", quoteEn: "“Flowers are my life.”", img: "img/floristic_4.png" }
];

const reviewsData = [
    { name: "Мария", nameEn: "Maria", date: "14 марта 2025", dateEn: "March 14, 2025", stars: 5, text: "Благодарю за букет и доставку, находимся очень далеко, заказала букет на юбилей, очень понравилось. Положили открытку с пожеланиями и мини подарок, доставлено быстро, спасибо большое FlowerLove за ответственность!", textEn: "Thank you for the bouquet and delivery, we are very far away, I ordered a bouquet for the anniversary, I really liked it. They put a card with wishes and a mini gift, delivered quickly, thank you very much FlowerLove for your responsibility!", avatar: "img/otziv_1.webp" },
    { name: "Анна", nameEn: "Anna", date: "5 апреля 2025", dateEn: "April 5, 2025", stars: 5, text: "Цветы свежайшие, аромат невероятный! Доставили точно в срок, флористы учли все пожелания. Обязательно закажу еще для мамы на день рождения!", textEn: "The flowers are extremely fresh, the aroma is incredible! Delivered exactly on time, the florists took into account all the wishes. I will definitely order more for my mom's birthday!", avatar: "img/otziv_3.jpg" },
    { name: "Дмитрий", nameEn: "Dmitry", date: "20 марта 2025", dateEn: "March 20, 2025", stars: 4, text: "Отличный сервис, букет как на фото. Единственное — доставка на 15 минут позже, но цветы прекрасные. Спасибо флористам за красоту!", textEn: "Great service, the bouquet is as in the photo. The only thing is delivery 15 minutes later, but the flowers are beautiful. Thanks to the florists for the beauty!", avatar: "img/otziv_2.avif" },
    { name: "Елена", nameEn: "Elena", date: "1 мая 2025", dateEn: "May 1, 2025", stars: 5, text: "Очень трепетное отношение к клиентам! Фото перед отправкой – супер идея, я была спокойна за подарок. Спасибо FlowerLove за такой профессиональный подход!", textEn: "Very caring attitude towards customers! Photo before sending is a super idea, I was calm about the gift. Thank you FlowerLove for such a professional approach!", avatar: "img/otziv_4.jpg" },
    { name: "Ольга", nameEn: "Olga", date: "10 апреля 2025", dateEn: "April 10, 2025", stars: 5, text: "От всего сердца хочу поблагодарить всю команду за отзывчивость, дружелюбие, готовность помочь, быструю организацию! Отдельное спасибо менеджеру Георгию!", textEn: "From the bottom of my heart I want to thank the whole team for their responsiveness, friendliness, willingness to help, quick organization! Special thanks to manager Georgy!", avatar: "img/otziv_5.webp" }
];

// ========== ПОЛНЫЙ СЛОВАРЬ ПЕРЕВОДОВ ==========
const translations = {
    ru: {
        // Навигация
        nav_home: "ГЛАВНАЯ",
        nav_about: "О НАС",
        nav_catalog: "КАТАЛОГ",
        nav_order: "КАК СДЕЛАТЬ ЗАКАЗ",
        nav_contacts: "КОНТАКТЫ",
        nav_pickup: "Самовывоз:",
        nav_24h: "Круглосуточно",
        nav_cart: "КОРЗИНА",
        
        // Герой
        hero_title: "СОБИРАЕМ БУКЕТЫ<br>С ЛЮБОВЬЮ",
        hero_discount: "Сезонная скидка 20%",
        hero_btn: "ВЫБРАТЬ БУКЕТ",
        
        // Популярные букеты
        popular_title: "ПОПУЛЯРНЫЕ БУКЕТЫ",
        popular_hit: "ХИТ",
        popular_btn: "В корзину",
        popular_view_all: "СМОТРЕТЬ ВСЕ",
        
        // Флористы
        florists_title: "НАШИ ФЛОРИСТЫ",
        florists_subtitle: "НАША КОМАНДА ПРОФЕССИОНАЛОВ",
        
        // Преимущества
        advantages_title: "ПОЧЕМУ ВЫБИРАЮТ НАС",
        adv_free_delivery: "Бесплатная доставка",
        adv_free_delivery_desc: "При заказе от 3000 ₽ по городу",
        adv_fresh: "Только свежие цветы",
        adv_fresh_desc: "Срезаем под заказ, гарантия 7 дней",
        adv_gift: "Подарок к букету",
        adv_gift_desc: "Открытка + мини-презент каждому",
        adv_photo: "Фото перед отправкой",
        adv_photo_desc: "Подтверждаем качество в мессенджере",
        adv_247: "Доставка 24/7",
        adv_247_desc: "Круглосуточно, без выходных",
        adv_love: "Любовь к клиентам",
        adv_love_desc: "Более 5000 счастливых получателей",
        
        // Промо
        promo_label: "Ограниченное предложение",
        promo_title: "Сезонная распродажа",
        promo_desc: "Скидка 20% на все букеты + бесплатная открытка и мини-подарок",
        promo_btn: "Выбрать букет со скидкой",
        promo_days: "дней",
        promo_hours: "часов",
        promo_minutes: "минут",
        promo_seconds: "секунд",
        
        // Отзывы
        reviews_title: "САМЫЕ ПОПУЛЯРНЫЕ ОТЗЫВЫ",
        
        // Подписка
        subscribe_title: "ПОДПИШИТЕСЬ НА ПОЛЕЗНЫЕ СТАТЬИ",
        subscribe_desc: "Подпишитесь, чтобы получать новости и интересные статьи о цветах!",
        subscribe_placeholder: "Ваш Email",
        subscribe_btn: "ПОДПИСАТЬСЯ",
        subscribe_success: "Спасибо! Вы подписаны.",
        
        // Страница О НАС
        about_hero_title: "МЫ ЛУЧШАЯ СЕТЬ<br>УЗНАЙТЕ БОЛЬШЕ О НАС",
        about_title: "О НАС",
        about_text: "Мы являемся сетью магазинов по продаже цветов. У нас огромное количество партнеров. Мы работаем в области флористики не первый год. За это время мы получили сотни положительных отзывов о наших цветах. Мы продаем оригинальные букеты, которые никого не оставят равнодушными. Мы очень ценим свою репутацию, поэтому предлагаем только свежие цветы.",
        about_footer: "У нас работают самые опытные и вежливые флористы, которые помогут выбрать нужный букет под любое событие. Мы уверенно можем сказать, что мы — лучшие в своем деле. Наши постоянные клиенты советуют нас родным и друзьям. И это важное достижение, доказывающее, что мы двигаемся в правильном направлении.",
        
        // Особенности (галочки)
        feature_24h: "Круглосуточная доставка",
        feature_quality: "Высокое качество каждого цветка",
        feature_author: "Авторские букеты",
        feature_budget: "Букеты на любой бюджет",
        feature_gift: "Бесплатные подарки к каждому заказу",
        feature_guarantee: "100% гарантия на букет",
        
        // Достижения
        stats_title: "НАШИ ДОСТИЖЕНИЯ",
        stats_clients: "счастливых клиентов",
        stats_years: "лет на рынке",
        stats_bouquets: "букетов в месяц",
        stats_freshness: "процентов свежести",
        
        // Галерея
        gallery_title: "ЗАГЛЯНИТЕ В НАШ МИР",
        gallery_subtitle: "Как создаются наши букеты",
        gallery_fresh: "Свежие поставки",
        gallery_work: "Работа флориста",
        gallery_assembly: "Ручная сборка",
        gallery_delivery: "Бережная доставка",
        
        // Каталог
        catalog_hero_title: "КАТАЛОГ ЦВЕТОВ",
        catalog_search: "Поиск по названию...",
        catalog_sort: "Сортировка:",
        sort_default: "По умолчанию",
        sort_price_asc: "Цена: по возрастанию",
        sort_price_desc: "Цена: по убыванию",
        sort_popular: "Популярные",
        sort_new: "Новинки",
        sort_discount: "По размеру скидки",
        catalog_filter: "Фильтр:",
        filter_all: "Все букеты",
        filter_hit: "Только хиты",
        filter_sale: "Только акции",
        filter_recommend: "Советуем",
        filter_new: "Новинки",
        catalog_reset: "Сбросить фильтры",
        catalog_no_results: "Ничего не найдено. Попробуйте другой запрос.",
        badge_hit: "ХИТ",
        badge_sale: "АКЦИЯ",
        badge_recommend: "СОВЕТУЕМ",
        badge_new: "НОВИНКА",
        savings: "Экономия",
        
        // Как сделать заказ
        order_hero_title: "КАК СДЕЛАТЬ<br>ЗАКАЗ?",
        order_subtitle: "6 простых шагов — и цветы у ваших близких",
        step1_title: "Выберите букет",
        step1_desc: "Просмотрите наш каталог и выберите цветочную композицию, которая лучше всего подходит для вашего события. У нас более 100 вариантов на любой вкус и бюджет.",
        step2_title: "Добавьте в корзину",
        step2_desc: "Нажмите кнопку «В корзину». Здесь вы можете активировать промокод, изменить количество букетов или добавить дополнительные подарки к заказу.",
        step3_title: "Оформите заказ",
        step3_desc: "Проверьте состав заказа, заполните форму доставки, укажите удобное время и дату получения. Все данные защищены и не передаются третьим лицам.",
        step4_title: "Согласование",
        step4_desc: "Наш менеджер свяжется с вами в течение 15 минут для подтверждения деталей и вышлет фото готового букета перед отправкой.",
        step5_title: "Оплата",
        step5_desc: "Оплатите заказ любым удобным способом: картой онлайн, наличными курьеру, переводом по ссылке или частями через сервис Яндекс.Сплит.",
        step6_title: "Доставка",
        step6_desc: "Флористы соберут свежайшую композицию, пришлют финальное фото, и курьер отправится к вам. Доставка круглосуточно, даже в праздники.",
        
        // Преимущества заказа
        order_advantages_title: "ПОЧЕМУ КЛИЕНТЫ ВЫБИРАЮТ НАС",
        order_adv_photo: "Фото перед отправкой",
        order_adv_photo_desc: "Мы всегда присылаем фото готового букета для подтверждения. Вы видите то, что получите.",
        order_adv_fast: "Доставка за 2 часа",
        order_adv_fast_desc: "Экспресс-доставка по городу всего за 2 часа. Срочные заказы — наша специализация.",
        order_adv_author: "Авторские букеты",
        order_adv_author_desc: "Каждая композиция создается вручную опытными флористами. Вы не найдете одинаковых букетов.",
        order_adv_gift: "Бесплатный подарок",
        order_adv_gift_desc: "К каждому заказу — открытка ручной работы и шоколадный презент от FlowerLove.",
        
        // Гарантия
        guarantee_title: "100% ГАРАНТИЯ КАЧЕСТВА",
        guarantee_desc: "Если цветы потеряют свежесть в течение 7 дней — мы заменим букет бесплатно или вернём деньги. Наша репутация — главная ценность.",
        guarantee_clients: "счастливых клиентов",
        guarantee_rating: "средний рейтинг",
        guarantee_return: "Возврат до 30 дней",
        
        // FAQ
        faq_title: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
        faq1_q: "Как узнать, свежие ли цветы?",
        faq1_a: "Мы работаем только с проверенными поставщиками. Цветы срезаются за 1-2 дня до отправки. Каждый букет сопровождается фото-подтверждением перед отправкой.",
        faq2_q: "Можно ли изменить заказ после оформления?",
        faq2_a: "Да, за 3 часа до доставки вы можете изменить состав букета, адрес или время. Просто свяжитесь с менеджером по телефону.",
        faq3_q: "Какие способы оплаты доступны?",
        faq3_a: "Мы принимаем оплату картами Visa/Mastercard/МИР, наличными курьеру, переводом по ссылке, а также доступна оплата частями от Яндекс.Сплит.",
        faq4_q: "Есть ли доставка в выходные и праздники?",
        faq4_a: "Да, мы работаем круглосуточно 7 дней в неделю, включая все праздники. Доставка в любое удобное для вас время.",
        
        // CTA
        cta_title: "ГОТОВЫ СДЕЛАТЬ ЗАКАЗ?",
        cta_desc: "Выберите букет из нашего каталога — доставим в день заказа",
        cta_btn: "ПЕРЕЙТИ В КАТАЛОГ",
        
        // Корзина
        cart_hero_title: "КОРЗИНА",
        cart_items: "Товары в корзине",
        cart_promo: "Промокод",
        cart_promo_placeholder: "Введите промокод",
        cart_apply: "Применить",
        cart_available: "Доступные промокоды:",
        cart_your_order: "Ваш заказ",
        cart_complectation: "Комплектование:",
        cart_cost: "Стоимость:",
        cart_discount: "Скидка:",
        cart_delivery: "Доставка:",
        cart_free: "Бесплатно",
        cart_total: "Итого:",
        cart_form_title: "Форма заявки",
        cart_name: "Ваше имя *",
        cart_phone: "Номер телефона *",
        cart_email: "Email *",
        cart_city: "Город доставки *",
        cart_address: "Адрес доставки *",
        cart_date: "Дата доставки *",
        cart_time: "Время доставки",
        cart_comment: "Комментарий к заказу",
        cart_payment: "Способ оплаты *",
        cart_payment_card: "Банковской картой",
        cart_payment_cash: "Наличными курьеру",
        cart_payment_online: "Онлайн перевод",
        cart_agree: "Я согласен с условиями обработки персональных данных",
        cart_submit: "Оформить заказ",
        cart_empty: "Корзина пуста",
        cart_empty_desc: "Добавьте цветы в корзину из нашего каталога",
        cart_empty_btn: "Перейти в каталог",
        
        // Банер корзины (хлебные крошки)
        breadcrumb_home: "ГЛАВНАЯ",
        breadcrumb_about: "О НАС",
        breadcrumb_catalog: "КАТАЛОГ",
        breadcrumb_order: "КАК СДЕЛАТЬ ЗАКАЗ?",
        breadcrumb_cart: "КОРЗИНА",
        
        // Уведомления
        notification_added: "добавлен в корзину!",
        promo_success: "✅ Промокод активирован! Скидка",
        promo_error: "❌ Неверный промокод",
        order_success: "Заказ оформлен!",
        
        // Подвал
        footer_delivery: "Свежие цветы доставляются бесплатно до двери с подарком от компании «FlowerLove» каждому покупателю.",
        footer_menu: "МЕНЮ",
        footer_contacts: "КОНТАКТЫ",
        footer_hours: "РЕЖИМ РАБОТЫ",
        footer_policy: "политика конфиденциальности",
        footer_rights: "Все права защищены.",
        
        // Адреса
        address1: "ул. Куликова, 42",
        address2: "ул. Бориса Алексеева, 51",
        address3: "ул. Боевая, 68",
        address4: "ул. Адмиралтейская, 12",
        
        // Контакты в подвале
        contact_phone: "8 (960) 899-20-32",
        contact_email: "flowerlove@gmail.com"
    },
    en: {
        // Navigation
        nav_home: "HOME",
        nav_about: "ABOUT US",
        nav_catalog: "CATALOG",
        nav_order: "HOW TO ORDER",
        nav_contacts: "CONTACTS",
        nav_pickup: "Pickup:",
        nav_24h: "24/7",
        nav_cart: "CART",
        
        // Hero
        hero_title: "WE MAKE BOUQUETS<br>WITH LOVE",
        hero_discount: "Seasonal 20% discount",
        hero_btn: "CHOOSE BOUQUET",
        
        // Popular bouquets
        popular_title: "POPULAR BOUQUETS",
        popular_hit: "HIT",
        popular_btn: "Add to cart",
        popular_view_all: "VIEW ALL",
        
        // Florists
        florists_title: "OUR FLORISTS",
        florists_subtitle: "OUR PROFESSIONAL TEAM",
        
        // Advantages
        advantages_title: "WHY CHOOSE US",
        adv_free_delivery: "Free Delivery",
        adv_free_delivery_desc: "On orders over 3000 ₽ in the city",
        adv_fresh: "Only Fresh Flowers",
        adv_fresh_desc: "Cut to order, 7 days guarantee",
        adv_gift: "Gift with Bouquet",
        adv_gift_desc: "Card + mini present for everyone",
        adv_photo: "Photo before sending",
        adv_photo_desc: "We confirm quality in messenger",
        adv_247: "24/7 Delivery",
        adv_247_desc: "Around the clock, seven days a week",
        adv_love: "Love for Customers",
        adv_love_desc: "Over 5000 happy recipients",
        
        // Promo
        promo_label: "Limited offer",
        promo_title: "Seasonal Sale",
        promo_desc: "20% discount on all bouquets + free card and mini gift",
        promo_btn: "Choose a bouquet with discount",
        promo_days: "days",
        promo_hours: "hours",
        promo_minutes: "minutes",
        promo_seconds: "seconds",
        
        // Reviews
        reviews_title: "MOST POPULAR REVIEWS",
        
        // Subscribe
        subscribe_title: "SUBSCRIBE TO USEFUL ARTICLES",
        subscribe_desc: "Subscribe to receive news and interesting articles about flowers!",
        subscribe_placeholder: "Your Email",
        subscribe_btn: "SUBSCRIBE",
        subscribe_success: "Thank you! You are subscribed.",
        
        // About page
        about_hero_title: "WE ARE THE BEST NETWORK<br>LEARN MORE ABOUT US",
        about_title: "ABOUT US",
        about_text: "We are a chain of flower shops. We have a huge number of partners. We have been working in the field of floristry for many years. During this time, we have received hundreds of positive reviews about our flowers. We sell original bouquets that will leave no one indifferent. We value our reputation very much, so we offer only fresh flowers.",
        about_footer: "We employ the most experienced and polite florists who will help you choose the right bouquet for any occasion. We can confidently say that we are the best in our field. Our regular customers recommend us to their relatives and friends. And this is an important achievement proving that we are moving in the right direction.",
        
        // Features (checkmarks)
        feature_24h: "24/7 delivery",
        feature_quality: "High quality of each flower",
        feature_author: "Author's bouquets",
        feature_budget: "Bouquets for any budget",
        feature_gift: "Free gifts with every order",
        feature_guarantee: "100% guarantee on the bouquet",
        
        // Stats
        stats_title: "OUR ACHIEVEMENTS",
        stats_clients: "happy clients",
        stats_years: "years on the market",
        stats_bouquets: "bouquets per month",
        stats_freshness: "percent freshness",
        
        // Gallery
        gallery_title: "LOOK INTO OUR WORLD",
        gallery_subtitle: "How our bouquets are created",
        gallery_fresh: "Fresh supplies",
        gallery_work: "Florist's work",
        gallery_assembly: "Hand assembly",
        gallery_delivery: "Careful delivery",
        
        // Catalog
        catalog_hero_title: "FLOWER CATALOG",
        catalog_search: "Search by name...",
        catalog_sort: "Sort:",
        sort_default: "Default",
        sort_price_asc: "Price: low to high",
        sort_price_desc: "Price: high to low",
        sort_popular: "Popular",
        sort_new: "New",
        sort_discount: "By discount size",
        catalog_filter: "Filter:",
        filter_all: "All bouquets",
        filter_hit: "Only hits",
        filter_sale: "Only sale",
        filter_recommend: "Recommended",
        filter_new: "New",
        catalog_reset: "Reset filters",
        catalog_no_results: "Nothing found. Try another search term.",
        badge_hit: "HIT",
        badge_sale: "SALE",
        badge_recommend: "RECOMMENDED",
        badge_new: "NEW",
        savings: "Save",
        
        // How to order
        order_hero_title: "HOW TO<br>ORDER?",
        order_subtitle: "6 simple steps — and flowers for your loved ones",
        step1_title: "Choose a bouquet",
        step1_desc: "Browse our catalog and choose the floral composition that best suits your event. We have over 100 options for every taste and budget.",
        step2_title: "Add to cart",
        step2_desc: "Click the 'Add to cart' button. Here you can activate a promo code, change the number of bouquets or add additional gifts to your order.",
        step3_title: "Place your order",
        step3_desc: "Check the order composition, fill out the delivery form, specify a convenient time and date of receipt. All data is protected and not transferred to third parties.",
        step4_title: "Approval",
        step4_desc: "Our manager will contact you within 15 minutes to confirm the details and send a photo of the finished bouquet before sending.",
        step5_title: "Payment",
        step5_desc: "Pay for your order in any convenient way: online card, cash to courier, transfer by link or in installments via Yandex.Split.",
        step6_title: "Delivery",
        step6_desc: "Florists will assemble the freshest composition, send the final photo, and the courier will go to you. Delivery 24/7, even on holidays.",
        
        // Order advantages
        order_advantages_title: "WHY CUSTOMERS CHOOSE US",
        order_adv_photo: "Photo before sending",
        order_adv_photo_desc: "We always send a photo of the finished bouquet for confirmation. You see what you get.",
        order_adv_fast: "Delivery in 2 hours",
        order_adv_fast_desc: "Express delivery around the city in just 2 hours. Urgent orders are our specialty.",
        order_adv_author: "Author's bouquets",
        order_adv_author_desc: "Each composition is created by hand by experienced florists. You won't find identical bouquets.",
        order_adv_gift: "Free gift",
        order_adv_gift_desc: "With every order - a handmade card and a chocolate present from FlowerLove.",
        
        // Guarantee
        guarantee_title: "100% QUALITY GUARANTEE",
        guarantee_desc: "If the flowers lose freshness within 7 days, we will replace the bouquet for free or refund your money. Our reputation is our main value.",
        guarantee_clients: "happy clients",
        guarantee_rating: "average rating",
        guarantee_return: "Refund up to 30 days",
        
        // FAQ
        faq_title: "FREQUENTLY ASKED QUESTIONS",
        faq1_q: "How to know if flowers are fresh?",
        faq1_a: "We work only with trusted suppliers. Flowers are cut 1-2 days before shipping. Each bouquet is accompanied by photo confirmation before shipping.",
        faq2_q: "Can I change my order after placing it?",
        faq2_a: "Yes, 3 hours before delivery you can change the composition of the bouquet, address or time. Just contact the manager by phone.",
        faq3_q: "What payment methods are available?",
        faq3_a: "We accept payment by Visa/Mastercard/MIR cards, cash to courier, transfer by link, and payment in installments via Yandex.Split is also available.",
        faq4_q: "Is delivery available on weekends and holidays?",
        faq4_a: "Yes, we work 24/7, including all holidays. Delivery at any time convenient for you.",
        
        // CTA
        cta_title: "READY TO ORDER?",
        cta_desc: "Choose a bouquet from our catalog — we'll deliver on the day of order",
        cta_btn: "GO TO CATALOG",
        
        // Cart
        cart_hero_title: "CART",
        cart_items: "Items in cart",
        cart_promo: "Promo code",
        cart_promo_placeholder: "Enter promo code",
        cart_apply: "Apply",
        cart_available: "Available promo codes:",
        cart_your_order: "Your order",
        cart_complectation: "Complectation:",
        cart_cost: "Cost:",
        cart_discount: "Discount:",
        cart_delivery: "Delivery:",
        cart_free: "Free",
        cart_total: "Total:",
        cart_form_title: "Order form",
        cart_name: "Your name *",
        cart_phone: "Phone number *",
        cart_email: "Email *",
        cart_city: "Delivery city *",
        cart_address: "Delivery address *",
        cart_date: "Delivery date *",
        cart_time: "Delivery time",
        cart_comment: "Order comment",
        cart_payment: "Payment method *",
        cart_payment_card: "Bank card",
        cart_payment_cash: "Cash to courier",
        cart_payment_online: "Online transfer",
        cart_agree: "I agree to the terms of personal data processing",
        cart_submit: "Place order",
        cart_empty: "Cart is empty",
        cart_empty_desc: "Add flowers to your cart from our catalog",
        cart_empty_btn: "Go to catalog",
        
        // Breadcrumbs
        breadcrumb_home: "HOME",
        breadcrumb_about: "ABOUT US",
        breadcrumb_catalog: "CATALOG",
        breadcrumb_order: "HOW TO ORDER?",
        breadcrumb_cart: "CART",
        
        // Notifications
        notification_added: "added to cart!",
        promo_success: "✅ Promo code activated! Discount",
        promo_error: "❌ Invalid promo code",
        order_success: "Order placed!",
        
        // Footer
        footer_delivery: "Fresh flowers are delivered free to your door with a gift from FlowerLove to every customer.",
        footer_menu: "MENU",
        footer_contacts: "CONTACTS",
        footer_hours: "WORKING HOURS",
        footer_policy: "privacy policy",
        footer_rights: "All rights reserved.",
        
        // Addresses
        address1: "Kulikova St., 42",
        address2: "Boris Alekseev St., 51",
        address3: "Boevaya St., 68",
        address4: "Admiralteyskaya St., 12",
        
        // Contacts in footer
        contact_phone: "8 (960) 899-20-32",
        contact_email: "flowerlove@gmail.com"
    }
};

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentLang = 'ru';
let cart = JSON.parse(sessionStorage.getItem('flowerCartSession')) || [];
let sliderInterval = null;
let sliderCurrentPos = 0;
let sliderTotal = 0;
let sliderContainerRef = null;
let catalogProducts = [];
let currentSearchTerm = '';
let currentSort = 'default';
let currentFilter = 'all';
let activePromo = null;
let promoDiscount = 0;

const promoCodes = {
    'FLOWER10': 10,
    'LOVE20': 20,
    'WELCOME15': 15
};

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function updateText(element, newText) {
    if (element && element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA' && element.tagName !== 'SELECT') {
        element.textContent = newText;
    }
}

function updateTextBySelector(selector, newText, attribute = null) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        if (attribute === 'placeholder') {
            el.placeholder = newText;
        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (attribute === 'value') {
                el.value = newText;
            } else {
                // Не меняем value для полей ввода, только placeholder
                if (attribute !== 'skip') el.placeholder = newText;
            }
        } else {
            el.textContent = newText;
        }
    });
}

// ========== ТАЙМЕР ==========
function initCountdown() {
    const targetDate = new Date(2025, 11, 31, 23, 59, 59);
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        const t = translations[currentLang];
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (diff <= 0) {
            if (daysEl) daysEl.innerText = '00';
            if (hoursEl) hoursEl.innerText = '00';
            if (minutesEl) minutesEl.innerText = '00';
            if (secondsEl) secondsEl.innerText = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.innerText = seconds.toString().padStart(2, '0');
        
        // Обновляем подписи таймера при смене языка
        const timerLabels = document.querySelectorAll('.countdown-item span:last-child');
        if (timerLabels.length >= 4 && timerLabels[0].textContent !== t.promo_days) {
            updateText(timerLabels[0], t.promo_days);
            updateText(timerLabels[1], t.promo_hours);
            updateText(timerLabels[2], t.promo_minutes);
            updateText(timerLabels[3], t.promo_seconds);
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ========== ПЕЧАТНАЯ МАШИНКА (ИСПРАВЛЕННАЯ) ==========
let currentTypewriterInterval = null;

function typewriterEffect(element, text, speed = 100) {
    if (!element) return;
    
    // Останавливаем предыдущую анимацию
    if (currentTypewriterInterval) {
        clearInterval(currentTypewriterInterval);
        currentTypewriterInterval = null;
    }
    
    let i = 0;
    element.innerHTML = '';
    element.style.opacity = '1';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            currentTypewriterInterval = setTimeout(type, speed);
        } else {
            currentTypewriterInterval = null;
        }
    }
    type();
}

// ========== КОРЗИНА ==========
function updateCartCounter() {
    let total = cart.reduce((sum, i) => sum + (i.quantity || 1), 0);
    let span = document.getElementById('cartCount');
    if (span) span.innerText = total;
    sessionStorage.setItem('flowerCartSession', JSON.stringify(cart));
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #DF96A2;
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: 'Alice', serif;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

function addToCart(product) {
    let existing = cart.find(i => i.id == product.id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCounter();
    const t = translations[currentLang];
    showNotification(`${product.name} ${t.notification_added}`);
    renderCartPage();
}

function applyPromo(code) {
    const t = translations[currentLang];
    const upperCode = code.toUpperCase();
    if (promoCodes[upperCode]) {
        activePromo = upperCode;
        promoDiscount = promoCodes[upperCode];
        const msgEl = document.getElementById('promoMessage');
        if (msgEl) msgEl.innerHTML = `<span style="color: #32cd32;">${t.promo_success} ${promoDiscount}%</span>`;
        return true;
    } else {
        const msgEl = document.getElementById('promoMessage');
        if (msgEl) msgEl.innerHTML = `<span style="color: #ff4757;">${t.promo_error}</span>`;
        return false;
    }
}

function validateForm() {
    let isValid = true;
    
    const name = document.getElementById('userName');
    const phone = document.getElementById('userPhone');
    const email = document.getElementById('userEmail');
    const city = document.getElementById('userCity');
    const address = document.getElementById('userAddress');
    const agree = document.getElementById('agreeTerms');
    
    if (!name.value.trim()) {
        document.getElementById('nameError').innerText = 'Введите имя';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }
    
    const phoneRegex = /^[\+\d\s\(\)-]{10,}$/;
    if (!phone.value.trim() || !phoneRegex.test(phone.value)) {
        document.getElementById('phoneError').innerText = 'Введите корректный номер телефона';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = '';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        document.getElementById('emailError').innerText = 'Введите корректный email';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }
    
    if (!city.value) {
        document.getElementById('cityError').innerText = 'Выберите город';
        isValid = false;
    } else {
        document.getElementById('cityError').innerText = '';
    }
    
    if (!address.value.trim()) {
        document.getElementById('addressError').innerText = 'Введите адрес доставки';
        isValid = false;
    } else {
        document.getElementById('addressError').innerText = '';
    }
    
    if (!agree.checked) {
        alert('Подтвердите согласие на обработку данных');
        isValid = false;
    }
    
    return isValid;
}

// ========== КАТАЛОГ ==========
function generateCatalog() {
    const bouquetNames = [
        "Букет роз", "Букет из 7 роз", "Букет синих диантусов", "Букет пионов",
        "Букет хризантем", "Букет тюльпанов", "Букет орхидей", "Букет гортензий",
        "Букет эустомы", "Букет гербер", "Букет лилий", "Букет фрезий",
        "Букет сухоцветов", "Букет полевых цветов", "Букет альстромерий", "Букет ранункулюсов",
        "Букет гипсофилы", "Букет ирисов", "Букет гвоздик", "Букет калл",
        "Букет протеи", "Букет анемонов", "Букет нарциссов", "Букет крокусов",
        "Букет подсолнухов", "Букет лаванды", "Букет эхинацеи", "Букет астр",
        "Букет георгин", "Букет гладиолусов", "Букет гиацинтов", "Букет ландышей",
        "Букет сирени", "Букет черемухи", "Букет жасмина", "Букет камелий"
    ];
    
    const catalogImages = [
        "img/catalog_1.png", "img/catalog_2.png", "img/catalog_3.png", "img/catalog_4.png",
        "img/catalog_5.png", "img/catalog_6.png", "img/catalog_7.png", "img/catalog_8.png",
        "img/catalog_9.png", "img/catalog_10.png", "img/catalog_11.png", "img/catalog_12.png",
        "img/catalog_13.png", "img/catalog_14.png", "img/catalog_15.png", "img/catalog_16.png",
        "img/catalog_17.png", "img/catalog_18.png", "img/catalog_19.png", "img/catalog_20.png",
        "img/catalog_21.png", "img/catalog_22.png", "img/catalog_23.png", "img/catalog_24.png",
        "img/catalog_25.png", "img/catalog_26.png", "img/catalog_27.png", "img/catalog_28.png",
        "img/catalog_29.jpg", "img/catalog_30.jpg", "img/catalog_31.jpg", "img/catalog_32.jpg",
        "img/catalog_33.jpg", "img/catalog_34.jpg", "img/catalog_35.jpg", "img/catalog_36.jpg"
    ];
    
    catalogProducts = [];
    for (let i = 0; i < 36; i++) {
        const oldPrice = Math.floor(Math.random() * (8000 - 1500 + 1) + 1500);
        const discountPercent = Math.floor(Math.random() * (30 - 5 + 1) + 5);
        const newPrice = Math.floor(oldPrice * (1 - discountPercent / 100));
        const savings = oldPrice - newPrice;
        
        let productBadges = [];
        if (Math.random() > 0.6) productBadges.push('hit');
        if (Math.random() > 0.7) productBadges.push('sale');
        if (Math.random() > 0.8) productBadges.push('recommend');
        if (i < 6) productBadges.push('new');
        
        productBadges = [...new Set(productBadges)];
        
        catalogProducts.push({
            id: i + 1,
            name: bouquetNames[i % bouquetNames.length] + (i >= bouquetNames.length ? ` ${Math.floor(i / bouquetNames.length) + 1}` : ''),
            oldPrice: oldPrice,
            newPrice: newPrice,
            discountPercent: discountPercent,
            savings: savings,
            img: catalogImages[i],
            badges: productBadges,
            isHit: productBadges.includes('hit'),
            isNew: productBadges.includes('new'),
            discountPercentValue: discountPercent
        });
    }
}

function renderCatalog() {
    let filtered = [...catalogProducts];
    const t = translations[currentLang];
    
    if (currentSearchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(currentSearchTerm.toLowerCase())
        );
    }
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.badges.includes(currentFilter));
    }
    
    if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.newPrice - b.newPrice);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.newPrice - a.newPrice);
    } else if (currentSort === 'popular') {
        filtered.sort((a, b) => (b.isHit ? 1 : 0) - (a.isHit ? 1 : 0));
    } else if (currentSort === 'new') {
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (currentSort === 'discount') {
        filtered.sort((a, b) => b.discountPercentValue - a.discountPercentValue);
    }
    
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="no-results" style="grid-column:1/-1; text-align:center; padding:50px; font-family:Alice;">${t.catalog_no_results}</div>`;
        return;
    }
    
    grid.innerHTML = filtered.map(p => {
        const badgeHtml = p.badges.map(b => {
            let badgeText = '';
            if (b === 'hit') badgeText = t.badge_hit;
            else if (b === 'sale') badgeText = t.badge_sale;
            else if (b === 'recommend') badgeText = t.badge_recommend;
            else if (b === 'new') badgeText = t.badge_new;
            return `<span class="badge ${b}">${badgeText}</span>`;
        }).join('');
        
        return `
            <div class="catalog-card" data-id="${p.id}">
                <div class="card-badges">
                    ${badgeHtml}
                </div>
                <img class="catalog-card-img" src="${p.img}" alt="${p.name}" loading="lazy">
                <div class="catalog-card-content">
                    <h3 class="catalog-card-title">${p.name}</h3>
                    <div class="catalog-card-prices">
                        <span class="old-price">${p.oldPrice.toLocaleString()} ₽</span>
                        <span class="new-price">${p.newPrice.toLocaleString()} ₽</span>
                    </div>
                    <div class="discount-info">
                        −${p.discountPercent}% ${t.savings} ${p.savings.toLocaleString()} ₽
                    </div>
                    <button class="catalog-card-btn" data-id="${p.id}" data-name="${p.name}" data-price="${p.newPrice}">${t.popular_btn}</button>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.catalog-card-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const name = btn.dataset.name;
            const price = parseInt(btn.dataset.price);
            const product = catalogProducts.find(p => p.id === id);
            if (product) {
                addToCart({ id, name, price, img: product.img });
            }
        });
    });
}

function initCatalogFilters() {
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const filterSelect = document.getElementById('filterSelect');
    const resetBtn = document.getElementById('resetFiltersBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            renderCatalog();
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderCatalog();
        });
    }
    
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            currentFilter = e.target.value;
            renderCatalog();
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (sortSelect) sortSelect.value = 'default';
            if (filterSelect) filterSelect.value = 'all';
            currentSearchTerm = '';
            currentSort = 'default';
            currentFilter = 'all';
            renderCatalog();
        });
    }
}

// ========== ГЛАВНАЯ СТРАНИЦА ==========
function renderProducts() {
    let grid = document.getElementById('popularProducts');
    if (!grid) return;
    const t = translations[currentLang];
    grid.innerHTML = popularBouquets.map(p => `
        <div class="product-card">
            ${p.hit ? `<div class="hit-badge">${t.popular_hit}</div>` : ''}
            <img src="${p.img}" alt="${currentLang === 'ru' ? p.name : p.nameEn}">
            <h3>${currentLang === 'ru' ? p.name : p.nameEn}</h3>
            <div class="price">${p.price} ₽</div>
            <button class="btn-add" data-id="${p.id}">${t.popular_btn}</button>
        </div>
    `).join('');
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            let id = parseInt(btn.dataset.id);
            let product = popularBouquets.find(p => p.id === id);
            if (product) {
                const productForCart = {
                    id: product.id,
                    name: currentLang === 'ru' ? product.name : product.nameEn,
                    price: product.price,
                    img: product.img
                };
                addToCart(productForCart);
            }
        });
    });
}

function renderFlorists() {
    let grid = document.getElementById('floristsGrid');
    if (grid) {
        grid.innerHTML = florists.map(f => `
            <div class="florist-card">
                <img src="${f.img}" alt="${currentLang === 'ru' ? f.name : f.nameEn}">
                <h4>${currentLang === 'ru' ? f.name : f.nameEn}</h4>
                <p class="quote">${currentLang === 'ru' ? f.quote : f.quoteEn}</p>
            </div>
        `).join('');
    }
}

// ========== СЛАЙДЕР ==========
function initSlider() {
    const container = document.getElementById('reviewsSlider');
    if (!container) return;
    
    if (sliderInterval) clearInterval(sliderInterval);
    
    const slidesHtml = reviewsData.map(rev => {
        let stars = '★'.repeat(rev.stars) + '☆'.repeat(5 - rev.stars);
        return `<div class="review-slide">
            <img class="review-avatar" src="${rev.avatar}" alt="${currentLang === 'ru' ? rev.name : rev.nameEn}">
            <div class="review-name">${currentLang === 'ru' ? rev.name : rev.nameEn}</div>
            <div class="review-date">${currentLang === 'ru' ? rev.date : rev.dateEn}</div>
            <div class="stars">${stars}</div>
            <p class="review-text">${currentLang === 'ru' ? rev.text : rev.textEn}</p>
        </div>`;
    });
    
    sliderTotal = slidesHtml.length;
    container.innerHTML = [...slidesHtml, ...slidesHtml].join('');
    sliderCurrentPos = 0;
    container.style.transform = `translateX(0%)`;
    sliderContainerRef = container;
    
    function updateSlide(instant = false) {
        if (!sliderContainerRef) return;
        sliderContainerRef.style.transition = instant ? 'none' : 'transform 0.5s ease-out';
        sliderContainerRef.style.transform = `translateX(-${sliderCurrentPos * 100}%)`;
    }
    
    function nextSlide() {
        if (!sliderContainerRef) return;
        sliderCurrentPos++;
        updateSlide(false);
        if (sliderCurrentPos >= sliderTotal) {
            setTimeout(() => {
                sliderCurrentPos = 0;
                updateSlide(true);
            }, 500);
        }
    }
    
    function prevSlide() {
        if (!sliderContainerRef) return;
        sliderCurrentPos--;
        updateSlide(false);
        if (sliderCurrentPos < 0) {
            sliderCurrentPos = sliderTotal - 1;
            setTimeout(() => updateSlide(true), 500);
        }
    }
    
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    if (nextBtn) {
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
        });
    }
    if (prevBtn) {
        const newPrev = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        newPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
        });
    }
    
    sliderInterval = setInterval(() => nextSlide(), 5000);
    
    const wrapper = document.querySelector('.slider-wrapper');
    if (wrapper) {
        const mouseEnterHandler = () => { if (sliderInterval) clearInterval(sliderInterval); };
        const mouseLeaveHandler = () => { if (sliderInterval) clearInterval(sliderInterval); sliderInterval = setInterval(() => nextSlide(), 5000); };
        wrapper.removeEventListener('mouseenter', mouseEnterHandler);
        wrapper.removeEventListener('mouseleave', mouseLeaveHandler);
        wrapper.addEventListener('mouseenter', mouseEnterHandler);
        wrapper.addEventListener('mouseleave', mouseLeaveHandler);
    }
}

// ========== КОРЗИНА (СТРАНИЦА) ==========
function renderCartPage() {
    const cartContainer = document.getElementById('cartItemsList');
    const emptyMessage = document.getElementById('emptyCartMessage');
    const cartSection = document.querySelector('.cart-section');
    const itemsCount = document.getElementById('cartItemsCount');
    const summaryItemsCount = document.getElementById('summaryItemsCount');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryDiscount = document.getElementById('summaryDiscount');
    const summaryTotal = document.getElementById('summaryTotal');
    const discountRow = document.getElementById('discountRow');
    const t = translations[currentLang];
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        if (cartSection) cartSection.style.display = 'none';
        if (emptyMessage) emptyMessage.style.display = 'block';
        return;
    }
    
    if (cartSection) cartSection.style.display = 'block';
    if (emptyMessage) emptyMessage.style.display = 'none';
    
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.img || 'https://via.placeholder.com/80'}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">Удалить</button>
                </div>
            </div>
        </div>
    `).join('');
    
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let discountAmount = Math.floor(subtotal * promoDiscount / 100);
    let total = subtotal - discountAmount;
    
    itemsCount.innerText = `${totalItems} ${totalItems === 1 ? 'шт' : 'шт.'}`;
    summaryItemsCount.innerText = `${totalItems} ${totalItems === 1 ? 'шт' : 'шт.'}`;
    summarySubtotal.innerText = `${subtotal.toLocaleString()} ₽`;
    
    if (promoDiscount > 0) {
        discountRow.style.display = 'flex';
        summaryDiscount.innerText = `${discountAmount.toLocaleString()} ₽`;
    } else {
        discountRow.style.display = 'none';
    }
    
    summaryTotal.innerText = `${total.toLocaleString()} ₽`;
    
    // Обновляем тексты в корзине
    const summaryRows = document.querySelectorAll('.summary-row');
    if (summaryRows.length >= 3) {
        const complecationSpan = summaryRows[0]?.querySelector('span:first-child');
        const costSpan = summaryRows[1]?.querySelector('span:first-child');
        const deliverySpan = summaryRows[2]?.querySelector('span:first-child');
        if (complecationSpan) complecationSpan.textContent = t.cart_complectation;
        if (costSpan) costSpan.textContent = t.cart_cost;
        if (deliverySpan) deliverySpan.textContent = t.cart_delivery;
    }
    
    const deliveryValueSpan = document.querySelector('.summary-row:nth-child(3) span:last-child');
    if (deliveryValueSpan) deliveryValueSpan.textContent = t.cart_free;
    
    const totalRowSpan = document.querySelector('.total-row span:first-child');
    if (totalRowSpan) totalRowSpan.textContent = t.cart_total;
    
    const discountRowSpan = document.querySelector('.discount-row span:first-child');
    if (discountRowSpan) discountRowSpan.textContent = t.cart_discount;
    
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
            } else {
                cart = cart.filter(i => i.id !== id);
            }
            updateCartCounter();
            renderCartPage();
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === id);
            if (item) {
                item.quantity++;
            }
            updateCartCounter();
            renderCartPage();
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            cart = cart.filter(i => i.id !== id);
            updateCartCounter();
            renderCartPage();
        });
    });
}

function initCartPage() {
    renderCartPage();
    
    const promoBtn = document.getElementById('applyPromoBtn');
    const promoInput = document.getElementById('promoInput');
    if (promoBtn) {
        promoBtn.addEventListener('click', () => {
            if (applyPromo(promoInput.value)) {
                renderCartPage();
                promoInput.value = '';
            }
        });
    }
    
    document.querySelectorAll('.promo-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            if (applyPromo(tag.innerText)) {
                renderCartPage();
            }
        });
    });
    
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm() && cart.length > 0) {
                const orderData = {
                    name: document.getElementById('userName').value,
                    phone: document.getElementById('userPhone').value,
                    email: document.getElementById('userEmail').value,
                    city: document.getElementById('userCity').value,
                    address: document.getElementById('userAddress').value,
                    deliveryDate: document.getElementById('deliveryDate').value,
                    deliveryTime: document.getElementById('deliveryTime').value,
                    comment: document.getElementById('orderComment').value,
                    payment: document.querySelector('input[name="payment"]:checked').value,
                    items: cart,
                    subtotal: parseInt(document.getElementById('summarySubtotal').innerText.replace(/[^0-9]/g, '')),
                    discount: promoDiscount,
                    total: parseInt(document.getElementById('summaryTotal').innerText.replace(/[^0-9]/g, ''))
                };
                
                alert(`Заказ оформлен!\n\nСпасибо, ${orderData.name}!\nСумма заказа: ${orderData.total.toLocaleString()} ₽\nДоставка: ${orderData.city}, ${orderData.address}\nДата: ${orderData.deliveryDate}\n\nНаш менеджер свяжется с вами в ближайшее время.`);
                
                cart = [];
                activePromo = null;
                promoDiscount = 0;
                updateCartCounter();
                renderCartPage();
                orderForm.reset();
            } else if (cart.length === 0) {
                alert('Корзина пуста. Добавьте товары в корзину перед оформлением заказа.');
            }
        });
    }
}

// ========== АНИМАЦИИ ==========
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let current = 0;
                const duration = 2000;
                const increment = target / (duration / 16);
                
                function updateCounter() {
                    current += increment;
                    if (current >= target) {
                        el.innerText = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        el.innerText = Math.floor(current).toLocaleString();
                    }
                }
                
                const timer = setInterval(updateCounter, 16);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(el => observer.observe(el));
}

function initScrollAnimation() {
    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(el => observer.observe(el));
}

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(other => {
                if (other !== item && other.classList.contains('active')) {
                    other.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
}

function initStepsAnimation() {
    const stepCards = document.querySelectorAll('.step-card');
    if (!stepCards.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    stepCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}

// ========== ПОДПИСКА ==========
function initSubscribe() {
    const forms = ['subscribeForm', 'subscribeFormAbout', 'subscribeFormCatalog', 'subscribeFormOrder', 'subscribeFormCart'];
    const msgs = ['subscribeMsg', 'subscribeMsgAbout', 'subscribeMsgCatalog', 'subscribeMsgOrder', 'subscribeMsgCart'];
    const emails = ['subEmail', 'subEmailAbout', 'subEmailCatalog', 'subEmailOrder', 'subEmailCart'];
    
    for (let i = 0; i < forms.length; i++) {
        const form = document.getElementById(forms[i]);
        const msg = document.getElementById(msgs[i]);
        const emailInput = document.getElementById(emails[i]);
        
        if (form && !form.hasAttribute('data-listener')) {
            form.setAttribute('data-listener', 'true');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const t = translations[currentLang];
                if (emailInput && emailInput.value && emailInput.value.includes('@')) {
                    if (msg) {
                        msg.innerHTML = t.subscribe_success;
                        msg.style.color = '#DEB9C0';
                    }
                    form.reset();
                    setTimeout(() => {
                        if (msg) msg.innerHTML = '';
                    }, 3000);
                }
            });
        }
    }
}

// ========== БУРГЕР-МЕНЮ ==========
function initBurger() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu');
    burger?.addEventListener('click', () => nav.classList.toggle('active'));
}

// ========== ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ ==========
function initPageNavigation() {
    const pages = {
        home: document.getElementById('page-home'),
        about: document.getElementById('page-about'),
        catalog: document.getElementById('page-catalog'),
        order: document.getElementById('page-order'),
        cart: document.getElementById('page-cart')
    };
    
    const navLinks = document.querySelectorAll('[data-page]');
    const navMenuLinks = document.querySelectorAll('.nav-link');
    
    function showPage(pageId, saveToStorage = true) {
        Object.keys(pages).forEach(id => {
            if (pages[id]) pages[id].classList.remove('active');
        });
        if (pages[pageId]) pages[pageId].classList.add('active');
        
        navMenuLinks.forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        if (saveToStorage) {
            localStorage.setItem('currentPage', pageId);
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const t = translations[currentLang];
        
        if (pageId === 'home') {
            setTimeout(() => {
                renderProducts();
                renderFlorists();
                initSlider();
                typewriterEffect(document.getElementById('typewriterText'), t.hero_discount, 100);
            }, 100);
        } else if (pageId === 'about') {
            setTimeout(() => {
                const breadcrumbEl = document.getElementById('breadcrumbsAbout');
                if (breadcrumbEl) {
                    typewriterEffect(breadcrumbEl, `${t.breadcrumb_home} — ${t.breadcrumb_about}`, 80);
                }
            }, 100);
        } else if (pageId === 'catalog') {
            setTimeout(() => {
                const breadcrumbEl = document.getElementById('breadcrumbsCatalog');
                if (breadcrumbEl) {
                    typewriterEffect(breadcrumbEl, `${t.breadcrumb_home} — ${t.breadcrumb_catalog}`, 80);
                }
                generateCatalog();
                renderCatalog();
                initCatalogFilters();
            }, 100);
        } else if (pageId === 'order') {
            setTimeout(() => {
                const breadcrumbEl = document.getElementById('breadcrumbsOrder');
                if (breadcrumbEl) {
                    typewriterEffect(breadcrumbEl, `${t.breadcrumb_home} — ${t.breadcrumb_order}`, 80);
                }
                initFaqAccordion();
                initStepsAnimation();
            }, 100);
        } else if (pageId === 'cart') {
            setTimeout(() => {
                const breadcrumbEl = document.getElementById('breadcrumbsCart');
                if (breadcrumbEl) {
                    typewriterEffect(breadcrumbEl, `${t.breadcrumb_home} — ${t.breadcrumb_cart}`, 80);
                }
                initCartPage();
            }, 100);
        }
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            if (pageId && pages[pageId]) {
                showPage(pageId, true);
            }
        });
    });
    
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage && pages[savedPage]) {
        showPage(savedPage, false);
    } else {
        showPage('home', false);
    }
}

// ========== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ==========
function updateAllTexts() {
    const t = translations[currentLang];
    
    // Навигация
    updateTextBySelector('.nav-link[data-nav="home"]', t.nav_home);
    updateTextBySelector('.nav-link[data-nav="about"]', t.nav_about);
    updateTextBySelector('.nav-link[data-nav="catalog"]', t.nav_catalog);
    updateTextBySelector('.nav-link[data-nav="order"]', t.nav_order);
    
    // Кнопка "Смотреть все"
    updateTextBySelector('.btn-primary', t.popular_view_all);
    updateTextBySelector('.btn-center .btn-primary', t.popular_view_all);
    
    // Контакты в шапке
    const contactsLink = document.querySelector('.dropdown > a');
    if (contactsLink) {
        contactsLink.innerHTML = `${t.nav_contacts} <i class="fas fa-chevron-down"></i>`;
    }
    
    const pickupSpan = document.querySelector('.contact-pickup');
    if (pickupSpan) pickupSpan.textContent = t.nav_pickup;
    
    const hoursSpan = document.querySelector('.contact-hours');
    if (hoursSpan) hoursSpan.textContent = t.nav_24h;
    
    // Адреса
    const addresses = document.querySelectorAll('.dropdown-address');
    if (addresses.length >= 4) {
        updateText(addresses[0], t.address1);
        updateText(addresses[1], t.address2);
        updateText(addresses[2], t.address3);
        updateText(addresses[3], t.address4);
    }
    
    // Герой
    const heroTitle = document.querySelector('#page-home .hero-title');
    if (heroTitle) heroTitle.innerHTML = t.hero_title;
    
    const typewriterEl = document.getElementById('typewriterText');
    if (typewriterEl && typewriterEl.closest('#page-home')) {
        typewriterEffect(typewriterEl, t.hero_discount, 100);
    }
    
    updateTextBySelector('.hero-content .btn-hero', t.hero_btn);
    
    // Секции
    updateTextBySelector('.popular-section .section-title', t.popular_title);
    updateTextBySelector('.florists-section .section-title', t.florists_title);
    updateTextBySelector('.florists-section .subtitle', t.florists_subtitle);
    updateTextBySelector('.advantages-section .section-title', t.advantages_title);
    updateTextBySelector('.reviews-section .section-title', t.reviews_title);
    updateTextBySelector('.subscribe-container h3', t.subscribe_title);
    updateTextBySelector('.subscribe-container p', t.subscribe_desc);
    updateTextBySelector('.subscribe-form button', t.subscribe_btn);
    
    // Преимущества
    const advantageCards = document.querySelectorAll('.advantage-card');
    if (advantageCards.length >= 6) {
        updateText(advantageCards[0].querySelector('h3'), t.adv_free_delivery);
        updateText(advantageCards[0].querySelector('p'), t.adv_free_delivery_desc);
        updateText(advantageCards[1].querySelector('h3'), t.adv_fresh);
        updateText(advantageCards[1].querySelector('p'), t.adv_fresh_desc);
        updateText(advantageCards[2].querySelector('h3'), t.adv_gift);
        updateText(advantageCards[2].querySelector('p'), t.adv_gift_desc);
        updateText(advantageCards[3].querySelector('h3'), t.adv_photo);
        updateText(advantageCards[3].querySelector('p'), t.adv_photo_desc);
        updateText(advantageCards[4].querySelector('h3'), t.adv_247);
        updateText(advantageCards[4].querySelector('p'), t.adv_247_desc);
        updateText(advantageCards[5].querySelector('h3'), t.adv_love);
        updateText(advantageCards[5].querySelector('p'), t.adv_love_desc);
    }
    
    // Промо
    updateTextBySelector('.promo-label', t.promo_label);
    updateTextBySelector('.promo-title', t.promo_title);
    updateTextBySelector('.promo-desc', t.promo_desc);
    updateTextBySelector('.promo-btn', t.promo_btn);
    
    // Таймер подписи
    const countdownItems = document.querySelectorAll('.countdown-item span:last-child');
    if (countdownItems.length >= 4) {
        updateText(countdownItems[0], t.promo_days);
        updateText(countdownItems[1], t.promo_hours);
        updateText(countdownItems[2], t.promo_minutes);
        updateText(countdownItems[3], t.promo_seconds);
    }
    
    // Страница О НАС
    const aboutHeroTitle = document.querySelector('#page-about .hero-title');
    if (aboutHeroTitle) aboutHeroTitle.innerHTML = t.about_hero_title;
    
    updateTextBySelector('#page-about .about-title', t.about_title);
    updateTextBySelector('#page-about .about-description', t.about_text);
    updateTextBySelector('#page-about .about-footer-text', t.about_footer);
    updateTextBySelector('#page-about .stats-section .section-title', t.stats_title);
    updateTextBySelector('#page-about .gallery-section .section-title', t.gallery_title);
    updateTextBySelector('#page-about .gallery-subtitle', t.gallery_subtitle);
    
    // Особенности (галочки)
    const featureItems = document.querySelectorAll('.feature-item');
    if (featureItems.length >= 6) {
        updateText(featureItems[0], `✓ ${t.feature_24h}`);
        updateText(featureItems[1], `✓ ${t.feature_quality}`);
        updateText(featureItems[2], `✓ ${t.feature_author}`);
        updateText(featureItems[3], `✓ ${t.feature_budget}`);
        updateText(featureItems[4], `✓ ${t.feature_gift}`);
        updateText(featureItems[5], `✓ ${t.feature_guarantee}`);
    }
    
    // Статистика
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 4) {
        updateText(statLabels[0], t.stats_clients);
        updateText(statLabels[1], t.stats_years);
        updateText(statLabels[2], t.stats_bouquets);
        updateText(statLabels[3], t.stats_freshness);
    }
    
    // Галерея подписи
    const galleryOverlays = document.querySelectorAll('.gallery-overlay span');
    if (galleryOverlays.length >= 4) {
        updateText(galleryOverlays[0], t.gallery_fresh);
        updateText(galleryOverlays[1], t.gallery_work);
        updateText(galleryOverlays[2], t.gallery_assembly);
        updateText(galleryOverlays[3], t.gallery_delivery);
    }
    
    // Страница КАТАЛОГ
    const catalogHeroTitle = document.querySelector('#page-catalog .hero-title');
    if (catalogHeroTitle) catalogHeroTitle.innerHTML = t.catalog_hero_title;
    
    updateTextBySelector('#searchInput', t.catalog_search, 'placeholder');
    updateTextBySelector('#sortSelect option[value="default"]', t.sort_default);
    updateTextBySelector('#sortSelect option[value="price-asc"]', t.sort_price_asc);
    updateTextBySelector('#sortSelect option[value="price-desc"]', t.sort_price_desc);
    updateTextBySelector('#sortSelect option[value="popular"]', t.sort_popular);
    updateTextBySelector('#sortSelect option[value="new"]', t.sort_new);
    updateTextBySelector('#sortSelect option[value="discount"]', t.sort_discount);
    updateTextBySelector('#filterSelect option[value="all"]', t.filter_all);
    updateTextBySelector('#filterSelect option[value="hit"]', t.filter_hit);
    updateTextBySelector('#filterSelect option[value="sale"]', t.filter_sale);
    updateTextBySelector('#filterSelect option[value="recommend"]', t.filter_recommend);
    updateTextBySelector('#filterSelect option[value="new"]', t.filter_new);
    updateTextBySelector('#resetFiltersBtn', t.catalog_reset);
    
    // Страница ЗАКАЗ
    const orderHeroTitle = document.querySelector('#page-order .hero-title');
    if (orderHeroTitle) orderHeroTitle.innerHTML = t.order_hero_title;
    
    updateTextBySelector('#page-order .order-subtitle', t.order_subtitle);
    updateTextBySelector('#page-order .order-advantages-section .section-title', t.order_advantages_title);
    updateTextBySelector('#page-order .guarantee-content h3', t.guarantee_title);
    updateTextBySelector('#page-order .guarantee-content p', t.guarantee_desc);
    updateTextBySelector('#page-order .order-faq-section .section-title', t.faq_title);
    updateTextBySelector('#page-order .cta-content h3', t.cta_title);
    updateTextBySelector('#page-order .cta-content p', t.cta_desc);
    updateTextBySelector('#page-order .cta-button', t.cta_btn);
    
    // Шаги заказа
    const stepCards = document.querySelectorAll('#page-order .step-card');
    if (stepCards.length >= 6) {
        const stepTitles = [t.step1_title, t.step2_title, t.step3_title, t.step4_title, t.step5_title, t.step6_title];
        const stepDescs = [t.step1_desc, t.step2_desc, t.step3_desc, t.step4_desc, t.step5_desc, t.step6_desc];
        stepCards.forEach((card, i) => {
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            if (titleEl && stepTitles[i]) updateText(titleEl, stepTitles[i]);
            if (descEl && stepDescs[i]) updateText(descEl, stepDescs[i]);
        });
    }
    
    // Карточки преимуществ заказа
    const orderAdvCards = document.querySelectorAll('#page-order .order-adv-card');
    if (orderAdvCards.length >= 4) {
        const advTitles = [t.order_adv_photo, t.order_adv_fast, t.order_adv_author, t.order_adv_gift];
        const advDescs = [t.order_adv_photo_desc, t.order_adv_fast_desc, t.order_adv_author_desc, t.order_adv_gift_desc];
        orderAdvCards.forEach((card, i) => {
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            if (titleEl && advTitles[i]) updateText(titleEl, advTitles[i]);
            if (descEl && advDescs[i]) updateText(descEl, advDescs[i]);
        });
    }
    
    // Гарантия статистика
    const guaranteeStats = document.querySelectorAll('#page-order .guarantee-stats span');
    if (guaranteeStats.length >= 2) {
        updateText(guaranteeStats[0], `⭐ ${t.guarantee_rating}`);
        updateText(guaranteeStats[1], `↺ ${t.guarantee_return}`);
    }
    
    // FAQ
    const faqItems = document.querySelectorAll('#page-order .faq-item');
    if (faqItems.length >= 4) {
        const faqQs = [t.faq1_q, t.faq2_q, t.faq3_q, t.faq4_q];
        const faqAs = [t.faq1_a, t.faq2_a, t.faq3_a, t.faq4_a];
        faqItems.forEach((item, i) => {
            const qEl = item.querySelector('.faq-question span');
            const aEl = item.querySelector('.faq-answer p');
            if (qEl && faqQs[i]) updateText(qEl, faqQs[i]);
            if (aEl && faqAs[i]) updateText(aEl, faqAs[i]);
        });
    }
    
    // Подвал
    const footerDelivery = document.querySelector('.footer-delivery');
    if (footerDelivery) footerDelivery.textContent = t.footer_delivery;
    
    updateTextBySelector('.footer-col:nth-child(2) h4', t.footer_menu);
    updateTextBySelector('.footer-col:nth-child(3) h4', t.footer_contacts);
    updateTextBySelector('.footer-col:nth-child(4) h4', t.footer_hours);
    updateTextBySelector('.policy a', t.footer_policy);
    updateTextBySelector('.footer-bottom p', `© 2026 FlowerLove. ${t.footer_rights}`);
    
    // Контакты в подвале
    const contactPhone = document.querySelector('.contact-list li:first-child');
    const contactEmail = document.querySelector('.contact-list li:nth-child(2)');
    if (contactPhone) contactPhone.innerHTML = `<i class="fas fa-phone-alt"></i> ${t.contact_phone}`;
    if (contactEmail) contactEmail.innerHTML = `<i class="fas fa-envelope"></i> ${t.contact_email}`;
    
    // Адреса в подвале
    const footerAddresses = document.querySelectorAll('.address-item');
    if (footerAddresses.length >= 4) {
        updateText(footerAddresses[0], t.address1);
        updateText(footerAddresses[1], t.address2);
        updateText(footerAddresses[2], t.address3);
        updateText(footerAddresses[3], t.address4);
    }
    
    // Банер корзины (хлебные крошки)
    const breadcrumbAbout = document.getElementById('breadcrumbsAbout');
    const breadcrumbCatalog = document.getElementById('breadcrumbsCatalog');
    const breadcrumbOrder = document.getElementById('breadcrumbsOrder');
    const breadcrumbCart = document.getElementById('breadcrumbsCart');
    
    if (breadcrumbAbout && document.getElementById('page-about').classList.contains('active')) {
        typewriterEffect(breadcrumbAbout, `${t.breadcrumb_home} — ${t.breadcrumb_about}`, 80);
    }
    if (breadcrumbCatalog && document.getElementById('page-catalog').classList.contains('active')) {
        typewriterEffect(breadcrumbCatalog, `${t.breadcrumb_home} — ${t.breadcrumb_catalog}`, 80);
    }
    if (breadcrumbOrder && document.getElementById('page-order').classList.contains('active')) {
        typewriterEffect(breadcrumbOrder, `${t.breadcrumb_home} — ${t.breadcrumb_order}`, 80);
    }
    if (breadcrumbCart && document.getElementById('page-cart').classList.contains('active')) {
        typewriterEffect(breadcrumbCart, `${t.breadcrumb_home} — ${t.breadcrumb_cart}`, 80);
        // Обновляем тексты корзины
        const cartHeroTitle = document.querySelector('#page-cart .hero-title');
        if (cartHeroTitle) cartHeroTitle.innerHTML = t.cart_hero_title;
        updateTextBySelector('#page-cart .cart-items-header h3', t.cart_items);
        updateTextBySelector('#page-cart .promo-code-section h4', t.cart_promo);
        updateTextBySelector('#applyPromoBtn', t.cart_apply);
        updateTextBySelector('#page-cart .available-promos p', t.cart_available);
        updateTextBySelector('#page-cart .order-summary h3', t.cart_your_order);
        updateTextBySelector('#page-cart .order-form h3', t.cart_form_title);
        updateTextBySelector('#submitOrderBtn', t.cart_submit);
        
        const emptyCartH3 = document.querySelector('.empty-cart-content h3');
        const emptyCartP = document.querySelector('.empty-cart-content p');
        const emptyCartBtn = document.querySelector('.empty-cart-content .btn-primary');
        if (emptyCartH3) emptyCartH3.textContent = t.cart_empty;
        if (emptyCartP) emptyCartP.textContent = t.cart_empty_desc;
        if (emptyCartBtn) emptyCartBtn.textContent = t.cart_empty_btn;
    }
    
    // Динамические компоненты
    renderProducts();
    renderFlorists();
    renderCatalog();
    initSlider();
    
    // Обновляем таймер
    initCountdown();
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('flowerLoveLang', lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    document.body.classList.add('lang-switching');
    updateAllTexts();
    
    setTimeout(() => {
        document.body.classList.remove('lang-switching');
    }, 200);
}

function initLanguageSwitcher() {
    const savedLang = localStorage.getItem('flowerLoveLang');
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
        currentLang = savedLang;
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang && lang !== currentLang) {
                setLanguage(lang);
                if (document.getElementById('page-cart').classList.contains('active')) {
                    renderCartPage();
                }
            }
        });
    });
    
    setLanguage(currentLang);
}

// Добавляем стили для анимаций
const styleEl = document.createElement('style');
styleEl.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .lang-switching {
        opacity: 0.95;
        transition: opacity 0.2s ease;
    }
`;
document.head.appendChild(styleEl);

// ========== ЗАПУСК ==========
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderFlorists();
    updateCartCounter();
    initSlider();
    initBurger();
    initSubscribe();
    initScrollAnimation();
    initPageNavigation();
    initCountdown();
    initStatsCounter();
    initLanguageSwitcher();
    generateCatalog();
    // ========== УЛУЧШЕННАЯ АДАПТАЦИЯ ==========

// 1. Закрытие бургер-меню при клике на ссылку
function initMobileMenu() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (!burger || !navMenu) return;
    
    // Открыть/закрыть меню
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрыть при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Закрыть при клике вне меню
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !burger.contains(e.target)) {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Мобильные дропдауны
    if (window.innerWidth <= 900) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('> a');
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                });
            }
        });
    }
    
    // При изменении размера окна сбрасываем состояние меню
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            dropdowns.forEach(d => d.classList.remove('active'));
        } else {
            // Переинициализируем дропдауны для мобильной версии
            dropdowns.forEach(dropdown => {
                const link = dropdown.querySelector('> a');
                if (link) {
                    // Убираем старые обработчики, чтобы не дублировать
                    const newLink = link.cloneNode(true);
                    link.parentNode.replaceChild(newLink, link);
                    newLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    });
                }
            });
        }
    });
}

// 2. Добавляем анимацию для карточек при скролле (если её нет)
function enhanceScrollAnimations() {
    // Плавное появление карточек с задержкой
    const cards = document.querySelectorAll('.product-card, .florist-card, .advantage-card, .stat-card, .gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}

// 3. Фикс для отзывов (слайдер) на мобильных
function fixSliderOnMobile() {
    const sliderContainer = document.querySelector('.slider-container');
    if (!sliderContainer) return;
    
    let startX = 0;
    let isDragging = false;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    sliderContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const moveX = e.touches[0].clientX;
        const diff = startX - moveX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                document.querySelector('.slider-next')?.click();
            } else {
                document.querySelector('.slider-prev')?.click();
            }
            isDragging = false;
        }
    });
    
    sliderContainer.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// 4. Запуск всех новых функций
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    enhanceScrollAnimations();
    fixSliderOnMobile();
});
});