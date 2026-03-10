"use client";

import { LoadingImage } from '@/components/desktop/LoadingImage'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  status: string;
  image: string;
}

export function EventsGrid() {
  const events: Event[] = [
    // No current events at the moment
  ];

  return (
    <div>
      {events.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <Card key={idx} className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow">
              <div className="relative aspect-video w-full bg-slate-50">
                <LoadingImage
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-contain p-6"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                  event.status === 'قادم' ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-600'
                }`}>
                  {event.status}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="size-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="size-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
                <Button asChild variant="outline" className="w-full rounded-xl group">
                  <Link href="/volunteer">
                    شارك كمتطوع
                    <ArrowRight className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-slate-500 text-lg">
            لا توجد فعاليات حالياً
          </div>
        </div>
      )}
    </div>
  );
}
