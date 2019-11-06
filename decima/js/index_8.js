class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('h3', null, 'Список дел'),
      React.createElement(TodoList, { items: this.state.items }),
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          { htmlFor: 'new-todo' },
          'Что нужно сделать?',
        ),
        React.createElement('input', {
          id: 'new-todo',
          onChange: this.handleChange,
          value: this.state.text,
        }),
        React.createElement(
          'button',
          null,
          'Добавить #',
          this.state.items.length + 1,
        ),
      ),
    );
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return React.createElement(
      'ul',
      null,
      this.props.items.map(item =>
        React.createElement('li', { key: item.id }, item.text),
      ),
    );
  }
}

ReactDOM.render(
  React.createElement(TodoApp, null),
  document.getElementById('todos-example'),
);

const vdiv = document.createElement('div');
vdiv.id = 'app';
document.body.appendChild(vdiv);

const app = new Vue({
  el: '#app',
  template: `
  <div id="vue">
    <h3>Список дел</h3>
    <ul>
      <li v-for="item in items" :key="item">{{item}}</li>
    </ul>
    <form @submit.prevent>
      <label for="new-todo">Что нужно сделать?</label>
      <input id="new-todo" v-model="text" @change="addItem">
      <button>Добавить #{{ items.length+1 }}</button>
    </form>
  </div>
  `,
  data(){
    return {
      items: [],
      text: ''
    }
  },
  methods: {
    addItem(){
      this.items.push(this.text);
      this.text = '';
    }
  }
});




