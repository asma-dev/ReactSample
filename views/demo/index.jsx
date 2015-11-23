/**
 * Sample
 *
 * @package View
 * @author asma
 * @copyright 2015 asma All Rights Reserved.
 */

var React = require('react');
var ReactBS = require('react-bootstrap');

var Content = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'ReactSample',
      outputWord: 'Hello World!!'
    };
  },
  render: function () {
    return (
      <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <title>{this.props.title}</title>
        <meta name="author" content="asma" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

        {/* styles */}
        <link type="text/css" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/demo.css" />
        {/* /styles */}

        {/* scripts */}
        <script charSet="UTF-8" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script charSet="UTF-8" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        {/* /scripts */}
      </head>
      <body>
        {/* header */}
        <ReactBS.ButtonGroup justified>
          <ReactBS.Button href="#">ボタン01</ReactBS.Button>
          <ReactBS.Button href="#">ボタン02</ReactBS.Button>
          <ReactBS.DropdownButton title="ドロップダウン" id="bg-justified-dropdown" data-toggle="dropdown">
            <ReactBS.MenuItem eventKey="1">リンク01</ReactBS.MenuItem>
            <ReactBS.MenuItem eventKey="2">リンク02</ReactBS.MenuItem>
          </ReactBS.DropdownButton>
        </ReactBS.ButtonGroup>
        {/* /header */}
        {/* container */}
        <div className="container-fluid">
          <h1 className="helloWorld">{this.props.outputWord}</h1>
        </div>
        {/* /container */}
      </body>
      </html>
    );
  }
});

module.exports = Content;
