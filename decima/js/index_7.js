class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return React.createElement(
      'div',
      null,
      'Секунды: ',
      this.state.seconds
    );
  }
}
ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));

const vdiv = document.createElement('div');
vdiv.id = "app";
document.body.appendChild(vdiv);



const app = new Vue({
  el:"#app",
  template: `<div>Секунды: {{seconds}}</div>`,
  data(){
    return{
      interval: null,
      seconds: 0
    }
  },
  created () {
    this.interval = setInterval(()=>{
      this.tick();
    },1000)
  },
  methods: {
    tick(){
      this.seconds++;
    }
  },
  beforeDestroy () {
    clearInterval(this.interval);
  }
})


