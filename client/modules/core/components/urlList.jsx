import React from 'react';

const UrlList = ({urls}) => (
  <div>
    <ul>
      {urls.map(url=>(
        <li key={url._id}>
          <a href={`/url/${url._id}`}>{url.url}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default UrlList;
