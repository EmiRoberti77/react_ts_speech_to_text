export const commands = [
  {
    command: 'open *',
    callback: (website: any) => {
      console.log('func1', website);
      window.open('http://' + website.split(' ').join(' '));
    },
  },
  {
    command: 'change background color to *',
    callback: (color: any) => {
      console.log('func2', color);
      document.body.style.background = color;
    },
  },
  {
    command: 'reset background color',
    callback: () => {
      console.log('func3', 'reset color');
      document.body.style.background = `rgba(0, 0, 0, 0.8)`;
    },
  },
  {
    command: 'email *',
    callback: (emailAddress: any) => {
      console.log('Opening email to:', emailAddress);
      window.open(`mailto:${emailAddress}`);
    },
  },
  {
    command: 'call *',
    callback: (tel: any) => {
      console.log('tel:', tel);
      window.open(`tel:${tel}`);
    },
  },
  {
    command: 'show me my calendar',
    callback: () => {
      console.log('calendar');
      window.open(`https://calendar.google.com/calendar`);
    },
  },
  {
    command: 'go to odin',
    callback: () => {
      console.log('odin');
      window.open(`https://odincloud.ai/app`);
    },
  },
];
