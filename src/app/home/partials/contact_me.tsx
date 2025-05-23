'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Variants } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClockLoader } from 'react-spinners';
import { z } from 'zod';
import 'dotenv/config';

import Section from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import Message_status from './message_status';

const contactTitleVariants: Variants = {
  view: {
    x: [-200, 0],
    skewX: [-7, 0],
    transition: {
      duration: 3,
      type: 'spring',
      mass: 1,
      damping: 5,
      when: 'beforeChildren',
    },
  },
};

const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Min. 2 characters' })
    .max(15, { message: 'Max. 15 characters' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email' }),
  message: z
    .string({ required_error: 'Message is required' })
    .min(20, { message: 'Min. 20 characters' })
    .max(500, { message: 'Max. 500 characters' }),
});

const Contact_me = () => {
  const [loading, setLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'failed'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setVariant('failed');
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <Section
      id='contact'
      title='Contact Me'
      description='Feel free to drop a message for any inquiries or collaborations.'
      className='relative grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-56'
      classNameContainer_l='flex-center flex-col'
      variants={contactTitleVariants}
      view='view'
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='bg-neutral-350 mx-auto max-w-120 space-y-4 rounded-4xl p-6 before:opacity-5 md:space-y-5'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input disabled={loading} placeholder='Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input disabled={loading} placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    placeholder='Message'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} type='submit' className='w-full'>
            {loading ? <ClockLoader /> : 'Send'}
          </Button>
        </form>
      </Form>
      <div
        style={{
          position: 'absolute',
          backgroundImage: 'url(/background/hero-circle-decoration.png)',
          backgroundSize: 'cover',
          right: '0%',
          bottom: 0,
          backgroundRepeat: 'no-repeat',
          width: "clamp(20rem, 52.98vw, 40rem)",
          aspectRatio: "1/1",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          backgroundImage: 'url(/background/hero-ellipse-decoration.svg)',
          backgroundSize: 'cover',
          right: '0%',
          bottom: 0,
          backgroundRepeat: 'no-repeat',
          width: "clamp(20rem, 52.98vw, 40rem)",
          aspectRatio: "1/1",
          zIndex: -1,
        }}
      />
      <Message_status
        variant={variant}
        open={showDialog}
        onOpenChange={setShowDialog}
        loading={loading}
      />
    </Section>
  );
};

export default Contact_me;
