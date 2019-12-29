const talks = [
  {
    conference: 'React Rally',
    year: 2019,
    title: 'Debugging the Debugger',
    description:
      'Debugging the Firefox Devtools Debugger which is written using React and Redux',
    topics: ['React', 'Open Source', 'Community'],
    place: 'Salt Lake City, Utah, USA',
    slides:
      'https://docs.google.com/presentation/d/13vI7KepXN2Zm-mHm3mfYh7hGrYg1r_XFFUXWSPNjj8s/edit?usp=sharing',
    video: 'https://www.youtube.com/watch?v=QklMZaObKY4',
    feedback:
      'https://dev.to/manjula_dube/must-watch-javascript-2019-tech-talks-talks-by-awesome-women-in-tech-from-2019-44nf'
  },
  {
    conference: 'ReactiveConf',
    year: 2019,
    title: 'Debugging the Debugger',
    description:
      'Debugging the Firefox Devtools Debugger which is written using React and Redux',
    topics: ['React', 'Open Source', 'Community'],
    place: 'Prague, Czech Republic',
    slides:
      'https://docs.google.com/presentation/d/13vI7KepXN2Zm-mHm3mfYh7hGrYg1r_XFFUXWSPNjj8s/edit?usp=sharing',
    video: 'https://www.youtube.com/watch?v=tRL9WT5Im3c',
    feedback: 'https://twitter.com/ReactiveConf/status/1204110969875714048'
  },
  {
    conference: 'Holy JS',
    year: 2018,
    title: 'Visualising third party trackers',
    description: 'Visualising third party trackers using Lightbeam',
    topics: ['Lightbeam', 'Open Source', 'Visualisations', 'Privacy'],
    place: 'Moscow, Russia',
    slides:
      'https://docs.google.com/presentation/d/1AODuaZM-KD1N4X9qJpThx-_ERGAJjvbXrjPpu_749EY/edit?usp=sharing',
    video: '',
    feedback: 'https://twitter.com/HolyJSconf/status/1066609380836155392'
  },
  {
    conference: 'O`Reilly FluentConf',
    year: 2018,
    title: 'Rebuilding a browser extension for Privacy',
    description: 'Visualising third party trackers using Lightbeam',
    topics: ['Lightbeam', 'Open Source', 'Visualisations'],
    place: 'San Jose, California, USA',
    slides:
      'https://docs.google.com/presentation/d/177xUHWmkFifH9CaZa2QxvwzDhTkzqG0nHeuvfum9yu4/edit?usp=sharing',
    video:
      'https://www.oreilly.com/library/view/fluent-conference-/9781492026037/video320949.html',
    feedback:
      'https://princiya777.wordpress.com/2018/06/22/oreilly-fluentconf-2018/'
  },
  {
    conference: 'Web Summer Camp, 2017 Croatia',
    year: 2017,
    title: 'Workshop - WebRTC - Peer to peer Web',
    description: 'Web of things - Peer to peer Web',
    topics: ['WebRTC', 'Workshop'],
    place: 'Croatia',
    slides: 'https://princiya777.wordpress.com/category/websc/',
    video: '',
    feedback: ''
  },
  {
    conference: 'MozFest',
    year: 2017,
    title: 'Lightbeam',
    description: 'Lightbeam - privacy browser extension',
    topics: ['Lightbeam', 'Open Source'],
    place: 'London',
    slides:
      'https://docs.google.com/presentation/d/1jL7bzMAR0c80wVoS7csUzKfrG3CgpTXILSAdiUqWQQc/edit?usp=sharing',
    video: '',
    feedback:
      'https://twitter.com/search?q=mozfest%20(from%3Aprinci_ya)&src=typed_query'
  },
  {
    conference: 'FrontEnd Union Conf',
    year: 2016,
    title: 'Natural user interfaces',
    description: 'Natural user interfaces using JavaSCript',
    topics: ['JavaScript', 'WebVR'],
    place: 'Vilnius, Lithuania',
    slides:
      'https://docs.google.com/presentation/d/1WFRuI7uupATNuT6UlG73cJAK22ovFNhHwGCh_uBLiI0/edit?usp=sharing',
    video: '',
    feedback: 'https://twitter.com/frontend_union/status/769483850837819392'
  },
  {
    conference: 'JSConf Budapest',
    year: 2016,
    title: 'Natural user interfaces',
    description: 'Natural user interfaces using JavaSCript',
    topics: ['JavaScript', 'WebVR'],
    place: 'Budapest, Hungary',
    slides:
      'https://docs.google.com/presentation/d/1xEhA5d01M2l0NyopwDD_hDwNY7au_Sxk_Lcz4_dDA8k/edit?usp=sharing',
    video: 'https://youtu.be/GiQuSiZOGww',
    feedback: []
  },
  {
    conference: 'JSUnConf',
    year: 2016,
    title: 'Natural user interfaces',
    description: 'Natural user interfaces using JavaSCript',
    topics: ['JavaScript', 'WebVR'],
    place: 'Hamburg, Germany',
    slides:
      'https://docs.google.com/presentation/d/1ycL5J9KeVFkafm3qw6j4wCHRm3BO9aowgxHT7csT5sM/edit?usp=sharing',
    video: '',
    feedback:
      'https://princiya777.wordpress.com/2016/04/24/jsunconf-23-24-april-2016-hamburg/'
  },
  {
    conference: 'CSV Conference',
    year: 2016,
    title: 'Data visualisations using D3.js and C++',
    description: 'Data visualisations',
    topics: ['Visualisations', 'D3.js'],
    place: 'Berlin, Germany',
    slides:
      'https://docs.google.com/presentation/d/1kfrMFkEIXHqCRApoR1LNp6li5j5LCxStmGc2cs7VV6c/edit?usp=sharing',
    video: '',
    feedback: ''
  },
  {
    conference: 'Grace Hopper Conference',
    year: 2015,
    title: 'Technical paper, Sci-Fi secrets',
    description: 'Technical paper, Sci-Fi secrets',
    topics: ['JavaScript', 'WebVR'],
    place: 'Bangalore, India',
    slides:
      'https://onedrive.live.com/view.aspx?resid=50F2C110613B9CF!988&ithint=file%2cdocx&authkey=!AFy_rbfbbmQ03Ok',
    video: 'https://youtu.be/erSkS2l__lc',
    feedback: ''
  },
  {
    conference: 'JSConf Asia',
    year: 2015,
    title: 'Web based 3D camera simulator for perceptual computing',
    description: 'Web based 3D camera simulator for perceptual computing',
    topics: ['JavaScript', 'WebVR'],
    place: 'Singapore',
    slides:
      'https://docs.google.com/presentation/d/1iA0m4JyN1wfRmW9UuVWwW9gnG9nWFmJV4IzcMtn24ps/edit?usp=sharing',
    video: 'https://youtu.be/vgWonzhZIww',
    feedback: 'https://twitter.com/codepo8/status/667173447219306496'
  }
];

function loadTalks(value) {
  let talkArray = talks;

  if (value) {
    talkArray = talks.filter((talk, index) => index < value);
  }

  const talkDivs = talkArray.map(
    talk => `
    <div class="talk">
      <div class="talk__title">${talk.title}</div>
      <div class="talk__metadata">
        <span class="talk__year">${talk.year}</span>
        <span class="talk__conference">${talk.conference}</span>
        <span class="talk__place">${talk.place}</span>
      </div>
      <div class="talk__links">
        <a href="${talk.slides}">Slides</a>
        <a href="${talk.video}">${talk.video && 'Video'}</a>
        <a href="${talk.feedback}">${talk.feedback && 'Feedback'}</a>
      </div>
    </div>
  `
  );

  document.getElementById('section-talks').innerHTML = `
    <section class="section__talks">
      ${talkDivs.join('')}
    </section>
  `;
}
