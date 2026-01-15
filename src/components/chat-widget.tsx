'use client'

import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { QuoteForm } from '@/components/quote-form'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { trackChatOpen } from '@/lib/analytics'

export function ChatWidget() {
  const [open, setOpen] = useState(false)

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen && !open) {
      // Track when user opens the chat widget
      trackChatOpen()
    }
    setOpen(isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className={cn(
              "h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl shadow-green-900/20 transition-transform",
              !open && "hover:scale-105"
            )}
            aria-label="Chat with us"
          >
            {open ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" className="w-[350px] p-0 border-stone-200 shadow-xl bg-white mb-2">
          <div className="bg-stone-900 p-4 rounded-t-lg flex items-center gap-3">
            <div className="relative">
              <div className="h-2 w-2 bg-green-500 rounded-full absolute bottom-0 right-0 border border-stone-900"></div>
              <div className="bg-stone-800 h-10 w-10 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Tyler Tree Support</h4>
              <p className="text-stone-400 text-xs">Typically replies instantly</p>
            </div>
          </div>
          <div className="p-2 max-h-[60vh] overflow-y-auto">
            {/* We pass a prop or wrap it to simplify styles if needed, 
                 but QuoteForm is already pretty clean. 
                 We might just want to hide the big 'Get Free Estimate' header inside the widget 
                 to save space, but for now let's just render it. */}
            <QuoteForm compact={true} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
