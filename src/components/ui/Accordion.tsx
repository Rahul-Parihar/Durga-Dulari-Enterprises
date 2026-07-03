'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
}

export function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    defaultOpenId ? new Set([defaultOpenId]) : new Set(),
  );

  const toggleItem = (id: string) => {
    const newOpenIds = new Set(openIds);
    if (newOpenIds.has(id)) {
      newOpenIds.delete(id);
    } else {
      if (!allowMultiple) {
        newOpenIds.clear();
      }
      newOpenIds.add(id);
    }
    setOpenIds(newOpenIds);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary-navy transition-colors"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-neutral-light transition-colors text-left"
            aria-expanded={openIds.has(item.id)}
          >
            <h3 className="font-semibold text-neutral-text">{item.title}</h3>
            <ChevronDown
              size={20}
              className={clsx(
                'flex-shrink-0 text-gray-400 transition-transform duration-300',
                openIds.has(item.id) && 'rotate-180',
              )}
            />
          </button>
          {openIds.has(item.id) && (
            <div className="px-6 py-4 bg-neutral-light border-t border-gray-200 text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
