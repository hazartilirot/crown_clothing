import React from 'react';
import './collection-preview.styles.scss'

import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0,4).map(({id, ...items}) => 
            <CollectionItem key={id} {...items} />
        )}
      </div>
    </div>
  );
}

export default CollectionPreview;