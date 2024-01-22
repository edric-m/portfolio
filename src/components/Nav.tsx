'use client';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { saveAs } from 'file-saver';
import { AlignmentType, Document, ExternalHyperlink, HeadingLevel, Packer, Paragraph, PositionalTab, PositionalTabAlignment, PositionalTabLeader, PositionalTabRelativeTo, Tab, TextRun } from 'docx';
import React from 'react';
import { Box } from '@mui/material';

const content = {
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          text: 'Edric Mendoza',
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: '+61412478324',
              style: 'Hyperlink',
            }),
            new TextRun({
              text: ' - ',
            }),
            new ExternalHyperlink({
              children: [
                new TextRun({
                  text: 'edjomendoza@gmail.com',
                  style: 'Hyperlink',
                })
              ],
              link: 'mailto:edjomendoza@gmail.com'
            }),
            new TextRun({
              text: ' - ',
            }),
            new ExternalHyperlink({
              children: [
                new TextRun({
                  text: 'LinkedIn',
                  style: 'Hyperlink',
                })
              ],
              link: 'http://www.linkedin.com/in/edric-mendoza-67818193'
            })
          ],
        }),
        new Paragraph({
          text: 'CAREER OBJECTIVE',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Seeking a mid-level software engineering role where I can leverage my experience in designing and implementing full-stack web components. I value writing robust, reusable, and extendable code. And continuously learning about new technologies and workflows that uplift my team and work.'
            })
          ]
        }),
        new Paragraph({
          text: 'EDUCATION',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Bachelor of Software Engineering (Honours)'
            }),
            new TextRun({
              children: [
                new PositionalTab({
                  alignment: PositionalTabAlignment.RIGHT,
                  relativeTo: PositionalTabRelativeTo.MARGIN,
                  leader: PositionalTabLeader.NONE,
                }),
                'Nov 2023 Graduating'
              ],
            })
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Diploma in Professional Engineering Practice'
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'University of Technology Sydney'
            }),
          ],
        }),
        new Paragraph({
          text: 'Coursework: software engineering, electronics, networking, security, signal processing, embedded software',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'TECHNICAL SKILLS',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Languages'
            }),
            new TextRun({
              children: [new Tab(), 'C/C++, Java, SQL, C#, MATLAB, React, Angular, CSS, HTML, JavaScript, VHDL'],
            }),
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Databases'
            }),
            new TextRun({
              children: [new Tab(), 'Postgres, SQLserver'],
            }),
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Systems'
            }),
            new TextRun({
              children: [new Tab(), 'Windows, Linux (Red Hat, Ubuntu)'],
            }),
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Software'
            }),
            new TextRun({
              children: [new Tab(), 'pgAdmin, MCUExpresso, Android Studio, Quartus Prime (Lite)'],
            }),
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Hardware'
            }),
            new TextRun({
              children: [new Tab(), 'NXP Freedom K64 Hardware (FRDM-K64F), Cisco switches/hubs, Altera Cyclone IV'],
            }),
          ]
        }),
        new Paragraph({
          text: 'EXPERIENCE',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Software Engineer'
            }),
            new TextRun({
              children: [
                new PositionalTab({
                  alignment: PositionalTabAlignment.RIGHT,
                  relativeTo: PositionalTabRelativeTo.MARGIN,
                  leader: PositionalTabLeader.NONE,
                }),
                'Jan 2022 – Present'
              ],
            })
          ]
        }),
        new Paragraph({
          text: 'Abyss Solutions Pty. Ltd.'
        }),
        new Paragraph({
          text: 'Delivered key functionalities to a web app that improved the turnaround time of another teams’ work by 400%',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'Quickly mocked up prototypes necessary for engaging stakeholders',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'Proposed and developed a creative solution to a data problem the company had',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'Tech stack: React, nextjs, nestjs, gql, mongo, threejs',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Junior Software Developer'
            }),
            new TextRun({
              children: [
                new PositionalTab({
                  alignment: PositionalTabAlignment.RIGHT,
                  relativeTo: PositionalTabRelativeTo.MARGIN,
                  leader: PositionalTabLeader.NONE,
                }),
                'Apr 2020 – Jul 2021'
              ],
            })
          ]
        }),
        new Paragraph({
          text: 'SeaLadder Pty. Ltd.'
        }),
        new Paragraph({
          text: 'Designed and implemented full-stack solutions using SOLID principles, microservice architecture, and RESTful API’s.',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'Developed code with test driven development using xUnit, Jasmine, Karma combined with the Spectator library.',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'Tech stack: Angular, ASP.NET, Postgres, Azure',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'SOFTWARE PROJECTS',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Web app for learning guitar positions'
            }),
            new TextRun({
              children: [
                new PositionalTab({
                  alignment: PositionalTabAlignment.RIGHT,
                  relativeTo: PositionalTabRelativeTo.MARGIN,
                  leader: PositionalTabLeader.NONE,
                }),
                'Nov 2019 – Feb 2020'
              ],
            })
          ]
        }),
        new Paragraph({
          text: 'https://edric-m.github.io/chordsscales'
        }),
        new Paragraph({
          text: 'Developed a single page application that aims to aid guitarists learn chords and scales through a dynamic fretboard display.',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'Achieved real-time audio analysis on a shared thread while avoiding significant event loop blocking.',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'Applied the Fourier Transform to analyse recorded audio data to listen for musical pitches.',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'Designed an animated menu that reorders itself based on its inputs.',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'Utilised: ReactJS, node.js, npm, CSS, HTML, GitHub, Media Streams API, Visual Studio Code, react-router, react-spring, create-react-app, Discrete Fourier Transform',
          bullet: { 
            level: 0,
          }
        }),
        new Paragraph({
          text: 'SOFT SKILLS',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          text: 'Communication – Worked as a tutor for basic computer skills at Karabi Community Services where I had to communicate technical concepts in a way that is easy to understand. Gained valuable experience from various group projects.'
        }),
        new Paragraph({
          text: 'Teamwork – Team leader in a semester long software engineering project in which our team achieved a high credit. Constantly improving this through my work at SeaLadder.'
        }),
        new Paragraph({
          text: 'Problem solving – Understanding how to analyse audio signals through a web app. Developed throughout my degree, being consistently challenged with physics, calculus, and software design problems.'
        }),
        new Paragraph({
          text: 'Teamwork – Team leader in a semester long software engineering project in which our team achieved a high credit. Constantly improving this through my work at SeaLadder.'
        }),
        new Paragraph({
          text: 'REFEREES',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          text: 'Available upon request',
        })
      ],
    },
  ],
};

