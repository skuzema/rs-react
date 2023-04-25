import React from 'react';
import PageHeader from '../../forms/appPageHeader/PageHeader';
import AddNewPostForm from '../../forms/newPostForm/AddNewPostForm';

import './NewPostPage.css';

const NewPostPage = () => {
  return (
    <div>
      <PageHeader page_name="New Post" />
      <AddNewPostForm />
    </div>
  );
};

export default NewPostPage;
