function formatName(user) {
  return `${user.fisrtName} ${user.lastName}`
}
const user = {
  fisrtName: 'Denis',
  lastName: 'Florjancic',
  // statusImg: 'img/gold_coin.jpg',
  isMember: true
}

// === JSX, syntax extension to JavaScript
// === JSX, tags may contain children 
// === JSX, everything is converted to a string before render, helps preventing XSS (cross-site-scripting) attacks
 
const element = (
  <div>
    <h1>
      Hello, {formatName(user)}!
    </h1>
    <h2>
      Staus: {user.isMember ? 'Golden account' : 'Free account'}
    </h2>
  </div>
);

// === Adding Javascript expression in an attribute === 
// === React DOM uses camelCase property naming, class > className, tabindex > tabIndex
// const img = (
//   <img src={user.statusImg}></img>
// );

ReactDOM.render (
  element,
  document.getElementById('user_id')
);  
