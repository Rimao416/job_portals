"use client";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { Editor, EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default forwardRef<object, EditorProps>(function RichTextEditor(
  props,
  ref
) {
  return (
    <Editor
      editorClassName={cn(
        "border rounded-md px-3 min-h-[150px] cursor-text ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        props.editorClassName
      )}
      toolbar={{
        options: ["inline", "list", "textAlign", "link", "image"],
        inline: {
          options: ["bold", "italic", "underline", "strikethrough"],
        },
        list: {
          options: ["unordered", "ordered"],
        },
        textAlign: {
          options: ["left", "center", "right"],
        },
        link: {
          options: ["link"],
        },
        image: {
          options: ["image"],
        },
      }}
      editorRef={(r) => {
        if (r) {
          if (typeof ref === "function") {
            ref(r);
          } else if (ref) {
            ref.current = r;
          }
        }
      }}
      {...props}
    />
  );
});
