import * as Input from "@/components/Input";
import {
  Bold,
  ChevronDown,
  Italic,
  Link,
  List,
  ListOrdered,
  Mail,
  UploadCloud,
  User,
} from "lucide-react";
import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "../Form/Select/SelectItem";
import { TextArea } from "../Form/TextArea";
import { Button } from "../Button";

export function TabMyDetails() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">
            Update your information here
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </div>
      <form
        id="settings"
        className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
      >
        <div className="grid gap-3 grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid gap-6 grid-cols-2">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Name" />
            </Input.Root>
            <Input.Root>
              <Input.Control defaultValue="Last Name" />
            </Input.Root>
          </div>
        </div>
        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="name@email.com"
            />
          </Input.Root>
        </div>
        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" type="text" defaultValue="CEO" />
          </Input.Root>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <Select placeholder="Select a country...">
            <SelectItem value="br" text="Brazil" />
            <SelectItem value="us" text="United States" />
            <SelectItem value="uk" text="United Kingdom" />
          </Select>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <Select placeholder="Select a timezone...">
            <SelectItem
              value="utc-8"
              text="Pacific Standard Time (PST) UTC-8"
            />
            <SelectItem
              value="utc-4"
              text="Atlantic Standard Time (AST) UTC-4"
            />
          </Select>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="grid gap-3 grid-cols-2">
              <Select placeholder="" defaultValue="normal">
                <SelectItem value="normal" text="Normal Text" />
                <SelectItem value="md" text="MarkDown" />
              </Select>
              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
            <TextArea id="bio" defaultValue="Type your bio here" />
          </div>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label
            htmlFor="portifolioProjects"
            className="text-sm font-medium text-zinc-700"
          >
            Portifolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root className="items-start gap-5">
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end pt-5 gap-2">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
