import React from 'react';

import rootURL from '../../constants';

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <p>Checkout <code>react this repo on  <a href='https://github.com/chidimo/react-redux-base'>Github</a></code></p>

      <p>
        Also checkout <a href='https://github.com/chidimo/React-Redux-Starter'>React Redux Starter</a>.
        It also incorporates the following CI/CD infrastructures:
        <ol>
          <li><code>React testing library</code></li>
          <li><code>travis-ci</code></li>
          <li><code>AppVeyor</code></li>
          <li><code>coveralls</code></li>
          <li><code>codeclimate</code></li>
        </ol>
      </p>
    </section>
  );
};

export default About;
