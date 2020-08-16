(() => {
  const socialSections = document.getElementsByClassName('social__icons');

  for (let i = 0; i < socialSections.length; i++) {
    const socialSection = socialSections[i];

    socialSection.innerHTML = `
  <a class="social__icon icon--twitter" href="https://twitter.com/princi_ya" target="_blank"></a>
  <a class="social__icon icon--wordpress" href="http://princiya.com/blog" target="_blank"></a>
  <a class="social__icon icon--github" href="https://github.com/princiya" target="_blank"></a>
  <a class="social__icon icon--linkedin" href="https://www.linkedin.com/in/princiya-sequeira-0a545a34/" target="_blank"></a>
`;
  }
})();
