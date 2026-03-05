"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  project: string;
  otherProject?: string;
  website?: string;
}

export default function Emailer() {
  const defaultStateValue = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    project: "",
    otherProject: "",
    website: "",
  };
  const [data, setData] = useState<EmailData>(defaultStateValue);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onStateChange = (key: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch("/api/contact/", {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
    setData(defaultStateValue);
  };

  return (
    <div className=" max-w-md mx-auto space-y-4">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Looking to have something built? Reach out below
      </p>

      <form
        className="flex w-full items-center flex-col gap-2 h-fit p-2"
        onSubmit={onSubmit}
      >
        <div className="flex w-full items-center gap-2">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
            onChange={(e) => onStateChange("website", e.target.value)}
            value={data.website}
          />
          <Input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="flex-1 h-10 dark:border-zinc-50"
            onChange={(e) => onStateChange("firstName", e.target.value)}
            value={data.firstName}
          />
          <Input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="flex-1 h-10 dark:border-zinc-50"
            onChange={(e) => onStateChange("lastName", e.target.value)}
            value={data.lastName}
          />
        </div>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="h-10 dark:border-zinc-50 dark:bg-zinc-950"
          onChange={(e) => onStateChange("email", e.target.value)}
          value={data.email}
        />
        <Select
          value={data.project}
          onValueChange={(e) => onStateChange("project", e)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Project Type" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-50 dark:bg-zinc-950 ">
            <SelectGroup>
              <SelectItem value="Mobile App" className="hover:bg-zinc-900">
                Mobile App
              </SelectItem>
              <SelectItem value="Wesbite" className="hover:bg-zinc-900">
                Website
              </SelectItem>
              <SelectItem value="Consulting" className="hover:bg-zinc-900">
                Consulting
              </SelectItem>
              <SelectItem value="other" className="hover:bg-zinc-900">
                Other
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {data.project == "other" && (
          <Input
            value={data.otherProject}
            onChange={(e) => onStateChange("otherProject", e.target.value)}
            type="text"
            name="projectType"
            placeholder="What type of project"
            className="h-10 dark:border-zinc-50"
          />
        )}
        <Textarea
          name="message"
          placeholder="Tell me about your project! What are you building? What's your timeline?"
          className="h-32 dark:border-zinc-50"
          onChange={(e) => onStateChange("message", e.target.value)}
          value={data.message}
        />
        <Button
          type="submit"
          className="bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 w-full"
          disabled={
            data.firstName == "" ||
            data.email === "" ||
            data.message == "" ||
            data.project == "" ||
            (data.project == "other" && data.otherProject == "") ||
            isLoading
          }
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 border-4 border-zinc-200 rounded-full animate-spin border-t-zinc-600"></div>
              <span className="text-zinc-600">Sending...</span>
            </div>
          ) : (
            "Get in Touch"
          )}
        </Button>
      </form>
    </div>
  );
}
