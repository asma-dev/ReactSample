/**
 * Error
 *
 * @package View
 * @author asma
 * @copyright 2015 asma All Rights Reserved.
 */

var React = require('react');

var errPage = React.createClass({
  render: function () {
    return (
      <div className="contents">
        <h1>{this.props.message}</h1>
        <h2>{this.props.error.status}</h2>
        <pre>{this.props.error.stack}</pre>
      </div>
    );
  }
});

module.exports = errPage;
