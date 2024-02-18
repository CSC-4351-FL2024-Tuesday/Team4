"use client";
import * as React from 'react';
import Information from './information';

export interface IRegisterCompanyProps {
}

export default class RegisterCompany extends React.Component<IRegisterCompanyProps> {
  public render() {
    return (
      <Information/>
    );
  }
}
