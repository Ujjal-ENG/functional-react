import React, { Component } from 'react';

export default class UseEffectClass extends Component {
    state = {
        count: 0,
        date: new Date()
    };

    componentDidMount() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
        setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
    }

    addClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };

    tick = () => {
        this.setState(() => ({
            date: new Date()
        }));
    };
    render() {
        const { count, date } = this.state;
        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type="button" onClick={this.addClick}>
                        Click in the Class Component {count}
                    </button>
                </p>
            </div>
        );
    }
}
