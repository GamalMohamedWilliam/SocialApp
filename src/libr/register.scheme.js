import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ⬇️ put this BEFORE the component
export const RegisterScheme = z.object({
  name: z.string().nonempty('this feild is required!').min(2,'min length is 2 char').max(10,'max length is 10 char'),
  email:z.string().nonempty('this feild is required!').email('not valid email'),
  password:z.string().nonempty('this feild is required!').regex(/^[A-Z][a-z]+[@\d]+$/),
  rePassword:z.string(),
 gender: z.enum(['female','male'], { required_error: 'Please choose a gender' }),
  dateOfBirth:z.coerce.string()
}).refine((d) => d.password===d.rePassword, { path:['rePassword'], message:'not the same' });
