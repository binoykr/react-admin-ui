import React from 'react';

class ToolbarDropdownItem extends React.Component {

  render() {
   
    const iconClass = this.props.icon + " " + this.props.color + " white circle";

    return (

      <a class="item-group" href="javascript:void(0)" role="menuitem">
        <div class="media">
          <div class="pr-10">
            <i class={iconClass}></i>
          </div>
          <div class="body">
            <h6 class="heading">{this.props.heading}</h6>
            <time class="meta" datetime="2018-06-12T20:50:48+08:00">{this.props.meta}</time>
          </div>
        </div>
      </a>

    );
  }
}

export default ToolbarDropdownItem;