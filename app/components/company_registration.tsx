import React, { useState } from 'react';

const CompanyRegistrationPage: React.FC = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');

    const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(event.target.value);
    };

    const handleCompanyAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyAddress(event.target.value);
    };

    const handleCompanyEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Perform registration logic here
        console.log('Company Name:', companyName);
        console.log('Company Address:', companyAddress);
        console.log('Company Email:', companyEmail);

        // Reset form fields
        setCompanyName('');
        setCompanyAddress('');
        setCompanyEmail('');
    };

    return (
        <div>
            <h1>Company Registration</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name:
                    <input type="text" value={companyName} onChange={handleCompanyNameChange} />
                </label>
                <br />
                <label>
                    Company Address:
                    <input type="text" value={companyAddress} onChange={handleCompanyAddressChange} />
                </label>
                <br />
                <label>
                    Company Email:
                    <input type="email" value={companyEmail} onChange={handleCompanyEmailChange} />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default CompanyRegistrationPage;