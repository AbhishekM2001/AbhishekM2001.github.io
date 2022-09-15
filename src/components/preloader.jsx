import React, { Component } from 'react';
import $ from 'jquery';

class Preloader extends Component {
  componentDidMount() {
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });
  }

  render() {
    return <div id="preloader"></div>;
  }
}

export default Preloader;



