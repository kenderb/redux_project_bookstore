import React from 'react';
import PropTypes from 'prop-types';
import {
  BookWrapper, TitleBookWrapper, Category, HeaderBookWrapper,
  BookTitle, BlueTextButton, FooterBookWrapper, ProgressWrapper, Separator,
  ProgressDetailWrapper, ProgressTitle, GrayText,
  CurrentChapterWrapper, ChapterNumber, UpdateButton,
} from './styled/lib';

const Books = ({
  id, title, category, onRemoveBook,
}) => (
  <BookWrapper>
    <TitleBookWrapper>
      <HeaderBookWrapper>
        <Category>{category}</Category>
        <BookTitle>
          {title}
        </BookTitle>
        <BlueTextButton>
          {id}
        </BlueTextButton>
      </HeaderBookWrapper>
      <FooterBookWrapper>
        <BlueTextButton>
          Comments
        </BlueTextButton>
        <BlueTextButton type="button" onClick={() => onRemoveBook(id)}>Remove</BlueTextButton>
        <BlueTextButton>
          Edit
        </BlueTextButton>
      </FooterBookWrapper>
    </TitleBookWrapper>
    <ProgressWrapper>
      <svg
        className="progress-ring"
        width="120"
        height="120"
      >
        <circle
          className="progress-ring__circle"
          stroke="#379cf6"
          strokeWidth="5"
          fill="transparent"
          r="34"
          cx="60"
          cy="60"
        />
      </svg>
      <div>
        <ProgressTitle>100%</ProgressTitle>
        <GrayText>Completed</GrayText>
      </div>
    </ProgressWrapper>
    <Separator />
    <ProgressDetailWrapper>
      <CurrentChapterWrapper>Current Chapter</CurrentChapterWrapper>
      <ChapterNumber>Chapter 99</ChapterNumber>
      <UpdateButton type="button">
        Update progress
      </UpdateButton>
    </ProgressDetailWrapper>
  </BookWrapper>
);

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default Books;
