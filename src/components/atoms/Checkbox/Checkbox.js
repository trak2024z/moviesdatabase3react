import React from 'react';

const Checkbox = ({ isChecked, onChange }) => {
    return (
        <p>
            <input id="exact_match" type="checkbox" checked={isChecked} onChange={onChange} />
            <label htmlFor="exact_match">Exact match</label>
        </p>
    );
};

export default Checkbox;
