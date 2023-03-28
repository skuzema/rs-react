import React from 'react';

import CardList from '../cardList/CardList';
import TextField from '../../ui/TextField/TextField';
import TextArea from '../../ui/TextArea/TextArea';
import SelectField from '../../ui/SelectField/SelectField';
import CheckBoxField from '../../ui/CheckBoxField/CheckBoxField';
import SwitchField from '../../ui/SwitchField/SwitchField';

import './AddNewPostForm.css';

const initialState = {
  id: 0,
  author: '',
  title: '',
  post: '',
  post_date: '',
  select: '',
  check: true,
  gender: '',
  image: '',
};

type TProps = { [key: string]: string };
type TState = {
  data: typeof initialState;
  errors: { [key: string]: string };
  cards: (typeof initialState)[];
};
const switchOptions = ['Male', 'Female'];
const selectOptions = [
  { label: 'Twitter', value: '0' },
  { label: 'Facebook', value: '1' },
  { label: 'Instagram', value: '2' },
];

class AddNewPostForm extends React.Component<TProps, TState> {
  initialError = {
    author: '',
    title: '',
    post: '',
    post_date: '',
    select: '',
    check: '',
    gender: '',
    image: '',
  };

  private maxId: number;
  private authorInput: React.RefObject<HTMLInputElement>;
  private titleInput: React.RefObject<HTMLInputElement>;
  private postInput: React.RefObject<HTMLTextAreaElement>;
  private postDateInput: React.RefObject<HTMLInputElement>;
  private selectInput: React.RefObject<HTMLSelectElement>;
  private checkInput: React.RefObject<HTMLInputElement>;
  private switchInput: React.RefObject<HTMLInputElement>;
  private imageInput: React.RefObject<HTMLInputElement>;

  constructor(props: Readonly<TProps>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.authorInput = React.createRef();
    this.titleInput = React.createRef();
    this.postInput = React.createRef();
    this.postDateInput = React.createRef();
    this.selectInput = React.createRef();
    this.checkInput = React.createRef();
    this.switchInput = React.createRef();
    this.imageInput = React.createRef();

    this.maxId = 0;
    this.state = { data: initialState, errors: {}, cards: [] };
  }

  handleConfirm = () => {
    alert('Article has been created!');
  };

  checkFields() {
    const Errors = Object.create(this.initialError);

    let error = false;
    let error_msg = '';

    this.setState({ errors: Errors });

    // Check author field
    if (this.authorInput.current?.value.trim().length === 0) {
      error_msg =
        error_msg + (error_msg.length !== 0 ? ' ' : '') + "The field 'Author' should be filled!";
      error = true;
    }
    if (
      !(
        this.authorInput.current?.value.slice(0, 1) ===
        this.authorInput.current?.value.slice(0, 1).toUpperCase()
      )
    ) {
      error_msg =
        error_msg +
        (error_msg.length !== 0 ? ' ' : '') +
        'Author Name should start with uppercase!';
      error = true;
    }

    if (error_msg.length > 0) {
      Errors.author = error_msg;
    }

    // Check title
    if (this.titleInput.current?.value.trim().length === 0) {
      Errors.title = "The field 'Title' should be filled!";
      error = true;
    }

    // Check content
    if (this.postInput.current?.value.trim().length === 0) {
      Errors.post = "The field 'Article content' should be filled!";
      error = true;
    }

    // Check date
    if (this.postDateInput.current?.value.trim().length === 0) {
      Errors.post_date = "The field 'Date' should be filled!";
      error = true;
    }

    // Check select
    if (this.selectInput.current?.value.trim().length === 0) {
      Errors.select = "The field 'Select' should be filled!";
      error = true;
    }

    // Check image
    if (this.imageInput.current?.value.trim().length === 0) {
      Errors.image = 'Please select image file!';
      error = true;
    }

    if (error) {
      this.setState({ errors: Errors });
      return false;
    } else {
      return true;
    }
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const Errors = Object.create(this.initialError);

    const newItem: typeof initialState = {
      id: this.state.cards.length + 1,
      author: this.authorInput.current?.value || '',
      title: this.titleInput.current?.value || '',
      post: this.postInput.current?.value || '',
      post_date: this.postDateInput.current?.value || '',
      select: this.selectInput.current?.value || '',
      check: this.checkInput.current?.checked || false,
      gender: this.switchInput.current?.checked ? 'Male' : 'Female',
      image: this.imageInput.current?.value || '',
    };

    if (newItem.image) {
      const formData = new FormData();
      formData.append('file', newItem.image);
      // Make an API call to upload the file using formData
    }
    if (this.checkFields()) {
      this.setState(
        { ...this.state, cards: [...this.state.cards, newItem], errors: Errors },
        () => {
          alert('Data has been saved!');
        }
      );
      this.authorInput.current ? (this.authorInput.current.value = '') : undefined;
      this.titleInput.current ? (this.titleInput.current.value = '') : undefined;
      this.postInput.current ? (this.postInput.current.value = '') : undefined;
      this.postDateInput.current ? (this.postDateInput.current.value = '') : undefined;
      this.selectInput.current ? (this.selectInput.current.value = '') : undefined;
      this.checkInput.current ? (this.checkInput.current.checked = false) : undefined;
      this.switchInput.current?.checked ? 'Male' : 'Female';
      this.imageInput.current ? (this.imageInput.current.value = '') : undefined;
    }
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Author"
              name="author"
              error={this.state.errors.author}
              reference={this.authorInput}
            />
            <TextField
              label="Article title"
              name="title"
              error={this.state.errors.title}
              reference={this.titleInput}
            />
            <TextArea
              label="Article content"
              name="post"
              error={this.state.errors.post}
              reference={this.postInput}
              rows={5}
              cols={100}
            />
            <TextField
              label="Date"
              name="post_date"
              error={this.state.errors.post_date}
              reference={this.postDateInput}
              type="date"
            />
            <SelectField
              reference={this.selectInput}
              options={selectOptions}
              defaultOption="choose..."
              disabledOption
              error={this.state.errors.select}
              label="Select an option:"
              name="select"
            />
            <CheckBoxField
              error={this.state.errors.check}
              label="I consent to my personal data"
              name="check"
              reference={this.checkInput}
            />
            <SwitchField
              options={switchOptions}
              error={this.state.errors.switch}
              label=""
              name="gender"
              reference={this.switchInput}
            />
            <TextField
              label="Article picture"
              name="image"
              error={this.state.errors.image}
              reference={this.imageInput}
              type="file"
            />
            <div className="navbar-nav">
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
        <CardList data={this.state.cards} />
      </div>
    );
  }
}

export default AddNewPostForm;
