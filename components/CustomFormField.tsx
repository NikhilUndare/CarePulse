"use client"

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm"
import Image from "next/image"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

interface CustomProps {
    control : Control<any>,
    fieldType : FormFieldType,
    name : string,
    label? : string,
    placeholder? : string,
    iconSrc? : string,
    iconAlt? : string,
    disabled? : boolean,
    dateFormat? : string,
    showTimeSelect? : boolean,
    
    renderSkeleton? : (field : any) => React.ReactNode,
}

const RenderField = ({field , props} : {field : any; props : CustomProps}) => {
    const {control ,fieldType , name ,label, placeholder,iconSrc,iconAlt} = props;

    switch (fieldType) {
        case FormFieldType.INPUT:
          return(
            <div className="flex rounded-md border border-dark-700 bg-dark-400">
               {iconSrc && (
                <Image 
                 src={iconSrc}
                 height={24}
                 width={24}
                 alt={iconAlt || 'icon'}
                 className="ml-2" />
               )}
               <FormControl>
                 <Input 
                   placeholder= {placeholder}
                   {...field}
                   className="shad-input border-0" />
               </FormControl>
            </div>
          )
        case FormFieldType.PHONE_INPUT:
          return(
            <PhoneInput 
             defaultCountry="IN" 
             placeholder = {placeholder}
             international
             countryCallingCodeEditable
             value={field.value }
             onChange={field.onChange}
             className="input-phone"
              />
          )      
    
        default:
            break;
    }
}

const CustomFormField = (props : CustomProps) => {
    const {control ,fieldType , name ,label, placeholder,iconSrc,iconAlt} = props;
  return (
    <div>
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex-1">
              {fieldType !== FormFieldType.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>
              )}

              <RenderField field ={field} props={props} />

              <FormMessage className="shad-error" />

            </FormItem>
          )}
        />
    </div>
  )
}

export default CustomFormField