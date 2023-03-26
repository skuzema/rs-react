import React from 'react';

import { CardProps } from '../../utils/CardProps';
import CardList from '../cardList/CardList';

import './AddNewPostForm.css';

const initialState = {
  id: 0,
  author: '',
  title: '',
  post: '',
  post_date: '',
  select: 0,
  check: true,
  gender: '',
  image: '',
};

class AddNewPostForm extends React.Component {
  switchOptions = ['Male', 'Female'];
  selectOptions = [
    { label: 'Twitter', value: 0 },
    { label: 'Facebook', value: 1 },
    { label: 'Instagram', value: 2 },
  ];

  maxId: number;

  authorInput: React.RefObject<string>;
  titleInput: React.RefObject<string>;
  postInput: React.RefObject<string>;
  postDateInput: React.RefObject<Date>;
  selectInput: React.RefObject<number>;
  checkInput: React.RefObject<boolean>;
  genderMaleInput: React.RefObject<boolean>;
  genderFemaleInput: React.RefObject<boolean>;
  imageInput: React.RefObject<string>;

  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.authorInput = React.createRef();
    this.titleInput = React.createRef();
    this.postInput = React.createRef();
    this.postDateInput = React.createRef();
    this.selectInput = React.createRef();
    this.checkInput = React.createRef();
    this.genderMaleInput = React.createRef();
    this.genderFemaleInput = React.createRef();
    this.imageInput = React.createRef();

    this.maxId = 0;
    this.state = { data: initialState, errors: {}, cards: [] };
  }

  handleConfirm = () => {
    alert('Article has been created!');
  };

  handleSubmit(event: any) {
    event.preventDefault();

    const newItem: typeof initialState = {
      id: this.state.cards.length + 1,
      author: this.authorInput.current.value || '',
      title: this.titleInput.current.value || '',
      post: this.postInput.current.value || '',
      post_date: this.postDateInput.current.value || '',
      select: this.selectInput.current.value || '',
      check: this.checkInput.current?.checked || false,
      gender: this.genderMaleInput.current.checked ? 'Male' : 'Female',
      image: this.imageInput.current.value || '',
    };

    console.log(JSON.stringify(newItem));

    if (newItem.image) {
      const formData = new FormData();
      formData.append('file', newItem.image);
      // Make an API call to upload the file using formData
    }

    this.setState({ ...this.state, cards: [...this.state.cards, newItem] });

    this.authorInput.current.value = '';
    this.titleInput.current.value = '';
    this.postInput.current.value = '';
    this.postDateInput.current.value = '';
    this.selectInput.current.checked = '';
    this.checkInput.current.checked = false;
    this.genderMaleInput.current.checked = true;
    this.genderFemaleInput.current.checked = false;
    this.imageInput.current.value = '';
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Author: </label>
              <input type="text" ref={this.authorInput} />
            </div>
            <div>
              <label>Article title: </label>
              <input type="text" ref={this.titleInput} />
            </div>
            <div>
              <label>Article content: </label>
              <textarea ref={this.postInput} />
            </div>
            <div>
              <label>Date:</label>
              <input type="date" ref={this.postDateInput} />
            </div>
            <div>
              <label>Select an option:</label>
              <select ref={this.selectInput}>
                {this.selectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>I consent to my personal data</label>
              <input type="checkbox" ref={this.checkInput} />
            </div>
            <div>
              Male/female:
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    defaultChecked={true}
                    ref={this.genderMaleInput}
                  />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" ref={this.genderFemaleInput} />
                  Female
                </label>
              </div>
            </div>
            <div>
              <label>
                Article picture:
                <input type="file" ref={this.imageInput} />
              </label>
            </div>
            <div className="navbar-nav">
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
        <CardList cardData={this.state.cards} onConfirm={this.handleConfirm} />
      </div>
    );
  }
}

export default AddNewPostForm;
