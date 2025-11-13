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
import { motion } from 'motion/react';
import Image from 'next/image';

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
    <motion.div
      initial={{ rotateZ: 0 }}
      animate={isSubmitted && { rotateZ: [360, 0], y: [0, -150] }}
      transition={{ duration: 2, ease: 'easeInOut', times: [0, 0.5] }}
      className={cn('app-card-inside', [!isSubmitted && 'grow'], [isSubmitted && 'rounded-xl'])}
    >
      {!isSubmitted ? (
        <div className="px-15">
          <Form {...form}>
            <TypographyP className="text-center">{consoling_form_description_1}</TypographyP>
            <TypographyP className="text-center my-4">{consoling_form_description_2}</TypographyP>
            <form className="flex flex-col gap-10">
              <FormField
                name="fullName"
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem>
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
              <Button className="w-full py-8" onClick={handleSubmit} type="submit">
                {submit}
              </Button>
            </form>
          </Form>
        </div>
      ) : (
        <Submitted>
          <TypographyP className="text-center">{submitted_successfully_1}</TypographyP>
          <TypographyP className="text-center">{submitted_successfully_2}</TypographyP>
        </Submitted>
      )}
      {!isSubmitted && (
        <div className="relative w-full h-25 grow">
          <Image
            src="/road.webp"
            objectFit="cover"
            objectPosition="center"
            fill
            alt="road_img"
          ></Image>
        </div>
      )}
    </motion.div>
  );
};
