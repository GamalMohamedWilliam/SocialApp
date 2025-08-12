import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ⬇️ put this BEFORE the component
export const LoginScheme = z.object({
  
  email:z.string().nonempty('this feild is required!').email('not valid email'),
  password:z.string().nonempty('this feild is required!').regex(/^[A-Z][a-z]+[@\d]+$/),
 
})
