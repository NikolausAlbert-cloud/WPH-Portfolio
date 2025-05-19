'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogClose,
} from '@/components/ui/dialog';

type MessageStatusProps = {
  variant: 'success' | 'failed';
  open: boolean;
  onOpenChange: (open: boolean) => void;
  loading?: boolean;
};

const Message_status: React.FC<MessageStatusProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent className='flex-center flex-col bg-transparent [&>button:last-child]:hidden'>
        <DialogHeader>
          <Image
            src={
              variant === 'success'
                ? '/images/message_sent_ok.jpg'
                : '/images/message_sent_failed.svg'
            }
            alt={`${variant === 'success' ? 'successful' : 'failed'} message status`}
            width={162}
            height={162}
            className={`${variant === 'success' ? 'mt-8 mb-6 max-sm:mt-6 max-sm:mb-4 max-sm:scale-85' : 'scale-120'} rounded-2xl`}
          />
        </DialogHeader>
        <DialogBody className='flex-center flex-col'>
          <DialogTitle>
            {variant === 'success'
              ? 'Message sent successfully'
              : 'Message sent failed'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : 'Please go to home page and try again.'}
          </DialogDescription>
        </DialogBody>
        <DialogClose asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 2 } }}
            className="w-full"
          >
            <Button className='text-sm-medium w-full'>
              {loading ? 'Loading...' : 'Back to Home'}
            </Button>
          </motion.div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Message_status;
