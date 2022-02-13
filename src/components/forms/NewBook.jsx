import React from 'react'
import { TextInputField, SelectField, TextareaField } from 'evergreen-ui';
import { Field } from 'formik';

import { authors, editions, formats, publishers } from 'data/mockFormOptions';
import styled from 'styled-components';
let genres = require("../../data/books.json");
const StyledEditionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  div {
    flex-basis: 30%;
    margin-right: 3%;
  }
`;

const findIsDescriptionRequired = values => {
  const { genre, subgenre, isNewSubgenreDescriptionRequired } = values;
  const foundGenre = genres.genres.find(el => el.name === genre);
  const foundSubgenre = foundGenre.subgenres.find(el => el.name === subgenre);
  return foundSubgenre?.isDescriptionRequired || isNewSubgenreDescriptionRequired;
}

const NewBook = ({ formikProps }) => {
  const { errors, touched, values } = formikProps;
  delete errors.newSubgenreName

  const isDescReq = findIsDescriptionRequired(formikProps.values);
  if (isDescReq && !values.description) {
    errors.description = "Required"
  }
  return (
    <div>
      <Field
        as={TextInputField}
        label="Book title"
        required
        placeholder="Book title"
        isInvalid={!!(touched.title && errors.title)}
        validationMessage={touched.title && errors.title}
        name="title" />
      <Field
        as={SelectField}
        label="Author"
       
        value={values.author}
        
        name="author">
        <option key="0" value="" disabled>Author</option>
        {authors.map(author => <option key={author} value={author}>{author}</option>)}
      </Field>
      <Field
        as={TextInputField}
        label="ISBN"
        placeholder="ISBN"
       
        name="isbn" />
      <Field
        as={SelectField}
        label="Publisher"
       
        value={values.publisher}
      
        name="publisher">
        <option key="0" value="" disabled>Publisher</option>
        {publishers.map(publisher => <option key={publisher} value={publisher}>{publisher}</option>)}
      </Field>
      <Field
        as={TextInputField}
        label="Date published"
        inputWidth="30%"
       
        placeholder="DD/MM/YYYY"
      
        name="datePublished" />
      <Field
        as={TextInputField}
        label="Number of pages"
        inputWidth="20%"
       
        placeholder="Number of pages"
       
        name="numberOfPages" />
      <Field
        as={SelectField}
        label="Format"
        inputWidth="30%"
      
        value={values.format}
      
        name="format">
        <option key="0" value="" disabled>Format</option>
        {formats.map(format => <option key={format} value={format}>{format}</option>)}
      </Field>
      <StyledEditionWrapper>
        <Field
          as={TextInputField}
          label="Edition"
         
          placeholder="Edition"
       
          name="edition" />
        <Field
          as={SelectField}
          label="Edition Language"
          
          value={values.editionLanguage}
         
          name="editionLanguage">
          <option key="0" value="" disabled>Edition Language</option>
          {editions.map(edition => <option key={edition} value={edition}>{edition}</option>)}
        </Field>
      </StyledEditionWrapper>
      <Field
        as={TextareaField}
        label="Description"
        required={isDescReq}
     
        placeholder="Type the description"
        name="description" />
    </div>
  )
}

export default NewBook;
