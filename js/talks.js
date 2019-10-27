const talks = [
  {
    conference: 'React Rally',
    year: 2019,
    title: 'Debugging the Debugger',
    description:
      'Debugging the Firefox Devtools Debugger which is written using React and Redux',
    topics: ['React', 'Open Source', 'Community'],
    place: 'Salt Lake City, Utah, USA',
    slides: '',
    video: '',
    feedback: []
  },
  {
    conference: 'Holy JS',
    year: 2018,
    title: 'Visualising third party trackers',
    description: 'Visualising third party trackers using Lightbeam',
    topics: ['Lightbeam', 'Open Source', 'Visualisations', 'Privacy'],
    place: 'Moscow, Russia',
    slides: '',
    video: '',
    feedback: []
  },
  {
    conference: 'O`Reilly FluentConf',
    year: 2018,
    title: 'Rebuilding a browser extension for Privacy',
    description: 'Visualising third party trackers using Lightbeam',
    topics: ['Lightbeam', 'Open Source', 'Visualisations'],
    place: 'San Jose, California, USA',
    slides: '',
    video: '',
    feedback: []
  },
  {
    conference: 'MozFest',
    year: 2017,
    title: 'Lightbeam',
    description: 'Lightbeam - privacy browser extension',
    topics: ['Lightbeam', 'Open Source'],
    place: 'London',
    slides: '',
    video: '',
    feedback: []
  },
  {
    conference: 'FrontEnd Union Conf',
    year: 2016,
    title: 'Natural user interfaces',
    description: 'Natural user interfaces using JavaSCript',
    topics: ['JavaScript', 'WebVR'],
    place: 'Vilnius, Lithuania',
    slides: '',
    video: '',
    feedback: []
  },
  {
    conference: 'JSConf Budapest',
    year: 2016,
    title: 'Natural user interfaces',
    description: 'Natural user interfaces using JavaSCript',
    topics: ['JavaScript', 'WebVR'],
    place: 'Budapest, Hungary',
    slides: '',
    video: '',
    feedback: []
  },
  {
    conference: 'JSUnConf',
    year: 2016,
    title: 'Natural user interfaces',
    description: 'Natural user interfaces using JavaSCript',
    topics: ['JavaScript', 'WebVR'],
    place: 'Hamburg, Germany',
    slides: '',
    video: '',
    feedback: []
  },
  {
    conference: 'Grace Hopper Conference',
    year: 2015,
    title: 'Technical paper, Sci-Fi secrets',
    description: 'Technical paper, Sci-Fi secrets',
    topics: ['JavaScript', 'WebVR'],
    place: 'Bangalore, India',
    slides: '',
    video: '',
    feedback: []
  },
  {
    conference: 'JSConf Asia',
    year: 2015,
    title: 'Web based 3D camera simulator for perceptual computing',
    description: 'Web based 3D camera simulator for perceptual computing',
    topics: ['JavaScript', 'WebVR'],
    place: 'Singapore',
    slides: '',
    video: '',
    feedback: []
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
        <a href="${talk.video}">Video</a>
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
