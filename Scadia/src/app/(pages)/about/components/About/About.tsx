'use client';
import React from 'react';
type AboutProps = {
  file: string;
};
export default function About(props: AboutProps) {
  return (
    <video id='video' autoPlay loop width='100%'>
      <source src={`/${props.file}.mp4`} type='video/mp4' />
    </video>
  );
}
