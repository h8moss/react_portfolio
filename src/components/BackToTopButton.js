import { Component } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default class BackToTopButton extends Component {

    constructor(props) {
        super(props);

        this.onScroll = this.onScroll.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            scale: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        let scale = window.scrollY > 100 ? 1 : 0;

        this.setState({
            scale: scale,
        });

    }

    render() {
        const { scale } = this.state;
        return (

            <a href='#'>
                <div className='fixed bottom-0 left-0
         bg-purple-700 m-5 w-10 h-10 rounded-3xl 
         flex align-middle items-center justify-center 
         transition-all' style={{ transform: `scale(${scale})` }}>
                    <FiArrowUp className='m-auto' size={20} />
                </div>

            </a>
        );
    }
}