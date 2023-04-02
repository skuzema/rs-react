import React, { useState, useEffect, useRef } from 'react';

import CardList from '../cardList/CardList';
import TextField from '../../ui/TextField/TextField';
import TextArea from '../../ui/TextArea/TextArea';
import SelectField from '../../ui/SelectField/SelectField';
import CheckBoxField from '../../ui/CheckBoxField/CheckBoxField';
import SwitchField from '../../ui/SwitchField/SwitchField';
import { TPCardForm } from '../../utils/CardProps';

import './AddNewPostForm.css';

const AddNewPostForm = () => {
  const switchOptions = ['Male', 'Female'];
  const selectOptions = [
    { label: 'Twitter', value: '0' },
    { label: 'Facebook', value: '1' },
    { label: 'Instagram', value: '2' },
  ];

  const initialState: TPCardForm = {
    id: 0,
    author: '',
    title: '',
    post: '',
    post_date: '',
    select: '',
    check: true,
    gender: '',
    image: '',
    img_file: '',
  };

  const initialError = {
    author: '',
    title: '',
    post: '',
    post_date: '',
    select: '',
    check: '',
    gender: '',
    image: '',
  };

  const authorInput = useRef<HTMLInputElement>(null);
  const titleInput = useRef<HTMLInputElement>(null);
  const postInput = useRef<HTMLTextAreaElement>(null);
  const postDateInput = useRef<HTMLInputElement>(null);
  const selectInput = useRef<HTMLSelectElement>(null);
  const checkInput = useRef<HTMLInputElement>(null);
  const switchInput = useRef<HTMLInputElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<typeof initialError>(initialError);
  const [cards, setCards] = useState<(typeof initialState)[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [timedId, setTimedId] = useState<ReturnType<typeof setTimeout> | undefined>();

  useEffect(() => {
    return () => {
      clearTimeout(timedId);
    };
  }, [formSubmitted, timedId]);

  const checkFields = () => {
    const Errors = Object.create(initialError);

    let error = false;
    let error_msg = '';

    setErrors(Errors);

    // Check author field
    if (authorInput.current?.value.trim().length === 0) {
      error_msg =
        error_msg + (error_msg.length !== 0 ? ' ' : '') + "The field 'Author' should be filled!";
      error = true;
    }
    if (
      !(
        authorInput.current?.value.slice(0, 1) ===
        authorInput.current?.value.slice(0, 1).toUpperCase()
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
    if (titleInput.current?.value.trim().length === 0) {
      Errors.title = "The field 'Title' should be filled!";
      error = true;
    }

    // Check content
    if (postInput.current?.value.trim().length === 0) {
      Errors.post = "The field 'Article content' should be filled!";
      error = true;
    }

    // Check date
    if (postDateInput.current?.value.trim().length === 0) {
      Errors.post_date = "The field 'Date' should be filled!";
      error = true;
    }

    // Check select
    if (selectInput.current?.value.trim().length === 0) {
      Errors.select = "The field 'Select' should be filled!";
      error = true;
    }

    // Check image
    if (imageInput.current?.value.trim().length === 0) {
      Errors.image = 'Please select image file!';
      error = true;
    }

    if (error) {
      setErrors(Errors);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Errors = Object.create(initialError);

    const newItem: typeof initialState = {
      id: cards.length + 1,
      author: authorInput.current?.value || '',
      title: titleInput.current?.value || '',
      post: postInput.current?.value || '',
      post_date: postDateInput.current?.value || '',
      select: selectInput.current?.value || '',
      check: checkInput.current?.checked || false,
      gender: switchInput.current?.checked ? 'Male' : 'Female',
      image: '',
      img_file: imageInput.current?.files?.[0] ? imageInput.current?.files?.[0] : '',
    };

    if (checkFields()) {
      setCards([...cards, newItem]);
      setErrors(Errors);
      setFormSubmitted(true);
      setTimedId(setTimeout(() => setFormSubmitted(false), 3000));

      authorInput.current ? (authorInput.current.value = '') : undefined;
      titleInput.current ? (titleInput.current.value = '') : undefined;
      postInput.current ? (postInput.current.value = '') : undefined;
      postDateInput.current ? (postDateInput.current.value = '') : undefined;
      selectInput.current ? (selectInput.current.value = '') : undefined;
      checkInput.current ? (checkInput.current.checked = false) : undefined;
      switchInput.current?.checked ? 'Male' : 'Female';
      imageInput.current ? (imageInput.current.value = '') : undefined;
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Author"
            name="author"
            error={errors.author}
            reference={authorInput}
            accept={''}
          />
          <TextField
            label="Article title"
            name="title"
            error={errors.title}
            reference={titleInput}
            accept={''}
          />
          <TextArea
            label="Article content"
            name="post"
            error={errors.post}
            reference={postInput}
            rows={5}
            cols={100}
          />
          <TextField
            label="Date"
            name="post_date"
            error={errors.post_date}
            reference={postDateInput}
            type="date"
            accept={''}
          />
          <SelectField
            reference={selectInput}
            options={selectOptions}
            defaultOption="choose..."
            disabledOption
            error={errors.select}
            label="Select an option:"
            name="select"
          />
          <CheckBoxField
            error={errors.check}
            label="I consent to my personal data"
            name="check"
            reference={checkInput}
          />
          <SwitchField
            options={switchOptions}
            error={errors?.gender}
            label=""
            name="gender"
            reference={switchInput}
          />
          <TextField
            label="Article picture"
            name="image"
            error={errors.image}
            reference={imageInput}
            type="file"
            accept="image/gif, image/jpeg, image/png"
          />
          <div className="navbar-nav">
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
      {formSubmitted && <div className="form-submit">Card has been saved!</div>}
      <CardList data={cards} />
    </div>
  );
};

export default AddNewPostForm;
