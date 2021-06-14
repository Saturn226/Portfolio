import React from 'react';

import {
  ReactJs,
  Redux,
  Javascript,
  Ruby,
  Html5,
} from '@icons-pack/react-simple-icons';

export default function Icon({ children, size, ...restProps }) {
  return <div>{children}</div>;
}
Icon.ReactJs = function ({ ...restProps }) {
  return <ReactJs color='#61DAFB' {...restProps} />;
};

Icon.ReduxJs = function ({ ...restProps }) {
  return <Redux color='#764ABC' {...restProps} />;
};

Icon.Javascript = function ({ ...restProps }) {
  return <Javascript color='#F7DF1E' {...restProps} />;
};

Icon.Ruby = function ({ ...restProps }) {
  return <Ruby color='#CC342D' {...restProps} />;
};

Icon.Html5 = function ({ ...restProps }) {
  return <Html5 color='#E34F26' {...restProps} />;
};
