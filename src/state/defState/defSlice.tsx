import { createSlice } from "@reduxjs/toolkit";
import { PropsPress } from "../../components/core/MediaBlock.js";
import { PropsProject } from "../../components/core/projectBlock.js";


type footerItem = {
  txt: string;
  link: string;
  alt?: string;
};

type footerState = {
  name: string;
  values: footerItem[];
};

type ActivityState = {
  name: string;
  id: number;
  icon: string;
};

export interface defSliceType {
  name: {
    value_1: string;
    value_2: string;
  };
  iconsFooter: footerItem[];
  dataFooter: footerState[];
  value: number;
  extraQuestionState: {
    label: string;
    describe: string;
    imgUrl: string;
  };
  PressData: PropsPress[];
  MediaData: PropsPress[];
  ProjectData: PropsProject[];
  ActivityButtonData: ActivityState[];
  ActivityBlockData: footerItem[];
}

const initialState: defSliceType = {
  name: {
    value_1: "Агентства инновации и цифровых",
    value_2: "технологий РЕСПУБЛИКИ ТАДЖИКИСТАН",
  },
  dataFooter: [
    {
      name: "АИЦТ",
      values: [
        { txt: "Об агентстве", link: "#" },
        { txt: "Деятельность", link: "#" },
        { txt: "Документы", link: "#" },
        { txt: "Проекты", link: "#" },
        { txt: "События", link: "#" },
      ],
    },
    {
      name: "Вакансии",
      values: [
        { txt: "Актуальные вакансии", link: "#" },
        { txt: "Назначение по итогам конкурса", link: "#" },
        { txt: "Результаты тестирования", link: "#" },
        { txt: "Стажировка", link: "#" },
      ],
    },
    {
      name: "Оффициальные ресурсы",
      values: [
        { txt: "Президент РТ", link: "#" },
        { txt: "Блог", link: "#" },
        { txt: "Партнеры", link: "#" },
        { txt: "Политика конфиденциальности ", link: "#" },
      ],
    },
  ],
  iconsFooter: [
    {
      link: "#",
      txt: "src/assets/icons/facebook.svg",
      alt: "facebook",
    },
    {
      link: "#",
      txt: "src/assets/icons/instag.svg",
      alt: "instagram",
    },
    {
      link: "#",
      txt: "src/assets/icons/twitter.svg",
      alt: "twitter",
    },
    {
      link: "#",
      txt: "src/assets/icons/email.svg",
      alt: "email",
    },
  ],
  value: 0,
  extraQuestionState: {
    label: "Остались дополнительные вопросы?",
    describe:
      "Воспользуйтесь нашими сервисами, чтобы найти ответ на вопрос который вас интересует",
    imgUrl: "src/assets/extraQues.svg",
  },
  PressData: [
    {
      id: 1,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "src/assets/pressBlock-1.svg",
        alt: "press-conf",
      },
      typePress: "Новости",
      link: "#",
    },
    {
      id: 2,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "src/assets/pressBlock-2.svg",
        alt: "press-conf",
      },
      typePress: "Новости",
      link: "#",
    },
    {
      id: 3,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "src/assets/pressBlock-3.svg",
        alt: "press-conf",
      },
      typePress: "Новости",
      link: "#",
    },
  ],
  MediaData: [
    {
      id: 1,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "src/assets/mediaBlock-1.svg",
        alt: "press-conf",
      },
      place: "Таджикистан, Душанбе",
      link: "#",
    },
    {
      id: 2,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "src/assets/mediaBlock-2.svg",
        alt: "press-conf",
      },
      place: "Таджикистан, Душанбе",
      link: "#",
    },
    {
      id: 3,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "src/assets/mediaBlock-3.svg",
        alt: "press-conf",
      },
      place: "Таджикистан, Душанбе",
      link: "#",
    },
  ],
  ProjectData: [
    {
      urlImg: "src/assets/cloud.svg",
      title: "Электронное правительство Республики Таджикистан",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
      link: "#",
    },
    {
      urlImg: "src/assets/imei.svg",
      title: "Регистрация IMEI в единой системе",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
      link: "#",
    },
    {
      urlImg: "src/assets/it-start.svg",
      title: "Проект “Международный технопарк IT-стартапов”",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
      link: "#",
    },
  ],
  ActivityButtonData: [
    {
      id: 1,
      name: "Проектное управление",
      icon: 'src/assets/doc-activity.svg',
    },
    {
      id: 2,
      name: "Телекоммуникации и связь",
      icon: 'src/assets/wifi-activity.svg',
    },
    {
      name: "Электронная промышленность",
      id: 3,
      icon: 'src/assets/chip-activity.svg',
    },
    {
      name: "IT - отрасль",
      id: 4,
      icon: 'src/assets/it-activity.svg',
    },
    {
      name: "Электронное производство",
      id: 5,
      icon: 'src/assets/setting-activity.svg',
    },
  ],
  ActivityBlockData: [
    {
      txt: 'Проектное управление',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
    },
    {
      txt: 'Телекоммуникации и связь',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
    },
    {
      txt: 'Электронная промышленность',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
    },
    {
      txt: 'IT - отрасль',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
    },
    {
      txt: 'Электронное производство',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
    },
  ]
};

const defSlice = createSlice({
  name: "aict",
  initialState,
  reducers: {
    toggleCount: (state) => {
      state.value += 1;
    },
  },
});

export const { toggleCount } = defSlice.actions;

export default defSlice.reducer;
