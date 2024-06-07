import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, useFormContext } from 'react-hook-form';

import { ErrorMessageParagraph } from './form.styled';

interface MessageProps {
  name: string;
  errors: FieldErrors;
}

export function Message({ name, errors }: MessageProps) {
  return (
    <ErrorMessage
      errors={ errors }
      name={ name }
      render={ ({ message, messages }) => {
        const multiError = messages && Object.entries(messages);

        if (multiError?.length) {
          return multiError
            .map(([type, message]) => (
              <ErrorMessageParagraph key={ type }>
                {message}
              </ErrorMessageParagraph>
            ));
        }

        return (
          <ErrorMessageParagraph>
            {message}
          </ErrorMessageParagraph>
        );
      } }
    />

  );
}
