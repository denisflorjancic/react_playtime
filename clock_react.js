/*
React DOM compares the element and its children to the previous one,
and updates the one whose content has changed
*/

function tick() {
  const element = (
    <div>
      <h3>It is sunny, and this title won't change, only the time will.</h3>
      <h4>Time: {new Date().toLocaleTimeString()}.</h4>
    </div>
  );
  ReactDOM.render(element, document.getElementById('clock_test'));}

setInterval(tick, 1000);

