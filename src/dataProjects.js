import trybeTunesThumb from './Images/trybeTunesThumb.jpg';
import pomodoroTimerThumb from './Images/pomodoroTimerThumb.jpg';
import storeManagerAPIThumb from './Images/storeManagerAPIThumb.jpg';
import trybeWalletThumb from './Images/trybeWalletThumb.jpg';
import onlineStoreThumb from './Images/onlineStoreThumb.jpg';
import blogsAPIThumb from './Images/blogsAPIThumb.jpg';

const dataProjects = [
  {
    projectName: 'Online Store',
    deployLink: 'https://gaia-online-store.vercel.app/',
    repositoryLink: 'https://github.com/vitorGaia/online-store',
    thumbNail: onlineStoreThumb,
    description: 'Loja online com carrinho de compras, onde é possível adicionar, remover e alterar a quantidade de produtos. Além disso, é possível avaliar cada produto. Para isso ultilizei Next.js, React, Context API, Tailwind CSS e a API do Mercado Livre.',
    usedSkills: ['javascript', 'react', 'tailwind-css'],
  },
  {
    projectName: 'Blogs API',
    deployLink: 'no deployed',
    repositoryLink: 'https://github.com/vitorGaia/blogs-API',
    thumbNail: blogsAPIThumb,
    description: 'API temática de blog, onde é possível criar, visualizar, deletar e atualizar posts e usuários. Construída seguindo os conceitos da arquitetura MSC, com a utilização do banco de dados MySQL e a biblioteca de ORM Sequelize.',
    usedSkills: ['javascript', 'nodejs', 'docker'],
  },
  {
    projectName: 'Trybe Tunes',
    deployLink: 'https://vitorgaia.github.io/project-trybetunes/#/',
    repositoryLink: 'https://github.com/vitorGaia/project-trybetunes',
    thumbNail: trybeTunesThumb,
    description: 'Uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Tudo feito ultilizando Javascript assíncrono, componentes de classe React e a API do Itunes.',
    usedSkills: ['javascript', 'react', 'css3'],
  },
  {
    projectName: 'Store Manager API',
    deployLink: 'no deployed',
    repositoryLink: 'https://github.com/vitorGaia/store-manager-API',
    thumbNail: storeManagerAPIThumb,
    description: 'Com a utilização do banco de dados MySQL, pude criar, visualizar, deletar e atualizar produtos e vendas. Além disso, destaco a implementação de testes para garantir a qualidade das funcionalidades desenvolvidas',
    usedSkills: ['javascript', 'nodejs', 'docker'],
  },
  {
    projectName: 'Trybe Wallet',
    deployLink: 'https://vitorgaia.github.io/project-trybewallet/#/',
    repositoryLink: 'https://github.com/vitorGaia/project-trybewallet',
    thumbNail: trybeWalletThumb,
    description: 'Aplicação de apenas uma página para controle de gastos, onde é possível adicionar, remover, editar gastos, e converter as diversas moedas além de visualizar o total de gastos. Tudo isso ultilizando React, Redux e Jest para os testes.',
    usedSkills: ['javascript', 'react', 'redux', 'jest', 'css3'],
  },
  {
    projectName: 'Pomodoro Timer',
    deployLink: 'https://vitorgaia.github.io/pomodoro-timer/',
    repositoryLink: 'https://github.com/vitorGaia/pomodoro-timer',
    thumbNail: pomodoroTimerThumb,
    description: 'Fiz este timer para um pequeno desafio da Trybe, onde poderiamos fazer nossos timers que seriam usados durante os intervalos das aulas. Durante o desenvolvimento decidi que usaria o timer também para estudar com o método pomodoro.',
    usedSkills: ['javascript', 'react', 'css3'],
  },
];

export default dataProjects;
