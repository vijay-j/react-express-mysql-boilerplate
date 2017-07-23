const React = require('react');
const ReactDOM = require('react-dom');

require('./stylesheets/main.scss');

class App extends React.Component {
    render() {
        return (<div><h1>It works!</h1></div>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

module.exports = App;
