'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, Send } from 'lucide-react'
import { SITE_DOMAIN } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const supabase = createClient()

    const service = formData.get('service') as string
    const urgency = formData.get('urgency') as string
    const details = formData.get('details') as string

    const combinedDetails = `[Urgency: ${urgency}] ${details}`

    const { error } = await supabase
      .from('leads')
      .insert({
        source_domain: SITE_DOMAIN,
        lead_type: 'form',
        customer_name: formData.get('name') as string,
        customer_phone: formData.get('phone') as string,
        service_requested: service,
        details: combinedDetails,
      })

    setLoading(false)

    if (error) {
      console.error('Error submitting lead:', error)
      alert('Something went wrong. Please try calling us instead.')
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className={cn("bg-green-50 border border-green-200 rounded-lg text-center", compact ? "p-4" : "p-6")}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
          <Send className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Request Received!</h3>
        <p className="text-green-700">
          Our arborists have been notified. We will call you shortly to confirm your estimate.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4 bg-white rounded-lg", !compact && "p-6 border border-stone-200 shadow-xl", compact && "p-3")}>
      {!compact && (
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-stone-900 uppercase">Get a Free Estimate</h3>
          <p className="text-stone-600 text-sm">Fast response. Zero obligation.</p>
        </div>
      )}
      
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-bold text-stone-700 uppercase">Name</label>
        <Input id="name" name="name" required placeholder="John Doe" className="bg-stone-50 border-stone-300" />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-bold text-stone-700 uppercase">Phone Number</label>
        <Input id="phone" name="phone" type="tel" required placeholder="(417) 555-0123" className="bg-stone-50 border-stone-300" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
           <label className="text-sm font-bold text-stone-700 uppercase">Service</label>
           <Select name="service" required>
              <SelectTrigger className="bg-stone-50 border-stone-300">
                 <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                 <SelectItem value="Tree Removal">Tree Removal</SelectItem>
                 <SelectItem value="Tree Trimming">Trimming</SelectItem>
                 <SelectItem value="Stump Grinding">Stump Grinding</SelectItem>
                 <SelectItem value="Storm Damage">Storm Damage</SelectItem>
                 <SelectItem value="Land Clearing">Land Clearing</SelectItem>
                 <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
           </Select>
        </div>

        <div className="space-y-2">
           <label className="text-sm font-bold text-stone-700 uppercase">Urgency</label>
           <Select name="urgency" required defaultValue="This Week">
              <SelectTrigger className="bg-stone-50 border-stone-300">
                 <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                 <SelectItem value="Emergency">Emergency (Now)</SelectItem>
                 <SelectItem value="This Week">This Week</SelectItem>
                 <SelectItem value="Planning">Just Planning</SelectItem>
              </SelectContent>
           </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="details" className="text-sm font-bold text-stone-700 uppercase">Details</label>
        <Textarea 
          id="details" 
          name="details" 
          placeholder="Tell us about the tree..." 
          className="bg-stone-50 border-stone-300 min-h-[80px]"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider h-12">
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Get My Free Quote'}
      </Button>
      
      <p className="text-xs text-stone-400 text-center pt-2">
        Your information is secure. We never share your data.
      </p>
    </form>
  )
}