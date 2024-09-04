import { Check, Code2, Copy } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { SimpleText } from "@/components/ui/typography";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/constants";
import Routes from "@/utils/routes";

import { RoundedLinesSvg } from "../../../../../../../public/icons";

export default function EmbedCodeModal() {
  const { activeModal, closeModal } = useModalStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);

  const isOpen = activeModal === Modals.embed_code;

  const closeHandler = () => {
    if (searchParams.get("invite-modal")) {
      router.replace(Routes.settings_team, undefined);
    }
    closeModal();
  };

  const handleCopy = () => {
    if (!isCopied) {
      setIsCopied(true);
      navigator.clipboard.writeText(
        '<script src="https://widgetjoy-app.9s2mqv.easypanel.host/widgets/emailList/36b5bc26-82f0-4bc7-8709-0b3051f2f598/embed"></script>'
      );
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  };

  return (
    <Modal ariaLabel="Invite team members" isOpen={isOpen} onClose={closeHandler} className="overflow-hidden relative">
      <div className="p-6 relative z-0">
        <div className="size-12 border border-border-secondary dark:bg-active-dark dark:bg-opacity-60 bg-white bg-opacity-60 dark:border-border-dark-primary flex items-center justify-center rounded-lg mb-4 relative">
          <Code2 color="#fff" />
          <div className="h-12 min-w-12 rounded-lg bg-brand-500 rotate-[15deg] -z-10 absolute left-1.5 bottom-1.5"></div>
        </div>
        <RoundedLinesSvg className="absolute top-0 left-0 -z-[1] hidden md:inline stroke-rounded-lines dark:stroke-active-dark" />
        <SimpleText color="primary-900" className="mb-1 text-lg" weight="font-semibold">
          Embed code
        </SimpleText>
        <SimpleText color="tertiary-600" className="mb-5 text-sm">
          Place this HTML code into your website to embed the widget.
        </SimpleText>
        <div className="flex shadow-xs rounded-md border dark:border-border-dark-primary">
          <SimpleText
            color="quaternary-500"
            className="select-none grow border-r bg-disabled dark:border-border-dark-primary dark:bg-secondary-dark px-3 py-[7px] rounded-l-md truncate transition"
          >
            &lt;script
            src="https://widgetjoy-app.9s2mqv.easypanel.host/widgets/emailList/36b5bc26-82f0-4bc7-8709-0b3051f2f598/embed"&gt;url&lt;/script&gt;
          </SimpleText>
          <div className="flex items-center justify-center min-w-[92px] max-w-[92px]">
            <Button
              variant="secondary"
              lefticon={isCopied ? <Check size={20} /> : <Copy size={20} />}
              className="border-none rounded-none rounded-r-md px-0 w-full"
              onPress={handleCopy}
            >
              {isCopied ? "Copied" : "Copy"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
