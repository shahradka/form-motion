'use client';
import { Input } from '../ui/input';
import { TypographyP } from '../ui/typography-p';
import { consoling_form_description_1, consoling_form_description_2, submit } from '@messages';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import {
  full_name,
  mobile_number,
  requested_car_name,
  submitted_successfully_1,
  submitted_successfully_2,
} from '@messages';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import React from 'react';
import { Submitted } from '../submited';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

export const ConselingForm = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const form = useForm({
    defaultValues: {
      fullName: '',
      requestedCarName: '',
      mobileNumber: '',
    },
  });

  return (
    <div className={cn('pt-8 px-7 md:px-6 sm:px-4 grow')}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div animate={{ scale: 1.0 }} exit={{ scale: 0, transition: { duration: 2 } }}>
            <Form {...form}>
              <TypographyP className="text-center">{consoling_form_description_1}</TypographyP>
              <TypographyP className="text-center">{consoling_form_description_2}</TypographyP>
              <form className="mt-5">
                <FormField
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormLabel>
                        <TypographyP className="text-center w-full">{full_name}</TypographyP>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="requestedCarName"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormLabel>
                        <TypographyP className="text-center  w-full">
                          {requested_car_name}
                        </TypographyP>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <TypographyP className="text-center  w-full">{mobile_number}</TypographyP>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="form-button-place">
                  <Button className="w-full py-8" onClick={handleSubmit} type="submit">
                    {submit}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        ) : (
          <Submitted>
            <TypographyP className="text-center">{submitted_successfully_1}</TypographyP>
            <TypographyP className="text-center">{submitted_successfully_2}</TypographyP>
          </Submitted>
        )}
      </AnimatePresence>
    </div>
  );
};
