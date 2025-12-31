import React from 'react';
import ChatInterface from '@/components/chat/ChatInterface';
import Image from 'next/image';

export default function ChatPage() {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/assets/detail-alumni-bg.PNG"
        alt="Latar Belakang Detail Alumni"
        className="absolute inset-0 w-full h-full blur-xs object-cover z-0 brightness-40"
        fill={true}
      />
      <div className="text-center
        ">
        {/* <HeaderAnimation> */}
          <ChatInterface />
        {/* </HeaderAnimation> */}
      </div>

    </div>
  );
}