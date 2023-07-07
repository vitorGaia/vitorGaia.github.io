import trybeTunesThumb from './Images/trybeTunesThumb.png';
import pomodoroTimerThumb from './Images/pomodoroTimerThumb.png';
import storeManagerAPI from './Images/storeManagerAPIThumb.png';

const dataProjects = [
  {
    projectName: 'Trybe Tunes',
    deployLink: 'https://vitorgaia.github.io/project-trybetunes/#/',
    repositoryLink: 'https://github.com/vitorGaia/project-trybetunes',
    thumbNail: trybeTunesThumb,
    description: 'Uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Tudo feito ultilizando Javascript assíncrono, componentes de classe React e a API do Itunes.',
    usedSkills: ['javascript', 'react'],
  },
  {
    projectName: 'Store Manager API',
    deployLink: 'no deployed',
    repositoryLink: 'https://github.com/vitorGaia/store-manager-API',
    thumbNail: storeManagerAPI,
    description: 'Com a utilização do banco de dados MySQL, pude criar, visualizar, deletar e atualizar produtos e vendas. Além disso, destaco a implementação de testes para garantir a qualidade das funcionalidades desenvolvidas',
    usedSkills: ['javascript', 'nodejs', 'docker'],
  },
  {
    projectName: 'Pomodoro Timer',
    deployLink: 'https://vitorgaia.github.io/pomodoro-timer/',
    repositoryLink: 'https://github.com/vitorGaia/pomodoro-timer',
    thumbNail: pomodoroTimerThumb,
    description: 'Fiz este timer para um pequeno desafio da Trybe, onde poderiamos fazer nossos timers que seriam usados durante os intervalos das aulas. Durante o desenvolvimento decidi que usaria o timer também para estudar com o método pomodoro.',
    usedSkills: ['javascript', 'react'],
  },
];

export default dataProjects;
