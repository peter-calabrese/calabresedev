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

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  website?: string;
}

export default function Emailer() {
  const defaultStateValue = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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
        className="flex w-full items-center  flex-col gap-2 h-fit p-2"
        onSubmit={onSubmit}
      >
        <div className="flex w-full items-center  gap-2">
          {/* Honeypot - hidden from real users */}
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
          className="h-10 dark:border-zinc-50"
          onChange={(e) => onStateChange("email", e.target.value)}
          value={data.email}
        />
        <Select>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Textarea
          name="message"
          placeholder="Type your message here."
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
            isLoading
          }
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 border-4 border-zinc-200 rounded-full animate-spin border-t-zinc-600"></div>
              <span className="text-zinc-600">Sending...</span>
            </div>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
