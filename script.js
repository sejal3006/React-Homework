function Started() {
    const headingStyle = {
      fontFamily: 'Algerian'
    };
  
    return (
      React.createElement('div', null,
        React.createElement('h1', { style: headingStyle }, 'Topics Covered'),
        React.createElement('p', null, 'The following is the list of all the topics we cover in MDN learning area.')
      )
    );
  }
  
  function GettingStarted() { 
    return (
      React.createElement('div', null,
        React.createElement('a', { href: 'https://developer.mozilla.org/', target: '_blank' }, 'Getting Started with the web'),
        React.createElement('p', null, 'Provides a practical introduction to web development for complete beginners.')
      )
    );
  }
  

  function HTMLTopic() {
    return (
      React.createElement('div', null,
        React.createElement('a', { href: 'https://developer.mozilla.org/', target: '_blank' }, 'HTML -- Structuring the Web'),
        React.createElement('p', null, 'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.')
      )
    );
  }
  

  function CSSTopic() {
    return (
      React.createElement('div', null,
        React.createElement('a', { href: 'https://developer.mozilla.org/', target: '_blank' }, 'CSS -- Styling the Web'),
        React.createElement('p', null, 'CSS is the language that we use to control our web content\'s style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.')
      )
    );
  }
  

  function App() {
    return (
      React.createElement('div', null,
        React.createElement(Started),
        React.createElement(GettingStarted),
        React.createElement(HTMLTopic),
        React.createElement(CSSTopic)
      )
    );
  }
  
 
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
  