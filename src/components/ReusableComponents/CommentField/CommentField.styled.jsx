import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const TextareaContainer = styled.label`
  position: relative;
`;

export const TextareaLabel = styled.label`
  font-family: 'Manrope';
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.44;
  margin-bottom: 8px;
  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.08;
    display: block;
    margin-bottom: 12px;
  }
`;

export const Textarea = styled(Field)`
  width: 100%;
  height: ${({ form }) => (form === 'userPet' ? '100px' : '40px')};
  border-radius: ${({ form }) => (form === 'userPet' ? '20px' : '40px')};
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.backgroundFormInput};
  font-family: 'Manrope';
  font-size: ${props => props.theme.fontSizes.xxs};
  font-weight: ${props => props.theme.fontWeight.body};
  color: ${props => props.theme.colors.primaryText};
  padding-left: 14px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  ${props => props.theme.mq.tablet} {
    height: 116px;
    border-radius: 20px;
    margin-top: 12px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: ${props => props.theme.fontSizes.xxxxs};
  color: red;
  ${props => props.theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }
  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme.fontSizes.xxxs};
    bottom: -10px;
  }
`;
