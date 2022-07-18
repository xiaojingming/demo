import Scenes from '../../pages/Scenes/ScenesPage.vue';

export const scenesRoutes = [
  {
    name: 'scenes',
    path: '/scenes',
    component: Scenes,
    meta: {
      hasBar: true,
      title: '场景',
    },
  },
];
