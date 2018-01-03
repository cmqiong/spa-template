const ROUTERMAP = [
  {
    path: '/question/list',
    name: 'question-list',
    component(resolve) {
      require(['../../pages/question/list/list.vue'], resolve);
    },
    meta: { scrollToTop: true },
  },
  // {
  //   path: '/question/modify',
  //   name: 'question-modify',
  //   component(resolve) {
  //     require(['../../pages/question/list/list.vue'], resolve);
  //   },
  //   meta: { scrollToTop: true },
  // },
];

export default {
  ROUTERMAP,
};
