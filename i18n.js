// ============================================
// Aegis — translations (EN / RU)
// ============================================

const AEGIS_I18N = {
  en: {
    "nav.features": "Features",
    "nav.security": "Security",
    "nav.how": "How it works",
    "nav.faq": "FAQ",
    "nav.privacy": "Privacy",
    "nav.openTelegram": "Open Telegram",

    "hero.sub": "Advanced Telegram Administration Platform",
    "hero.desc": "Powerful Telegram administration bot focused on automation, security and community control.",
    "hero.ctaPrimary": "Open in Telegram",
    "hero.ctaGithub": "View on GitHub",

    "features.eyebrow": "Capabilities",
    "features.title": "Everything a community needs, automated",
    "features.lead": "Aegis handles the repetitive parts of running a group so your admins can focus on the community itself.",
    "features.f1.title": "Smart Administration",
    "features.f1.desc": "Moderation rules, member actions and routine admin tasks run automatically, based on conditions you define once.",
    "features.f2.title": "Security System",
    "features.f2.desc": "Access control, spam filtering and permission layers keep your groups protected without manual policing.",
    "features.f3.title": "Automation",
    "features.f3.desc": "Recurring workflows, scheduled actions and reactive triggers remove manual work from day-to-day management.",
    "features.f4.title": "Fast Response",
    "features.f4.desc": "Commands and events are processed with minimal latency, even under heavy load from large communities.",
    "features.f5.title": "Modular Architecture",
    "features.f5.desc": "Features are built as independent modules, so the platform stays maintainable as it grows.",
    "features.f6.title": "Reliability",
    "features.f6.desc": "Built to run continuously, with monitoring and recovery in place so your groups stay covered around the clock.",

    "security.eyebrow": "Security",
    "security.title": "Built with security in mind",
    "security.lead": "Aegis is designed with a focus on privacy, reliability and safe community management — from the data it stores to the actions it takes.",
    "security.s1.title": "Data minimalism",
    "security.s1.desc": "Only what's required to operate is stored — nothing is collected for its own sake.",
    "security.s2.title": "Controlled access",
    "security.s2.desc": "Administrative actions are scoped and logged, so groups stay in control of what the bot can do.",
    "security.s3.title": "Continuous monitoring",
    "security.s3.desc": "The platform is watched for irregular activity and recovers automatically from failures.",

    "how.eyebrow": "Process",
    "how.title": "Set up in three steps",
    "how.s1.title": "Open the Telegram bot",
    "how.s1.desc": "Start a chat with Aegis directly in Telegram — no installation required.",
    "how.s2.title": "Configure your community",
    "how.s2.desc": "Add Aegis to your group and set the rules and permissions that fit it.",
    "how.s3.title": "Enjoy automated management",
    "how.s3.desc": "Aegis takes over the routine work while you stay in control of the important decisions.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Common questions",
    "faq.q1.q": "What is Aegis?",
    "faq.q1.a": "Aegis is a Telegram bot for administering and managing communities, built around automation, security and control.",
    "faq.q2.q": "How can I start using it?",
    "faq.q2.a": "Open the bot in Telegram, add it to your group and grant it administrator permissions to begin configuring it.",
    "faq.q3.q": "Is my data safe?",
    "faq.q3.a": "Aegis stores only what's necessary to operate and follows the practices outlined in the privacy policy.",
    "faq.q4.q": "Where can I read the privacy policy?",
    "faq.q4.a": "The full privacy policy is available on the ",
    "faq.q4.link": "Privacy page",

    "cta.title": "Ready to secure your community?",
    "cta.desc": "Open Aegis in Telegram and set it up in under a minute.",
    "cta.button": "Open in Telegram",

    "footer.telegram": "Telegram",
    "footer.github": "GitHub",
    "footer.terms": "Terms",

    "legal.privacy.title": "Privacy Policy",
    "legal.privacy.updated": "Privacy Policy for the Telegram bot Aegis",
    "legal.privacy.intro": "This policy explains what information the Aegis Telegram bot (\"Aegis\", \"the bot\") processes when you or your community use it, and how that information is handled.",
    "legal.privacy.h1": "Data we collect",
    "legal.privacy.h1.l1": "Basic Telegram identifiers needed to operate: user ID, username, and chat/group ID.",
    "legal.privacy.h1.l2": "Administrative settings you configure for your community (rules, permissions, preferences).",
    "legal.privacy.h1.l3": "Interaction data required to process commands and moderation actions, such as message metadata used for spam and abuse detection.",
    "legal.privacy.h1.note": "Aegis does not collect data beyond what is required for the bot to function.",
    "legal.privacy.h2": "How we use data",
    "legal.privacy.h2.l1": "To operate administrative and moderation features you enable.",
    "legal.privacy.h2.l2": "To apply the configuration set by a group's administrators.",
    "legal.privacy.h2.l3": "To maintain reliability, including monitoring and diagnosing failures.",
    "legal.privacy.h2.note": "Data is not sold, and is not used for advertising.",
    "legal.privacy.h3": "Data storage and security",
    "legal.privacy.h3.text": "Data is stored only for as long as it's needed to provide the bot's functionality. Access to stored data is limited to what's required for the platform's operation, and administrative actions taken through the bot are scoped to the permissions granted to it.",
    "legal.privacy.h4": "Third parties",
    "legal.privacy.h4.text": "Aegis operates through the Telegram Bot API. Telegram's own privacy policy governs data processed by Telegram itself. Aegis does not share collected data with third parties beyond what is required to operate the service.",
    "legal.privacy.h5": "Your choices",
    "legal.privacy.h5.text": "Group administrators can remove Aegis from a community at any time, which stops further data collection for that community. Individual users can stop interacting with the bot at any point.",
    "legal.privacy.h6": "Contact",
    "legal.privacy.h6.text": "Questions about this policy or the project's source can be directed through the project repository.",

    "legal.terms.title": "Terms of Service",
    "legal.terms.updated": "Terms of use for the Telegram bot Aegis",
    "legal.terms.intro": "By adding Aegis to a Telegram community or interacting with it, you agree to the terms described below.",
    "legal.terms.h1": "Use of the service",
    "legal.terms.h1.l1": "Aegis is provided to help administer and moderate Telegram communities.",
    "legal.terms.h1.l2": "You are responsible for the configuration you apply to your community and for the consequences of actions taken through that configuration.",
    "legal.terms.h1.l3": "Aegis must not be used to violate Telegram's own Terms of Service or applicable law.",
    "legal.terms.h2": "Administrator responsibility",
    "legal.terms.h2.text": "Group administrators who grant Aegis permissions are responsible for reviewing what those permissions allow. Aegis acts within the scope of the permissions it is given and the configuration set by administrators.",
    "legal.terms.h3": "Limitations",
    "legal.terms.h3.l1": "Aegis is provided \"as is\", without guarantees of uninterrupted availability.",
    "legal.terms.h3.l2": "The project is under active development, and features may change, be added, or be removed over time.",
    "legal.terms.h3.l3": "The maintainers are not liable for losses resulting from misconfiguration, misuse, or third-party actions within a community.",
    "legal.terms.h4": "Changes to the service",
    "legal.terms.h4.text": "Aegis may be updated, modified, or discontinued at any time. Material changes to these terms will be reflected on this page.",
    "legal.terms.h5": "Open source",
    "legal.terms.h5.text": "Project source and related documentation are available in the public repository.",
    "legal.terms.h6": "Contact",
    "legal.terms.h6.text": "Questions about these terms can be raised through the project repository linked above."
  },

  ru: {
    "nav.features": "Возможности",
    "nav.security": "Безопасность",
    "nav.how": "Как это работает",
    "nav.faq": "Вопросы",
    "nav.privacy": "Конфиденциальность",
    "nav.openTelegram": "Открыть в Telegram",

    "hero.sub": "Продвинутая платформа администрирования Telegram",
    "hero.desc": "Мощный Telegram-бот для администрирования, ориентированный на автоматизацию, безопасность и контроль сообщества.",
    "hero.ctaPrimary": "Открыть в Telegram",
    "hero.ctaGithub": "Смотреть на GitHub",

    "features.eyebrow": "Возможности",
    "features.title": "Всё, что нужно сообществу — в автоматическом режиме",
    "features.lead": "Aegis берёт на себя рутинные задачи управления группой, чтобы администраторы могли сосредоточиться на самом сообществе.",
    "features.f1.title": "Умное администрирование",
    "features.f1.desc": "Правила модерации, действия с участниками и рутинные задачи администратора выполняются автоматически по заданным вами условиям.",
    "features.f2.title": "Система безопасности",
    "features.f2.desc": "Контроль доступа, фильтрация спама и уровни разрешений защищают ваши группы без ручного контроля.",
    "features.f3.title": "Автоматизация",
    "features.f3.desc": "Повторяющиеся сценарии, запланированные действия и реактивные триггеры избавляют от ручной работы в повседневном управлении.",
    "features.f4.title": "Быстрый отклик",
    "features.f4.desc": "Команды и события обрабатываются с минимальной задержкой, даже при высокой нагрузке в крупных сообществах.",
    "features.f5.title": "Модульная архитектура",
    "features.f5.desc": "Функции реализованы как независимые модули, поэтому платформа остаётся поддерживаемой по мере роста.",
    "features.f6.title": "Надёжность",
    "features.f6.desc": "Создан для непрерывной работы: мониторинг и восстановление обеспечивают покрытие групп круглосуточно.",

    "security.eyebrow": "Безопасность",
    "security.title": "Создан с упором на безопасность",
    "security.lead": "Aegis разработан с фокусом на приватность, надёжность и безопасное управление сообществом — от хранимых данных до совершаемых действий.",
    "security.s1.title": "Минимализм данных",
    "security.s1.desc": "Хранится только то, что необходимо для работы — ничего не собирается просто так.",
    "security.s2.title": "Контролируемый доступ",
    "security.s2.desc": "Административные действия ограничены по области и логируются, чтобы группы сохраняли контроль над тем, что может делать бот.",
    "security.s3.title": "Постоянный мониторинг",
    "security.s3.desc": "Платформа отслеживается на предмет нештатной активности и автоматически восстанавливается после сбоев.",

    "how.eyebrow": "Процесс",
    "how.title": "Настройка в три шага",
    "how.s1.title": "Откройте бота в Telegram",
    "how.s1.desc": "Начните диалог с Aegis прямо в Telegram — установка не требуется.",
    "how.s2.title": "Настройте своё сообщество",
    "how.s2.desc": "Добавьте Aegis в группу и задайте подходящие правила и разрешения.",
    "how.s3.title": "Пользуйтесь автоматическим управлением",
    "how.s3.desc": "Aegis берёт на себя рутинную работу, а важные решения остаются за вами.",

    "faq.eyebrow": "Вопросы",
    "faq.title": "Частые вопросы",
    "faq.q1.q": "Что такое Aegis?",
    "faq.q1.a": "Aegis — это Telegram-бот для администрирования и управления сообществами, построенный вокруг автоматизации, безопасности и контроля.",
    "faq.q2.q": "Как начать им пользоваться?",
    "faq.q2.a": "Откройте бота в Telegram, добавьте его в группу и выдайте права администратора, чтобы начать настройку.",
    "faq.q3.q": "Безопасны ли мои данные?",
    "faq.q3.a": "Aegis хранит только то, что необходимо для работы, и следует принципам, описанным в политике конфиденциальности.",
    "faq.q4.q": "Где почитать политику конфиденциальности?",
    "faq.q4.a": "Полная политика конфиденциальности доступна на ",
    "faq.q4.link": "странице конфиденциальности",

    "cta.title": "Готовы защитить своё сообщество?",
    "cta.desc": "Откройте Aegis в Telegram и настройте его меньше чем за минуту.",
    "cta.button": "Открыть в Telegram",

    "footer.telegram": "Telegram",
    "footer.github": "GitHub",
    "footer.terms": "Условия",

    "legal.privacy.title": "Политика конфиденциальности",
    "legal.privacy.updated": "Политика конфиденциальности для Telegram-бота Aegis",
    "legal.privacy.intro": "Этот документ объясняет, какую информацию обрабатывает Telegram-бот Aegis («Aegis», «бот»), когда вы или ваше сообщество пользуетесь им, и как эта информация используется.",
    "legal.privacy.h1": "Какие данные мы собираем",
    "legal.privacy.h1.l1": "Базовые идентификаторы Telegram, необходимые для работы: ID пользователя, username и ID чата/группы.",
    "legal.privacy.h1.l2": "Настройки администрирования, которые вы задаёте для своего сообщества (правила, разрешения, предпочтения).",
    "legal.privacy.h1.l3": "Данные взаимодействия, необходимые для обработки команд и модерации, например метаданные сообщений для обнаружения спама и злоупотреблений.",
    "legal.privacy.h1.note": "Aegis не собирает данные сверх того, что необходимо для работы бота.",
    "legal.privacy.h2": "Как мы используем данные",
    "legal.privacy.h2.l1": "Для работы включённых вами функций администрирования и модерации.",
    "legal.privacy.h2.l2": "Для применения настроек, заданных администраторами группы.",
    "legal.privacy.h2.l3": "Для поддержания надёжности, включая мониторинг и диагностику сбоев.",
    "legal.privacy.h2.note": "Данные не продаются и не используются для рекламы.",
    "legal.privacy.h3": "Хранение данных и безопасность",
    "legal.privacy.h3.text": "Данные хранятся только столько, сколько нужно для работы функций бота. Доступ к хранимым данным ограничен тем, что необходимо для работы платформы, а административные действия через бота ограничены выданными ему разрешениями.",
    "legal.privacy.h4": "Третьи стороны",
    "legal.privacy.h4.text": "Aegis работает через Telegram Bot API. Данные, обрабатываемые самим Telegram, регулируются политикой конфиденциальности Telegram. Aegis не передаёт собранные данные третьим сторонам сверх того, что необходимо для работы сервиса.",
    "legal.privacy.h5": "Ваш выбор",
    "legal.privacy.h5.text": "Администраторы группы могут удалить Aegis из сообщества в любой момент, что останавливает дальнейший сбор данных для этого сообщества. Отдельные пользователи могут прекратить взаимодействие с ботом в любой момент.",
    "legal.privacy.h6": "Контакты",
    "legal.privacy.h6.text": "Вопросы об этой политике или исходном коде проекта можно направить через репозиторий проекта.",

    "legal.terms.title": "Условия использования",
    "legal.terms.updated": "Условия использования Telegram-бота Aegis",
    "legal.terms.intro": "Добавляя Aegis в сообщество Telegram или взаимодействуя с ним, вы соглашаетесь с условиями, описанными ниже.",
    "legal.terms.h1": "Использование сервиса",
    "legal.terms.h1.l1": "Aegis предоставляется для помощи в администрировании и модерации сообществ Telegram.",
    "legal.terms.h1.l2": "Вы несёте ответственность за настройки, которые применяете к своему сообществу, и за последствия действий, совершённых с их помощью.",
    "legal.terms.h1.l3": "Aegis нельзя использовать для нарушения условий использования самого Telegram или применимого законодательства.",
    "legal.terms.h2": "Ответственность администратора",
    "legal.terms.h2.text": "Администраторы группы, выдающие Aegis разрешения, несут ответственность за проверку того, что эти разрешения позволяют. Aegis действует в рамках выданных ему разрешений и настроек, заданных администраторами.",
    "legal.terms.h3": "Ограничения",
    "legal.terms.h3.l1": "Aegis предоставляется «как есть», без гарантий бесперебойной доступности.",
    "legal.terms.h3.l2": "Проект находится в активной разработке, функции могут меняться, добавляться или удаляться со временем.",
    "legal.terms.h3.l3": "Разработчики не несут ответственности за потери, возникшие из-за неправильной настройки, неправомерного использования или действий третьих лиц внутри сообщества.",
    "legal.terms.h4": "Изменения сервиса",
    "legal.terms.h4.text": "Aegis может обновляться, изменяться или прекращать работу в любой момент. Существенные изменения этих условий будут отражены на этой странице.",
    "legal.terms.h5": "Открытый исходный код",
    "legal.terms.h5.text": "Исходный код проекта и сопутствующая документация доступны в публичном репозитории.",
    "legal.terms.h6": "Контакты",
    "legal.terms.h6.text": "Вопросы по этим условиям можно направить через репозиторий проекта, указанный выше."
  }
};

// Apply translations, wire up the switcher, and persist the choice.
(function () {
  const STORAGE_KEY = 'aegis-lang';

  function detectDefaultLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ru') return saved;
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('ru') ? 'ru' : 'en';
  }

  function applyLang(lang) {
    const dict = AEGIS_I18N[lang] || AEGIS_I18N.en;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    const switchBtn = document.getElementById('langSwitch');
    if (switchBtn) {
      switchBtn.querySelectorAll('.lang-opt').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
      });
    }

    localStorage.setItem(STORAGE_KEY, lang);
    window.__aegisLang = lang;

    // Recalculate height of any open FAQ answers so translated text isn't clipped
    document.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(btn => {
      const answer = btn.closest('.faq-item').querySelector('.faq-a');
      if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(detectDefaultLang());

    const switchBtn = document.getElementById('langSwitch');
    if (switchBtn) {
      switchBtn.addEventListener('click', () => {
        const current = window.__aegisLang === 'ru' ? 'ru' : 'en';
        applyLang(current === 'en' ? 'ru' : 'en');
      });
    }
  });

  window.aegisApplyLang = applyLang;
})();
