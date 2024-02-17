"use client";
import * as React from 'react';
import Results from './results';

export interface ISearchResultsProps {
}

export default class SearchResults extends React.Component<ISearchResultsProps> {
  public render() {
    return (
      <Results/>
    );
  }
}
