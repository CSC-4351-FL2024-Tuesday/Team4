"use client";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AvatarImage } from '@radix-ui/react-avatar';
import * as React from 'react';
import { type ClassValue } from 'clsx';

export interface  ChatProps {
  
}

export function Chat(props: ChatProps)  {

  interface Message{
    id: number;
    text: string;
    type: "received" | "sent";
  }

  const [messages, setMessages] = React.useState<Message[]>([]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const [newMessage, setNewMessage] = React.useState("");

  React.useEffect(() => {
    const oldMessages : Message[] = [
      {id: 1, text: "*Evil Jonkler laugh*", type : "received"},
      {id: 2, text: "I am Batman!", type: "sent"},
    ];
    setMessages(oldMessages);
  }, []);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  function addNewMessage(){
    if (newMessage.trim()) {
      const messageText : Message = { id: messages.length + 1, text: newMessage, type: "sent"};
      setMessages([...messages, messageText]);
      setNewMessage("");
      setTimeout(() => {
        if (divRef.current) {
          const textarea = divRef.current.querySelector('textarea');
          if (textarea) {
            textarea.style.height = '50px'; // Reset to default or 'auto' if you prefer
          }
        }
      }, 0);
    }
  }
  

  const divRef = React.useRef<HTMLDivElement>(null);
  const auto_height: React.FormEventHandler<HTMLTextAreaElement> = (event) => {
    const target = event.currentTarget
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight + 18}px`

    if (divRef.current){
      divRef.current.style.height = 'calc(${target.scrollHeight}px + 20px)';
    }
  }
  return (
      <div className='w-full h-screen'>
        <div className='flex flex-col justify-between items-center h-full'>
            <div className='flex items-center w-full h-20 transition-all hover:bg-accent border gap-2 p-3'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1>Name Bruh</h1>
              <div className='flex-grow flex items-right justify-end'>
                <Button className='' >Show Profile</Button>
              </div>
            </div>
            <div className='flex-grow h-full w-full overflow-auto p-4'>
              <div className='flex flex-col space-y-2'>
                {messages.map((message) => {
                  return (
                    <div 
                      key={message.id}
                      className={`max-w-xs mx-2 my-1 p-2 rounded-md shadow text-white ${
                        message.type === "sent" ? "ml-auto bg-blue-500" : "mr-auto bg-neutral-500"
                      }`}
                    >
                      {message.text}
                    </div>
                  );
                })}
                <div ref={messagesEndRef}/>
              </div>
            </div>
            <div ref={divRef} className='flex items-center w-full min-h-20 transition-all border gap-2 p-3 max-h-[150px]'>
              <textarea 
                className='w-full bg-inherit border rounded-xl max-h-[120px] overflow-y-auto' 
                placeholder='Type your message here!'
                onInput={auto_height}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button type='submit' onClick={addNewMessage}>Send message</Button>
            </div>
        </div>
      </div>
    );
}
