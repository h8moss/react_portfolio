import { Component } from "react";
import TextWritingAnimation from "./TextWritingAnimation";

class Description extends Component {
    constructor(props) {
        super(props);

        this.isDone = this.isDone.bind(this);
        this.isActive = this.isActive.bind(this);
        this.onDone = this.onDone.bind(this);


        this.state = {
            currentIndex: 0,
        }
    }
    divs = [
        {
            className: '',
            text: 'I am a software developer with skills in',
            trailingSpace: true,
        },
        {
            className: 'font-bold text-blue-400',
            text: 'Flutter',
        },
        {
            className: '',
            text: ', ',
            trailingSpace: true,
        },
        {
            className: 'font-bold text-amber-500',
            text: 'Javascript'
        },
        {
            className: '',
            text: ', ',
            trailingSpace: true,
        },
        {
            className: 'font-bold text-blue-600',
            text: 'C#'
        },
        {
            className: '',
            text: ', ',
            trailingSpace: true,
        },
        {
            className: 'font-bold text-red-600',
            text: 'Python'
        },
        {
            className: '',
            text: ' and ',
            trailingSpace: true,
            leadingSpace: true,
        },
        {
            className: 'font-bold text-purple-500',
            text: 'C++'
        },

    ];

    buildTextWritingAnimation({ className, text }, index) {
        return (
            < span className={className} >
                <TextWritingAnimation
                    text={text}
                    timing={50}
                    done={index < this.state.currentIndex}
                    active={index <= this.state.currentIndex}
                    onDone={this.onDone}
                />
            </span >
        );
    }

    render() {

        const textWritingAnimations = this.divs.map((object, index) => {
            {/* add leading/trailing spaces */ }
            let leading = object.leadingSpace === true ? <span>&nbsp;</span> : null;
            let trailing = object.trailingSpace === true ? <span>&nbsp;</span> : null;

            return (
                <div className="flex flex-row" key={`${index}:${this.state.currentIndex}`} >
                    {leading}
                    {this.buildTextWritingAnimation(object, index)}
                    {trailing}
                </div>
            );
        });

        return (
            <div className="flex flex-row text-xl content-center mx-auto flex-wrap justify-center" >
                {textWritingAnimations}
            </div>
        )
    }

    isDone(index) { return index < this.state.currentIndex; }

    isActive(index) { return index <= this.state.currentIndex; }

    onDone() {
        this.setState((state, props) => ({
            currentIndex: state.currentIndex + 1,
        }));
    }

}

export default Description;

