"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Layout, 
  Zap, 
  Box, 
  ArrowRight,
  Monitor,
  Cloud,
  Code2,
  Stethoscope,
  Activity,
  User,
  Phone,
  Home,
  Search,
  X
} from "lucide-react";

interface SearchItem {
  title: string;
  href: string;
  category: string;
  description?: string;
  icon?: any;
}

const SEARCH_ITEMS: SearchItem[] = [
  // Sections
  { title: "Home", href: "/", category: "Navigation", icon: Home },
  { title: "Services", href: "#services", category: "Navigation", icon: Zap },
  { title: "Products", href: "#work", category: "Navigation", icon: Box },
  { title: "Process", href: "#workflow", category: "Navigation", icon: Layout },
  { title: "Skills", href: "#about", category: "Navigation", icon: Code2 },
  { title: "Contact", href: "#about", category: "Navigation", icon: Phone },
  
  // Services
  { title: "Custom Development", href: "#services", category: "Services", description: "Tailored software solutions", icon: Monitor },
  { title: "Business Automation", href: "#services", category: "Services", description: "Streamline workflows", icon: Zap },
  { title: "Cloud Solutions", href: "#services", category: "Services", description: "Scalable infrastructure", icon: Cloud },
  { title: "Digital Consulting", href: "#services", category: "Services", description: "Expert advice", icon: User },
  
  // Products
  { title: "eClinic", href: "#work", category: "Products", description: "Healthcare management", icon: Stethoscope },
  { title: "eSyncore", href: "#work", category: "Products", description: "Enterprise ERP", icon: Activity },
];

export function SearchCommand({ 
  open, 
  onOpenChange 
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<SearchItem[]>(SEARCH_ITEMS);

  useEffect(() => {
    if (!open) {
      setSearchQuery("");
    }
  }, [open]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = SEARCH_ITEMS.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.description?.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  }, [searchQuery]);

  const handleSelect = (href: string) => {
    router.push(href);
    onOpenChange(false);
  };

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="overflow-hidden p-0 shadow-lg bg-[#1a1f26] border-white/10 text-white sm:max-w-lg top-[20%] translate-y-0 data-[state=open]:slide-in-from-top-2"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogDescription className="sr-only">
          Search for services, products, or sections across the site.
        </DialogDescription>
        
        <div className="flex flex-col w-full bg-transparent">
          {/* Search Input */}
          <div className="flex items-center border-b border-white/10 px-3">
            <Search className="mr-2 h-5 w-5 shrink-0 text-white/50" />
            <input
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-white/50 text-white disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-white/50 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Results List */}
          <div className="max-h-[300px] overflow-y-auto overflow-x-hidden py-2">
            {filteredItems.length === 0 ? (
              <div className="py-6 text-center text-sm text-white/50">
                No results found.
              </div>
            ) : (
              Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="mb-2 last:mb-0">
                  <div className="px-4 py-1.5 text-xs font-medium text-white/50">
                    {category}
                  </div>
                  {items.map((item) => (
                    <div
                      key={item.title}
                      onClick={() => handleSelect(item.href)}
                      className="group flex cursor-pointer select-none items-center justify-between px-4 py-3 text-sm hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon && <item.icon className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />}
                        <div className="flex flex-col">
                          <span className="font-medium text-white group-hover:text-white transition-colors">{item.title}</span>
                          {item.description && (
                            <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                              {item.description}
                            </span>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/0 group-hover:text-white/50 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </div>
                  ))}
                  <div className="mx-2 h-px bg-white/10 my-2 last:hidden" />
                </div>
              ))
            )}
          </div>
          
          {/* Footer */}
          <div className="bg-white/5 px-4 py-2 text-[10px] text-white/40 flex items-center justify-between border-t border-white/10">
            <span>Search powered by Xenostech</span>
            <div className="flex gap-2">
                <div className="hidden sm:flex items-center gap-1">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/50 opacity-100">
                    <span className="text-xs">Esc</span>
                  </kbd>
                  <span className="text-white/30">to close</span>
                </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
