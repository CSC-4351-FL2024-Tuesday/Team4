"use client";
import * as React from 'react';
import StudentProfile from '../../components/student-facing/student_profile';

export interface IStudentProfilePageProps {
}

export default class StudentProfilePage extends React.Component<IStudentProfilePageProps> {
  public render() {
    return (
      <StudentProfile/>
    );
  }
}
