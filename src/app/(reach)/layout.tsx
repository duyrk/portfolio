'use client';
import { Autocomplete, Group, Burger, rem, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import classes from './HeaderSearch.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Container className={classes.layoutContainer}>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          </Group>

          <Group>
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
              {items}
            </Group>
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
              data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
              visibleFrom="xs"
            />
          </Group>
        </div>
      </header>
    </Container>
  );
}