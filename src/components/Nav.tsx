"use client";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { saveAs } from 'file-saver';
import { AlignmentType, Document, ExternalHyperlink, HeadingLevel, Packer, Paragraph, TextRun } from 'docx';
import React, { useState, useEffect } from 'react';

const content = {
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          text: "Edric Mendoza",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "+61412478324",
              style: "Hyperlink",
            }),
            new TextRun({
              text: " - ",
            }),
            new ExternalHyperlink({
              children: [
                new TextRun({
                  text: "edjomendoza@gmail.com",
                  style: "Hyperlink",
                })
              ],
              link: "mailto:edjomendoza@gmail.com"
            }),
            new TextRun({
              text: " - ",
            }),
            new ExternalHyperlink({
              children: [
                new TextRun({
                  text: "LinkedIn",
                  style: "Hyperlink",
                })
              ],
              link: "http://www.linkedin.com/in/edric-mendoza-67818193"
            })
          ],
        }),
      ],
    },
  ],
}

const saveDocumentToFile = (fileName: string) => {
  const doc = new Document(content);
  // Create new instance of Packer for the docx module
  const packer = new Packer()
  // Create a mime type that will associate the new file with Microsoft Word
  const mimeType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  // Create a Blob containing the Document instance and the mimeType
  Packer.toBlob(doc).then(blob => {
    const docblob = blob.slice(0, blob.size, mimeType)
    // Save the file using saveAs from the file-saver package
    saveAs(docblob, fileName)
    // saveAs("./../../public/e-mendoza-resume-23.docx", "e-mendoza-resume-23.docx", { autoBom: true });
  })
}

export const Nav = () => {
  const save = () => {
    // Call saveDocumentToFile with the document instance and a filename
    saveDocumentToFile("New Document.docx")
  }

  return (
    <Stack justifyContent="center" direction="row" spacing={2}>
      <Button href="/">Home</Button>
      <Button href="about">About</Button>
      <Button href="experience">Experience</Button>
      <Button href="education">Education</Button>
      <Button href="leadership">Leadership</Button>
      <Button href="teamwork">Teamwork</Button>
      <Button type="button" onClick={save}>Resume</Button>
      <Button href="contact">Contact</Button>
    </Stack>
  );
}