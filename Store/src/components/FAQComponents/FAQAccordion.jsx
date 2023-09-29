import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function FAQAccordion() {
    const content = [
        "Lorem ipsum dolor sit amet, consetetur adipiscing elit."

    ]

    return (
        <Accordion selectionMode="multiple" variant="splitted">
            <AccordionItem key="1" title="What is Vanity?" className="text-zinc-700 py-4 sm:w-full w-[375px]">
                <span>Just some text 1</span>
            </AccordionItem>
            <AccordionItem key="2" title="Accordion 2" className="text-zinc-700 py-4">
                <span>Just some text 2</span>
            </AccordionItem>
            <AccordionItem key="3" title="Accordion 3" className="text-zinc-700 py-4">
                <span>Just some text 3</span>
            </AccordionItem>
            <AccordionItem key="4" title="Accordion 4" className="text-zinc-700 py-4">
                <span>Just some text 4</span>
            </AccordionItem>
            <AccordionItem key="5" title="Accordion 5" className="text-zinc-700 py-4"> 
                <span>Just some text 5</span>
            </AccordionItem>
            <AccordionItem key="6" title="Accordion 6" className="text-zinc-700 py-4">
                <span>Just some text 6</span>
            </AccordionItem>
            <AccordionItem key="7" title="Accordion 7" className="text-zinc-700 py-4">
                <span>Just some text 7</span>
            </AccordionItem>
            <AccordionItem key="8" title="Accordion 8" className="text-zinc-700 py-4">
                <span>Just some text 8</span>
            </AccordionItem>
            <AccordionItem key="9" title="Accordion 9" className="text-zinc-700 py-4">
                <span>Just some text 9</span>
            </AccordionItem>
        </Accordion>
    );
}