import { Fragment } from 'react';

export function convertNewlineToJSX(str: string) {
  const chunks = str.replace(/\\n/g, '\n').split('\n');

  return chunks.map((line, index) => (
    <Fragment key={index}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));
}
