import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BookWrapper = styled.div`
display: flex;
  width: 1200px;
  height: 170px;
  margin: 37px 100px 0;
  padding: 32px 147px 26px 27px;
  border-radius: 4px;
  border: solid 1px var( --gray-border);
  background-color: var(--white-two);
`;

const BlueTextButton = styled.button`
  display: flex;
  align-items: center;
  margin: 4px 14px 0 0;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--cool-blue);  
  background-color: transparent;
  border:none;
  &:focus {
    outline:none;
    transform: scale(1.1)
  }

  & + &:before {
    content: "";
    display: inline-block;
    width: 2px;
    height: 24px;
    background-color: var(--gray-border);
    margin-right: 10px;
  }
`;

const HeaderBookWrapper = styled.div`
  line-height:1.8em;
  position: relative;
`;
const TitleBookWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

const Category = styled.div`
  opacity: 0.5;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black-two);
`;

const FooterBookWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: auto;
`;

const ProgressWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressTitle = styled.h3`
  font-size: 32px;
  font-weight: 400;
`;

const GrayText = styled.p`
  font-size: 14px;
  color: var(--black-two);
  opacity: 0.5;
  font-weight: 400;
`;

const Separator = styled.div`
  width: 2px;
  height: 70px;
  margin: 18px 59px 0 79px;
  border: solid 1px var(--gray-border);
`;

const ProgressDetailWrapper = styled(TitleBookWrapper)`
  line-height: 1.5em;
`;

const UpdateButton = styled.button`
  font-family: RobotoSlab;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--white-two);
  width: 200px;
  height: 33px;
  margin-top: 12px;
  border: none;
  padding: 7px 19px 8px 22px;
  border-radius: 3px;
  background-color: var(--azure);
  transition: transform 0.2s ease;
  &:focus {
    outline: none;
    transform: scale(1.01);
  }
`;

const ChapterNumber = styled.p`
  font-family: RobotoSlab;
  font-size: 17px;
  font-weight: 400;
`;
const CurrentChapterWrapper = styled(GrayText)`
  font-family: RobotoSlab;
  text-transform: uppercase;
`;

const Books = ({
  id, title, category, onRemoveBook,
}) => (
  <BookWrapper>
    <TitleBookWrapper>
      <HeaderBookWrapper>
        <Category>{category}</Category>
        <h3>
          {title}
        </h3>
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
