'use client';

import React, { useState } from 'react';
import {
  Button,
  Chip,
  Dropzone,
  EmbedIconButton,
  H5,
  IconButton,
  TabItem,
  IconTabItem,
  Tabs,
  TextArea,
  H2,
} from '@salutejs/sdds-insol-next';
import { IconClose, IconDownload, IconPlasma } from '@salutejs/plasma-icons';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <H5>{title}</H5>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 12,
      }}
    >
      {children}
    </div>
  </section>
);

export default function Home() {
  const [tab, setTab] = useState(0);
  const [vTab, setVTab] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        padding: 8,
        maxWidth: 960,
      }}
    >
      <H2>V2</H2>
      <Section title="Button">
        <Button text="Default" view="default" />
        <Button text="Accent" view="accent" />
        <Button text="Secondary" view="secondary" />
        <Button
          text="С иконкой"
          view="default"
          contentLeft={<IconDownload color="inherit" />}
        />
      </Section>
      <Section title="IconButton / EmbedIconButton">
        <IconButton view="default">
          <IconClose color="inherit" />
        </IconButton>
        <IconButton view="secondary">
          <IconClose color="inherit" />
        </IconButton>
        <EmbedIconButton view="default" size="m">
          <IconPlasma color="inherit" size="s" />
        </EmbedIconButton>
      </Section>
      <Section title="Chip">
        <Chip text="Chip" view="default" />
        <Chip text="С закрытием" view="secondary" />
        <Chip text="Без крестика" hasClear={false} />
        <Chip text="Иконка" contentLeft={<IconDownload color="inherit" />} />
      </Section>
      <Section title="TextField / TextArea">
        <TextArea
          label="TextArea"
          placeholder="Наведи на поле"
          defaultValue="Значение"
          view="default"
          contentRight={<IconDownload color="inherit" />}
          style={{ width: 320 }}
        />
      </Section>
      <Section title="Dropzone">
        <Dropzone
          width={400}
          height={200}
          title="Click to upload"
          description="or drag and drop"
          onDrop={({ acceptedFiles }) => console.log(acceptedFiles)}
          onChoseFiles={({ acceptedFiles }) => console.log(acceptedFiles)}
        />
      </Section>
      <Section title="Tabs horizontal">
        <Tabs view="filled" size="xs">
          {['One', 'Two', 'Three'].map((label, i) => (
            <TabItem
              key={label}
              view="secondary"
              size="xs"
              selected={i === tab}
              onClick={() => setTab(i)}
            >
              {label}
            </TabItem>
          ))}
        </Tabs>
        <Tabs view="divider" size="xs">
          {['A', 'B', 'C'].map((label, i) => (
            <IconTabItem
              key={label}
              view="divider"
              size="xs"
              selected={i === tab}
              onClick={() => setTab(i)}
            >
              <IconPlasma size="xs" color="inherit" />
            </IconTabItem>
          ))}
        </Tabs>
      </Section>
      <Section title="Tabs vertical">
        <Tabs
          view="divider"
          orientation="vertical"
          size="xs"
          style={{ width: 180 }}
        >
          {['One', 'Two', 'Three'].map((label, i) => (
            <TabItem
              key={label}
              view="divider"
              orientation="vertical"
              size="xs"
              selected={i === vTab}
              onClick={() => setVTab(i)}
            >
              {label}
            </TabItem>
          ))}
        </Tabs>
        <Tabs view="divider" orientation="vertical" size="xs">
          {['A', 'B', 'C'].map((label, i) => (
            <IconTabItem
              key={label}
              view="divider"
              orientation="vertical"
              size="xs"
              selected={i === vTab}
              onClick={() => setVTab(i)}
            >
              <IconPlasma size="xs" color="inherit" />
            </IconTabItem>
          ))}
        </Tabs>
      </Section>
    </div>
  );
}
