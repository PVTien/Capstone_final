import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function CreateProject() {
  const editorRef = useRef(null);
  return (
    <div className="container mt-4">
      <h3>Create Project</h3>
      <form action="">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="projectName" className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <Editor
            name="description"
            apiKey="your-api-key"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <div className="form-group">
          <select className="custom-select">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button className="btn btn-outline-primary">Create project</button>
      </form>
    </div>
  );
}
