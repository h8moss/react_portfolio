import React from "react";

class TextWritingAnimation extends React.Component {
    constructor(props) {
        super(props);

        this.addLetter = this.addLetter.bind(this);

        this.state = {
            currentText: props.done === true ? props.text : '',
        };
    }

    render() {

        const currentText = this.state.currentText;

        return (
            <div>
                <p>
                    {currentText}
                </p>
            </div>
        );
    }

    componentDidMount() {

        let { timing, active, done } = this.props;

        if (active !== false && done !== true) {
            this.timer = setInterval(this.addLetter, timing)
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    addLetter() {
        const { text, onDone } = this.props;
        let { currentText } = this.state;

        currentText += text[currentText.length];
        this.setState({
            currentText: currentText,
        })
        if (text === currentText) {
            clearInterval(this.timer);
            if (onDone !== undefined)
                onDone()
            return;
        }
    }
}

export default TextWritingAnimation;