const saveDocumentToFile = (fileName: string) => {
  const doc = new Document(content);
  // Create new instance of Packer for the docx module
  // const packer = new Packer();
  // Create a mime type that will associate the new file with Microsoft Word
  const mimeType =
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  // Create a Blob containing the Document instance and the mimeType
  Packer.toBlob(doc).then(blob => {
    const docblob = blob.slice(0, blob.size, mimeType);
    // Save the file using saveAs from the file-saver package
    saveAs(docblob, fileName);
    // saveAs("./../../public/e-mendoza-resume-23.docx", "e-mendoza-resume-23.docx", { autoBom: true });
  });
};

export const Nav = () => {
  const save = () => {
    // Call saveDocumentToFile with the document instance and a filename
    saveDocumentToFile('e-mendoza-resume-23.docx');
  };

  return (
    <Box sx={{position: 'fixed', top: 0, backgroundColor: 'white', width: '100%' }} justifyContent="center">
      <Stack justifyContent="center" direction="row" spacing={2}>
        <Button href="/">Home</Button>
        <Button href="about">About</Button>
        <Button href="experience">Experience</Button>
        {/* <Button href="projects">Projects</Button> */}
        {/* <Button href="education">Education</Button> */}
        {/* <Button href="leadership">Leadership</Button> */}
        {/* <Button href="teamwork">Teamwork</Button> */}
        <Button type="button" onClick={save}>Resume</Button>
        <Button href="contact">Contact</Button>
      </Stack>
    </Box>

  );
};