import React, { Fragment, PropsWithChildren } from 'react';

export interface ConvertAccentTextToJSXProps {
  template: string;
  values?: Record<string, string>;
  Element?: React.ComponentType<PropsWithChildren> | string;
}

export function convertAccentTextToJSX({
  template,
  values = {},
  Element = 'strong',
}: ConvertAccentTextToJSXProps) {
  const chunks = template.split(/\[([^\]]+)\]/g);

  const parts = chunks.flatMap((part, index) => {
    if (values[part]) {
      return <Element key={index}>{values[part]}</Element>;
    } else {
      return part
        .split('\n') //
        .map((line, lineIndex) => (
          <Fragment key={`${index}-${lineIndex}`}>
            {lineIndex > 0 && <br />}
            {line}
          </Fragment>
        ));
    }
  });

  return parts;
}
