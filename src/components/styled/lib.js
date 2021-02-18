import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1400px;
  display: block;
  width: 90%;
  background-color: #fff;
  height: auto;
  margin: 50px auto;
  border-radius: 4px;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--white);
`;

export const BookWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  height: 170px;
  margin: 37px 100px 0;
  padding: 32px 147px 26px 27px;
  border-radius: 4px;
  border: solid 1px var( --gray-border);
  background-color: var(--white-two);
  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
    height: auto;
    align-items: center;
    padding: 32px 32px 26px 27px;
  }
`;

export const BlueTextButton = styled.button`
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

export const HeaderBookWrapper = styled.div`
  line-height:1.8em;
  position: relative;
`;
export const TitleBookWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

export const Category = styled.div`
  opacity: 0.5;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black-two);
`;

export const FooterBookWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const ProgressWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    margin-left: 0;
    margin-right: 30px;
  }
`;

export const ProgressTitle = styled.h3`
  font-size: 32px;
  font-weight: 400;
`;

export const GrayText = styled.p`
  font-size: 14px;
  color: var(--black-two);
  opacity: 0.5;
  font-weight: 400;
`;

export const Separator = styled.div`
  width: 2px;
  height: 70px;
  margin: 18px 59px 0 79px;
  border: solid 1px var(--gray-border);
  @media only screen and (max-width: 1200px) {
    display: none
  }
`;

export const ProgressDetailWrapper = styled(TitleBookWrapper)`
  line-height: 1.5em;
`;

export const UpdateButton = styled.button`
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

export const BookTitle = styled.h3`
  font-family: RobotoSlab;
  font-size: 24px;
`;

export const ChapterNumber = styled.p`
  font-family: RobotoSlab;
  font-size: 17px;
  font-weight: 400;
`;
export const CurrentChapterWrapper = styled(GrayText)`
  font-family: RobotoSlab;
  text-transform: uppercase;
`;

export const Select = styled.select`
  width: 180px;
  height: 45px;
  padding: 6px 15px 9px 16px;
  border-radius: 4px;
  border: solid 1px var(--gray-border);
  background-color: var(--white-two);
  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  padding: 60px 100px;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--gray-border);
    margin-bottom: 40px;
  }
`;

export const FormBookTitle = styled.h3`
  opacity: 0.5;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black-two);
  font-size: 16px;
  text-transform: uppercase;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const FormInput = styled.input`
  width: 60%;
  height: 45px;
  padding: 6px 15px 9px 16px;
  border-radius: 4px;
  border: solid 1px var(--gray-border);
  background-color: var(--white-two);
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 1200px) {
    width: 50%;
  }
`;

export const FormSelect = styled.select`
  width: 230px;
  height: 45px;
  padding: 6px 15px 9px 16px;
  border-radius: 4px;
  border: solid 1px var(--gray-border);
  background-color: var(--white-two);
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 1200px) {
    width: 180px;
  }
`;

export const FormButton = styled(UpdateButton)`
  font-family: Montserrat, sans-serif;
  height: 45px;
  padding: 6px 15px 9px 16px;
  margin-top: 0;
  font-weight: 400;
  @media only screen and (max-width: 1200px) {
    width: 180px;
  }
`;

export const Navbar = styled.div`
  height: 95px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px var( --gray-border);
  background-color: var(--white-two);
  padding: 10px 100px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: var(--azure);
`;

export const WrapperLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
`;

export const WrapperRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.img`
  width: 33px;
  height: 30px;
`;

export const Item = styled.p`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  color: var(--black-two);
`;
