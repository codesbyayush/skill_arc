import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  import { Badge } from "@/components/ui/badge"
  
  export default function AboutProblem() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Topics</AccordionTrigger>
          <AccordionContent>
          <div className="flex gap-2 flex-wrap">
              <Badge>Array</Badge>
              <Badge>Hash Table</Badge>
          </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Companies</AccordionTrigger>
          <AccordionContent>
          <div className="flex gap-2 flex-wrap">
              <Badge>Meta</Badge>
              <Badge>Adobe</Badge>
          </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Hint 1</AccordionTrigger>
          <AccordionContent>
          A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it&apos;s best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.
          </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
          <AccordionTrigger>Hint 2</AccordionTrigger>
          <AccordionContent>
          So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  