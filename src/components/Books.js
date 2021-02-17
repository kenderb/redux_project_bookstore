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
  margin: 4px 14px 0 0;
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
`;

const HeaderBookWrapper = styled.div`
  line-height:1.8em;
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
    <div>
      two
    </div>
    <div>
      three
    </div>
  </BookWrapper>
);

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default Books;
