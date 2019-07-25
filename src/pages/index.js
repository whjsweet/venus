import React, { PureComponent } from 'react';
import { Button } from "antd";
import { connect } from 'react-redux';

@connect(({ number }) => ({
    number: number
}))
export default class Index extends PureComponent {
    constructor(props) {
        super(props);
    }

    onClick() {
        const { dispatch } = this.props;
        dispatch({
            type: 'increment'
        });
    }

    render() {
        const { number } = this.props;
        return (
            <div>
                <div>Number: {number}</div>
                <Button onClick={() => this.onClick()}>Hello World</Button>
            </div >
        );
    }
}
