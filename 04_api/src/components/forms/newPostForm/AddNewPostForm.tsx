import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import CardList from '../cardList/CardList';
import TextField from '../../ui/TextField/TextField';
import TextArea from '../../ui/TextArea/TextArea';
import SelectField from '../../ui/SelectField/SelectField';
import CheckBoxField from '../../ui/CheckBoxField/CheckBoxField';
import SwitchField from '../../ui/SwitchField/SwitchField';
import { TPCardForm } from '../../utils/interfaces';

import './AddNewPostForm.css';

const ACTUAL__DATE = new Date();
const TEXT__REGEXP = new RegExp(/[A-Za-z]{3,}/);

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

const AddNewPostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TPCardForm>({ mode: 'onSubmit' });

  const switchOptions = ['Male', 'Female'];
  const selectOptions = [
    { label: 'Twitter', value: '0' },
    { label: 'Facebook', value: '1' },
    { label: 'Instagram', value: '2' },
  ];

  const [cards, setCards] = useState<(typeof initialState)[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [timedId, setTimedId] = useState<ReturnType<typeof setTimeout> | undefined>();

  useEffect(() => {
    return () => {
      clearTimeout(timedId);
    };
  }, [formSubmitted, timedId]);

  const onFormSubmit = (data: TPCardForm) => {
    const newItem: typeof initialState = {
      id: cards.length + 1,
      author: data.author,
      title: data.title,
      post: data.post,
      post_date: data.post_date,
      select: data.select,
      check: data.check,
      gender: data.gender ? 'Female' : 'Male',
      img_file: data.img_file[0],
      image: '',
    };

    setFormSubmitted(true);
    setCards([...cards, newItem]);
    setTimedId(setTimeout(() => setFormSubmitted(false), 3000));
    reset();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <TextField
            label="Author"
            name="author"
            error={errors.author}
            register={{
              ...register('author', {
                required: 'The field "Author" should be filled!',
                pattern: { value: TEXT__REGEXP, message: 'Enter letters' },
                minLength: { value: 3, message: 'Enter 3 or more characters' },
              }),
            }}
          />
          <TextField
            label="Article title"
            name="title"
            error={errors.title}
            register={{
              ...register('title', {
                required: 'The field "Title" should be filled!',
                pattern: { value: TEXT__REGEXP, message: 'Enter letters' },
                minLength: { value: 3, message: 'Enter 3 or more characters' },
              }),
            }}
          />
          <TextArea
            label="Article content"
            name="post"
            error={errors.post}
            rows={5}
            cols={100}
            register={{
              ...register('post', {
                required: 'The field "Article content" should be filled!',
              }),
            }}
          />
          <TextField
            label="Date"
            name="post_date"
            error={errors.post_date}
            type="date"
            register={{
              ...register('post_date', {
                required: 'The field "Date" should be filled!',
                validate: (date) =>
                  new Date(date) < ACTUAL__DATE || `Date should not be in future!`,
              }),
            }}
          />
          <SelectField
            options={selectOptions}
            defaultOption="choose..."
            disabledOption
            error={errors.select}
            label="Select an option:"
            name="select"
            register={{
              ...register('select', {
                required: 'The field "Select" should be filled!',
              }),
            }}
          />
          <CheckBoxField
            error={errors.check}
            label="I consent to my personal data"
            name="check"
            register={{
              ...register('check', {
                required: 'Please check the box!',
              }),
            }}
          />
          <SwitchField
            options={switchOptions}
            error={errors.gender}
            label=""
            name="gender"
            register={{
              ...register('gender'),
            }}
          />
          <TextField
            label="Article picture"
            name="img_file"
            error={errors.img_file}
            type="file"
            accept="image/gif, image/jpeg, image/png"
            register={{
              ...register('img_file', {
                required: 'Please select image file!',
              }),
            }}
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
