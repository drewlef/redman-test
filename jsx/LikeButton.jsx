var React = require('react')

module.exports = React.createClass({
  displayName: 'LikeButton.jsx',
  handleClick: function (event) {
    event.target.value = 'LIKED'
    event.target.disabled = true
    event.target.className += ' Liked'
  },
  render: function() {
    return (
      <input value='LIKE' onClick={this.handleClick} type='button' className='LikeButton'/>
    )
  }
})
