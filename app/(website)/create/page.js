import Form from '@/components/form';
import PageText from '@/components/page-text';
import PageWrapper from '@/components/page-wrapper';
import React from 'react';

const CreatePage = () => {

  return (
      <PageWrapper>
        <PageText
        text={'Add A Wishlist Item'}
        />
      <Form  />
      </PageWrapper>
  );
};

export default CreatePage;
