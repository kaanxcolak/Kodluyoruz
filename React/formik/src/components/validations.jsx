import { object, string, number, date, InferType, ref } from 'yup';

import React from 'react';

const validations = object({
    email: string().email(),
});

export default validations;