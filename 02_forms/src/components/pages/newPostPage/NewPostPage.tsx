import React from 'react';
import PageHeader from '../../ui/appPageHeader/PageHeader';
import AddNewPostForm from '../../ui/newPostForm/AddNewPostForm';

import './NewPostPage.css';

class NewPostPage extends React.Component {
  render() {
    return (
      <div>
        <PageHeader page_name="New Post" />
        <AddNewPostForm />
      </div>
    );
  }
}

export default NewPostPage;
