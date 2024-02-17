"use client";
import * as React from 'react';
import ResumeUpload from './resume_upload';

export interface IsignupProps {
}

export default class signup extends React.Component<IsignupProps> {
  public render() {
    return (
      <div>
        <ResumeUpload/>
      </div>
    );
  }
}
