import { ThumbsUp } from "lucide-react";

import Modal from "@/components/ui/modal";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs";
import { SimpleText } from "@/components/ui/typography";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/constants";

import { RoundedLinesSvg } from "../../../../../../../../public/icons";
import SimpleTestimonialTabContent from "./SimpleTestimonialTabContent";

export default function TestimonialModal() {
  const { activeModal, closeModal } = useModalStore();

  const isOpen = activeModal === Modals.testimonial;

  return (
    <Modal ariaLabel="Invite team members" modalClassName="max-w-[616px]" isOpen={isOpen} onClose={closeModal}>
      <div className="p-6 relative z-0">
        <div className="size-12 border border-border-secondary dark:bg-active-dark dark:bg-opacity-60 bg-white bg-opacity-60 dark:border-border-dark-primary flex items-center justify-center rounded-md mb-4 relative">
          <ThumbsUp color="#fff" />
          <div className="h-12 min-w-12 rounded-md bg-brand-500 rotate-[15deg] -z-10 absolute left-1.5 bottom-1.5"></div>
        </div>
        <RoundedLinesSvg className="absolute top-0 left-0 -z-[1] hidden md:inline stroke-rounded-lines dark:stroke-active-dark" />

        <SimpleText color="primary-900" className="mb-1 text-lg" weight="font-semibold">
          Edit testimonial
        </SimpleText>
        <SimpleText color="tertiary-600" className="mb-5 text-sm">
          Created on Dec 16, 2024
        </SimpleText>
        <Tabs>
          <TabList aria-label="History of Ancient Rome">
            <Tab className="max-sm:px-1" id="simple">
              Simple testimonial
            </Tab>
            <Tab className="max-sm:px-1" id="video">
              Video testimonial
            </Tab>
          </TabList>
          <TabPanel id="simple">
            <SimpleTestimonialTabContent id="simple" />
          </TabPanel>
          <TabPanel id="video">
            <SimpleTestimonialTabContent id="video" />
          </TabPanel>
        </Tabs>
      </div>
    </Modal>
  );
}
