'use strict';

function Homepage() {
  return (
    <React.Fragment>
      Hello!<br/>
      <a href="/cards">Click here to view all cards.</a><br/>
      <a href="/about">About Megan</a><br/>
      <img src="/static/img/balloonicorn.jpg"/>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
