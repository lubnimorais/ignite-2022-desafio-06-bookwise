import { TextareaHTMLAttributes } from 'react';

import { TextAreaContainer } from './styles';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
}

const TextArea = ({ maxLength, ...rest }: ITextAreaProps) => {
  const currentValue = String(rest.value).length ?? 0;

  return (
    <TextAreaContainer>
      <textarea {...rest} maxLength={maxLength} />

      {maxLength && (
        <span>
          {currentValue}/{maxLength}
        </span>
      )}
    </TextAreaContainer>
  );
};

export { TextArea };
