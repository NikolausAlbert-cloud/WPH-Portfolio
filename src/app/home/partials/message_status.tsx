import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogClose
} from "@/components/ui/dialog"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

type MessageStatusProps = {
  variant: "success" | "failed"
  open: boolean
  onOpenChange: (open: boolean) => void
  loading?: boolean
}

const Message_status: React.FC<MessageStatusProps> = ({variant, open, onOpenChange, loading}) => {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <Image 
            src={
              variant === "success" 
                ? "/icons/message_sent_ok.jpg"
                : "/icons/message_sent_failed.svg"
            }
            alt={`${variant === "success" ? "successful" : "failed"} message status`} 
            width={40} 
            height={40} 
            
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle>
            {variant === "success" ? "Message sent successfully" : "Message sent failed"}
          </DialogTitle>
          <DialogDescription>
            {variant === "success" 
              ? "Thank you for reaching out. I’ll get back to you as soon as possible" 
              : "Please go to home page and try again."
            }
          </DialogDescription>
        </DialogBody>
        <DialogClose asChild>
          <Button>{loading ? "Loading..." : "Back to Home"}</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default Message_status