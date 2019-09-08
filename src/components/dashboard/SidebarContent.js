import React from 'react';

class SidebarContent extends React.Component {

    render() {
        const childrens = React.Children.map(this.props.children, children =>
            React.cloneElement(children)
        );

        return (<div class="sidebar-content">

            <div class="sidebar-brand">
                <a href="#">{this.props.title}</a>
            </div>

            <div class="sidebar-header">
                <div class="user-pic">
                    <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/binoykr/react-admin-ui/master/public/imgs/user.jpg"
                        alt="User picture" />
                </div>
                <div class="user-info">
                    <span class="user-name">{this.props.userInfo.firstname}
                        <strong>{this.props.userInfo.lastname}</strong>
                    </span>
                    <span class="user-role">{this.props.userInfo.designation}</span>

                    <span class={this.props.userInfo.status === "Online" ? "user-status online" : "user-status offline"}>
                        <i class="fa fa-circle"></i>
                        <span>{this.props.userInfo.status}</span>
                    </span>

                </div>
            </div>

            {childrens}

        </div>);
    }
}

export default SidebarContent;